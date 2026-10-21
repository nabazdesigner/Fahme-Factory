import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, Navigation, Compass, Sparkles } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { FahmeLogo } from './FahmeLogo';
import { playClickSound } from '../utils/sound';

export const Location3DMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040b18, 0.025);

    // 2. Camera: Isometric Perspective View
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 320;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 16, 22);
    camera.lookAt(0, 0, 0);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffd600, 2.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x00a3ff, 2, 30);
    blueLight.position.set(-10, 8, -5);
    scene.add(blueLight);

    const beaconLight = new THREE.PointLight(0xffd600, 3, 15);
    beaconLight.position.set(0, 2.5, 0);
    scene.add(beaconLight);

    // 5. 3D Elements Group (for smooth tilt / mouse interaction)
    const mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // Ground Base Plane (Dark Metallic Blueprint Floor)
    const groundGeo = new THREE.PlaneGeometry(38, 38);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x050f22,
      roughness: 0.8,
      metalness: 0.2,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    mapGroup.add(ground);

    // Ground Glowing Blueprint Grid
    const gridHelper = new THREE.GridHelper(36, 36, 0xffd600, 0x143460);
    gridHelper.position.y = 0;
    mapGroup.add(gridHelper);

    // Roads / Avenues in 3D representing Kirkuk Industrial Area
    const roadMat = new THREE.MeshBasicMaterial({ color: 0x0a1c38 });
    const roadLineMat = new THREE.MeshBasicMaterial({ color: 0xffd600, transparent: true, opacity: 0.45 });

    // Main Avenue (Z-axis)
    const mainAvenue = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 36), roadMat);
    mainAvenue.rotation.x = -Math.PI / 2;
    mainAvenue.position.y = 0.01;
    mapGroup.add(mainAvenue);

    // Center divider line
    const divider = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 36), roadLineMat);
    divider.rotation.x = -Math.PI / 2;
    divider.position.y = 0.02;
    mapGroup.add(divider);

    // Cross Road (X-axis)
    const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(36, 3.2), roadMat);
    crossRoad.rotation.x = -Math.PI / 2;
    crossRoad.position.y = 0.01;
    mapGroup.add(crossRoad);

    const crossDivider = new THREE.Mesh(new THREE.PlaneGeometry(36, 0.12), roadLineMat);
    crossDivider.rotation.x = -Math.PI / 2;
    crossDivider.position.y = 0.02;
    mapGroup.add(crossDivider);

    // 6. 3D Industrial Buildings / Factory complex (Low-poly neon styled)
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x07152b,
      roughness: 0.4,
      metalness: 0.6,
    });
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
    const factoryEdgeMat = new THREE.LineBasicMaterial({ color: 0xffd600, transparent: true, opacity: 0.95 });

    // Main Factory Workshop at Center: "معمل حدادة فهمي"
    const factoryBaseGeo = new THREE.BoxGeometry(4.2, 1.8, 3.2);
    const factoryBase = new THREE.Mesh(factoryBaseGeo, new THREE.MeshStandardMaterial({
      color: 0x0c2447,
      roughness: 0.3,
      metalness: 0.8,
    }));
    factoryBase.position.set(0, 0.9, 0);
    mapGroup.add(factoryBase);

    // Factory Wireframe Golden Neon Outline
    const factoryEdges = new THREE.LineSegments(new THREE.EdgesGeometry(factoryBaseGeo), factoryEdgeMat);
    factoryBase.add(factoryEdges);

    // Factory Roof Silhouette (Industrial Gabled Roof)
    const roofGeo = new THREE.ConeGeometry(2.8, 0.9, 4);
    const roof = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({
      color: 0x163764,
      roughness: 0.5,
    }));
    roof.position.set(0, 2.25, 0);
    roof.rotation.y = Math.PI / 4;
    mapGroup.add(roof);

    // Two Cement Silos (Cylinders) at Factory side
    const siloGeo = new THREE.CylinderGeometry(0.45, 0.45, 2.8, 16);
    const siloMat = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, metalness: 0.7, roughness: 0.3 });
    const silo1 = new THREE.Mesh(siloGeo, siloMat);
    silo1.position.set(2.8, 1.4, -0.6);
    mapGroup.add(silo1);
    const silo2 = new THREE.Mesh(siloGeo, siloMat);
    silo2.position.set(2.8, 1.4, 0.6);
    mapGroup.add(silo2);

    // Surrounding Low-Poly Industrial Buildings
    const buildingData = [
      { x: -5.5, z: -4.5, w: 3, d: 2.5, h: 1.2 },
      { x: -6.0, z: 4.5, w: 3.5, d: 2.2, h: 1.4 },
      { x: 5.5, z: 4.8, w: 2.8, d: 2.8, h: 1.1 },
      { x: 5.8, z: -5.0, w: 2.6, d: 2.4, h: 1.3 },
      { x: -10, z: -2.0, w: 2.4, d: 3.0, h: 0.9 },
      { x: 10, z: 2.0, w: 3.0, d: 2.2, h: 1.0 },
    ];

    buildingData.forEach((b) => {
      const geo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const mesh = new THREE.Mesh(geo, buildingMat);
      mesh.position.set(b.x, b.h / 2, b.z);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat);
      mesh.add(edges);
      mapGroup.add(mesh);
    });

    // 7. 3D Floating Location Pin Beacon & Animated Radar Waves
    // Floating Golden Beacon Diamond
    const pinGeo = new THREE.OctahedronGeometry(0.7, 0);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffd600,
      emissive: 0xffaa00,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(0, 4.2, 0);
    mapGroup.add(pin);

    // Light Beam Cylinder shooting from factory to beacon
    const beamGeo = new THREE.CylinderGeometry(0.08, 0.25, 4.2, 16);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffd600,
      transparent: true,
      opacity: 0.35,
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(0, 2.1, 0);
    mapGroup.add(beam);

    // Concentric Sonar Rings expanding on ground
    const ringGeo = new THREE.RingGeometry(0.5, 0.7, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd600,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = -Math.PI / 2;
    ring1.position.y = 0.05;
    mapGroup.add(ring1);

    const ringMat2 = ringMat.clone();
    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = 0.05;
    mapGroup.add(ring2);

    // 8. Mouse & Interactive Tilt Physics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.25;
      targetRotationX = y * 0.15;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle floating and spinning of the 3D pin
      pin.position.y = 4.2 + Math.sin(elapsedTime * 3) * 0.25;
      pin.rotation.y = elapsedTime * 1.5;

      // Concentric Radar Rings Animation
      const progress1 = (elapsedTime * 0.8) % 1;
      const scale1 = 1 + progress1 * 7;
      ring1.scale.set(scale1, scale1, 1);
      (ring1.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.8 * (1 - progress1));

      const progress2 = ((elapsedTime * 0.8) + 0.5) % 1;
      const scale2 = 1 + progress2 * 7;
      ring2.scale.set(scale2, scale2, 1);
      (ring2.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.8 * (1 - progress2));

      // Light beam pulse
      beamMat.opacity = 0.25 + Math.sin(elapsedTime * 4) * 0.15;

      // Smooth camera / map group tilt damping
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      mapGroup.rotation.x = currentRotationX;
      mapGroup.rotation.y = currentRotationY;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 11. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      groundGeo.dispose();
      groundMat.dispose();
      factoryBaseGeo.dispose();
      pinGeo.dispose();
      pinMat.dispose();
    };
  }, []);

  return (
    <a
      href={FACTORY_INFO.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => playClickSound(1400)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="انقر لفتح موقع المعمل في خرائط Google"
      className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-yellow-500/30 bg-[#040b18] mb-4 group cursor-pointer block hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,214,0,0.3)] transition-all select-none"
    >
      {/* Three.js 3D Interactive Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 3D Viewport HUD & Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#040b18]/10 to-[#040b18]/70"></div>

      {/* Top Left: 3D Coordinate / GPS HUD */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
        <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-yellow-500/30 text-[10px] font-mono text-yellow-300 flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>35.4687° N, 44.3922° E</span>
        </div>
        <div className="hidden sm:flex px-2 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold text-slate-300 items-center gap-1">
          <Compass className="w-3 h-3 text-yellow-400" />
          <span>3D VIEW</span>
        </div>
      </div>

      {/* Top Right: 3D Badge Indicator */}
      <div className="absolute top-3 right-3 pointer-events-none">
        <div className="px-2.5 py-1 rounded-lg bg-yellow-950/80 backdrop-blur-md border border-yellow-400/50 text-[11px] font-bold text-yellow-300 shadow-[0_0_12px_rgba(255,214,0,0.25)] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>خريطة ثلاثية الأبعاد 3D</span>
        </div>
      </div>

      {/* Floating Center 3D Pin with Official Fahme Logo (Small) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center group-hover:scale-110 transition-transform duration-300 z-10">
        <div className="px-3.5 py-1.5 rounded-2xl bg-[#02050e]/95 backdrop-blur-md border-2 border-yellow-400 text-yellow-300 shadow-[0_0_25px_rgba(255,214,0,0.65)] flex items-center gap-2 whitespace-nowrap">
          <FahmeLogo size="xs" className="w-12 sm:w-14 h-auto" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#ffd600]"></div>
        </div>
      </div>

      {/* Bottom Hint Overlay on Hover: Compact single-line pill identical to iPad view */}
      <div className="absolute inset-x-0 bottom-2.5 sm:bottom-3 flex justify-center px-2 pointer-events-none transition-all duration-300 z-10">
        <div className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-yellow-400/80 text-yellow-300 text-[10px] sm:text-xs font-bold shadow-[0_0_15px_rgba(255,214,0,0.35)] flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap max-w-fit transition-all duration-300 ${isHovered ? 'scale-105 bg-yellow-950/90 border-yellow-300' : 'opacity-95'}`}>
          <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 shrink-0" />
          <span className="whitespace-nowrap">انقر للانتقال مباشرة إلى موقعنا في Google Maps</span>
          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 shrink-0" />
        </div>
      </div>
    </a>
  );
};
