import subprocess
import shutil
import os

svg_code = """<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000" height="580" viewBox="0 0 1000 580" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Rich Golden Yellow Surface Gradient matching Photoroom_20261010_230113.png -->
    <linearGradient id="plateYellow" x1="500" y1="45" x2="500" y2="535" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFD00A" />
      <stop offset="25%" stop-color="#FFBE00" />
      <stop offset="70%" stop-color="#F5A800" />
      <stop offset="100%" stop-color="#E89600" />
    </linearGradient>

    <!-- Outer Frame Heavy Bevel Rim (Metallic Dark Navy/Graphite) -->
    <linearGradient id="rimBevel" x1="200" y1="25" x2="800" y2="560" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3D5377" />
      <stop offset="15%" stop-color="#233149" />
      <stop offset="65%" stop-color="#121A2B" />
      <stop offset="100%" stop-color="#080C15" />
    </linearGradient>

    <!-- 3D Roof Pediment Facet Gradients (Creased at Center Apex) -->
    <linearGradient id="roofLeft" x1="290" y1="84" x2="290" y2="234" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3A5178" />
      <stop offset="35%" stop-color="#223048" />
      <stop offset="100%" stop-color="#141C2D" />
    </linearGradient>

    <linearGradient id="roofRight" x1="710" y1="84" x2="710" y2="234" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#253450" />
      <stop offset="40%" stop-color="#152033" />
      <stop offset="100%" stop-color="#090E17" />
    </linearGradient>

    <!-- 3D Beveled Lettering Colors -->
    <linearGradient id="letterFrontFace" x1="500" y1="270" x2="500" y2="430" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#202E46" />
      <stop offset="35%" stop-color="#141E30" />
      <stop offset="100%" stop-color="#0D1422" />
    </linearGradient>

    <linearGradient id="letterChamferHighlight" x1="500" y1="270" x2="500" y2="430" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6081B3" />
      <stop offset="45%" stop-color="#395179" />
      <stop offset="100%" stop-color="#1A263B" />
    </linearGradient>

    <!-- Lower Banner 3D Bar Gradient -->
    <linearGradient id="bannerBar" x1="500" y1="450" x2="500" y2="528" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#31466A" />
      <stop offset="12%" stop-color="#1A263B" />
      <stop offset="85%" stop-color="#101828" />
      <stop offset="100%" stop-color="#080C14" />
    </linearGradient>

    <!-- Embossed White 3D Subtitle -->
    <linearGradient id="whiteSubtitle" x1="500" y1="472" x2="500" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="70%" stop-color="#EDF3FA" />
      <stop offset="100%" stop-color="#D0DEED" />
    </linearGradient>
  </defs>

  <!-- ==================================================== -->
  <!-- 1. AMBIENT SIGN DROP SHADOW                          -->
  <!-- ==================================================== -->
  <path d="M 500,32 L 948,194 Q 962,200 962,216 L 962,524 Q 962,550 936,550 L 64,550 Q 38,550 38,524 L 38,216 Q 38,200 52,194 Z" fill="#000000" opacity="0.45" transform="translate(0, 8)" />

  <!-- ==================================================== -->
  <!-- 2. OUTER BEVELED METALLIC NAVY RIM (GABLE PROFILE)   -->
  <!-- ==================================================== -->
  <path d="M 500,32 L 948,194 Q 962,200 962,216 L 962,524 Q 962,550 936,550 L 64,550 Q 38,550 38,524 L 38,216 Q 38,200 52,194 Z" fill="url(#rimBevel)" />

  <!-- Outer Rim Top-Left Specular Glint Highlight -->
  <path d="M 500,36 L 944,196 L 938,202 L 500,43 L 62,202 L 56,196 Z" fill="#7896C4" opacity="0.8" />

  <!-- Inner Recessed Groove Channel -->
  <path d="M 500,48 L 936,202 Q 944,206 944,218 L 944,514 Q 944,534 924,534 L 76,534 Q 56,534 56,514 L 56,218 Q 56,206 64,202 Z" fill="#0B111D" />

  <!-- Inner Raised Metallic Lip Edge -->
  <path d="M 500,52 L 930,205 Q 938,209 938,220 L 938,510 Q 938,528 920,528 L 80,528 Q 62,528 62,510 L 62,220 Q 62,209 70,205 Z" fill="#1E2A3E" />

  <!-- ==================================================== -->
  <!-- 3. INNER WARM GOLDEN-YELLOW SIGN FIELD               -->
  <!-- ==================================================== -->
  <path d="M 500,56 L 924,208 Q 932,212 932,222 L 932,506 Q 932,522 916,522 L 84,522 Q 68,522 68,506 L 68,222 Q 68,212 76,208 Z" fill="url(#plateYellow)" />

  <!-- Subtle Top Warm Glow Rim on Yellow Face -->
  <path d="M 500,58 L 922,209 L 920,213 L 500,63 L 80,213 L 78,209 Z" fill="#FFF4BD" opacity="0.65" />

  <!-- ==================================================== -->
  <!-- 4. 3D TRIANGULAR ROOF PEDIMENT                       -->
  <!-- ==================================================== -->
  <!-- Drop shadow cast onto the yellow surface -->
  <polygon points="500,86 902,236 98,236" fill="#000000" opacity="0.38" transform="translate(0, 6)" />

  <!-- Left Facet (Lighted by ambient key light) -->
  <polygon points="500,86 500,232 98,232" fill="url(#roofLeft)" />

  <!-- Right Facet (Shaded side) -->
  <polygon points="500,86 902,232 500,232" fill="url(#roofRight)" />

  <!-- Center 3D Ridge Crease Highlight Line -->
  <line x1="500" y1="86" x2="500" y2="232" stroke="#52709B" stroke-width="2" />

  <!-- Top-Left Roof Slope Specular Glint Highlight -->
  <line x1="500" y1="86" x2="98" y2="232" stroke="#88A8D6" stroke-width="3" stroke-linecap="round" />

  <!-- Top-Right Roof Slope Ambient Highlight -->
  <line x1="500" y1="86" x2="902" y2="232" stroke="#2B3D5B" stroke-width="2" stroke-linecap="round" />

  <!-- Roof Bottom Rim Underside Shadow -->
  <line x1="98" y1="232" x2="902" y2="232" stroke="#080D15" stroke-width="3.5" />

  <!-- ==================================================== -->
  <!-- 5. 3D EMBOSSED SLAB-SERIF 'FAHME' LETTERS            -->
  <!-- ==================================================== -->
  <g>
    <!-- Layer 1: Deep Soft Cast Drop Shadow (downwards offset) -->
    <text x="505" y="432" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="#000000" opacity="0.45">FAHME</text>

    <!-- Layer 2: Deep Dark Extrusion Base (Bottom Bevel) -->
    <text x="504" y="429" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="#05080E">FAHME</text>

    <!-- Layer 3: Mid-Tone Extrusion Shadow (Side Bevel) -->
    <text x="503" y="427" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="#0D1522">FAHME</text>

    <!-- Layer 4: Top/Left Chamfer Bevel Highlight (Light reflection) -->
    <text x="498" y="421" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="url(#letterChamferHighlight)">FAHME</text>

    <!-- Layer 5: Front Main Raised Face (Metallic Dark Navy) -->
    <text x="500" y="423" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="url(#letterFrontFace)">FAHME</text>

    <!-- Layer 6: Crisp Beveled Perimeter Stroke -->
    <text x="500" y="423" text-anchor="middle" font-family="Alfa Slab One, sans-serif" font-size="188" letter-spacing="3" fill="none" stroke="#5272A3" stroke-width="1.8" stroke-linejoin="round" opacity="0.85">FAHME</text>
  </g>

  <!-- ==================================================== -->
  <!-- 6. LOWER 3D NAVY BANNER BAR                          -->
  <!-- ==================================================== -->
  <g>
    <!-- Banner Drop Shadow -->
    <rect x="84" y="460" width="832" height="68" rx="12" fill="#000000" opacity="0.38" />

    <!-- Banner 3D Body -->
    <rect x="84" y="454" width="832" height="68" rx="12" fill="url(#bannerBar)" stroke="#32476B" stroke-width="1.5" />

    <!-- Top Specular Highlight on Banner -->
    <line x1="96" y1="456" x2="904" y2="456" stroke="#7192C2" stroke-width="1.8" stroke-linecap="round" opacity="0.9" />

    <!-- Bottom Rim Dark Shadow on Banner -->
    <line x1="96" y1="521" x2="904" y2="521" stroke="#05080E" stroke-width="1.5" stroke-linecap="round" />
  </g>

  <!-- ==================================================== -->
  <!-- 7. EMBOSSED WHITE 3D SUBTITLE: BLOCK MACHINE FACTORY -->
  <!-- ==================================================== -->
  <g>
    <!-- Dark Underside Bevel Shadow -->
    <text x="500" y="496" text-anchor="middle" dominant-baseline="central" font-family="Outfit, sans-serif" font-weight="800" font-size="41" fill="#05090F" letter-spacing="5" opacity="0.95">BLOCK MACHINE FACTORY</text>

    <!-- Main Crisp White Face -->
    <text x="500" y="493" text-anchor="middle" dominant-baseline="central" font-family="Outfit, sans-serif" font-weight="800" font-size="41" fill="url(#whiteSubtitle)" letter-spacing="5">BLOCK MACHINE FACTORY</text>

    <!-- Top Crisp Glint Highlight -->
    <text x="500" y="492" text-anchor="middle" dominant-baseline="central" font-family="Outfit, sans-serif" font-weight="800" font-size="41" fill="#FFFFFF" letter-spacing="5" opacity="0.98">BLOCK MACHINE FACTORY</text>
  </g>
</svg>"""

with open('public/fahme_logo.svg', 'w') as f:
    f.write(svg_code)

# Render to public/fahme_logo.png
subprocess.run(['rsvg-convert', '-w', '1000', '-h', '580', 'public/fahme_logo.svg', '-o', 'public/fahme_logo.png'])

# Also copy to src/assets/images and dist
shutil.copy('public/fahme_logo.png', 'src/assets/images/fahme_logo.png')
if os.path.exists('dist'):
    shutil.copy('public/fahme_logo.png', 'dist/fahme_logo.png')
    shutil.copy('public/fahme_logo.svg', 'dist/fahme_logo.svg')

print("Fahme 3D Embossed Logo successfully rendered to public/fahme_logo.png, src/assets/images/fahme_logo.png, and dist/fahme_logo.png")
