import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'fahme-photo-upload-middleware',
        configureServer(server) {
          server.middlewares.use('/api/upload-photos', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  const uploadDir = path.resolve(__dirname, 'public/uploads');
                  if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                  }
                  const savedUrls: string[] = [];
                  if (Array.isArray(data.images)) {
                    data.images.forEach((item: { base64: string }, idx: number) => {
                      if (!item.base64) return;
                      const base64Data = item.base64.replace(/^data:image\/\w+;base64,/, '');
                      const buffer = Buffer.from(base64Data, 'base64');
                      const filename = `fahme_machine_view_${idx + 1}.jpg`;
                      fs.writeFileSync(path.join(uploadDir, filename), buffer);
                      savedUrls.push(`/uploads/${filename}`);
                    });
                  }
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, urls: savedUrls }));
                } catch (e: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: e.message }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end('Method Not Allowed');
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

