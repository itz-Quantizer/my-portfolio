// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import { Printer, Terminal } from 'lucide-react';

// // --- 1. Quantum RNG Visualizer (Canvas) ---
// export const QuantumRNGViz = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     const width = canvas.width;
//     const height = canvas.height;
//     const pixelSize = 4;
//     const cols = Math.ceil(width / pixelSize);
//     const rows = Math.ceil(height / pixelSize);

//     const draw = () => {
//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const val = Math.random();
//           const colorVal = Math.floor(val * 255);
          
//           let r = 0, g = 0, b = 0;
//           if (val > 0.98) { // "Excited state"
//             r = 255; g = 255; b = 255; 
//           } else {
//             // Purple/Blue Matrix Tint
//             r = 10;
//             g = Math.floor(colorVal * 0.2); 
//             b = Math.floor(colorVal * 0.5);
//           }
          
//           ctx.fillStyle = `rgb(${r},${g},${b})`;
//           ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
//         }
//       }
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     draw();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
//       <div className="absolute top-2 left-2 z-10 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] text-purple-400 font-mono border border-purple-500/30">
//         TRNG_STREAM_ACTIVE
//       </div>
//       <canvas ref={canvasRef} width={400} height={250} className="w-full h-full opacity-80" />
//       <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 font-mono">
//         Entropy: Avalanche Noise
//       </div>
//     </div>
//   );
// };

// // --- 2. 8-Bit Computer Emulator ---
// export const ComputerEmulator = () => {
//   const [regA, setRegA] = useState(0);
//   const [regB, setRegB] = useState(0);
//   const [pc, setPc] = useState(0);
//   const [activeWire, setActiveWire] = useState('BUS');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPc(prev => (prev + 1) % 16);
//       setRegA(Math.floor(Math.random() * 255));
//       setRegB(Math.floor(Math.random() * 255));
      
//       const wires = ['BUS', 'ALU', 'RAM'];
//       setActiveWire(wires[Math.floor(Math.random() * wires.length)]);
//     }, 800); 
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-full bg-slate-950 p-4 font-mono text-xs text-green-400 overflow-hidden relative">
//       <div className="grid grid-cols-2 gap-4 h-full relative z-10">
//         <div className="border border-green-900/50 p-2 rounded bg-black/40 backdrop-blur-sm">
//           <div className="text-gray-500 mb-1 text-[10px] uppercase">Registers</div>
//           <div className="flex justify-between">
//             <span>A:</span> <span className="text-white">0x{regA.toString(16).toUpperCase().padStart(2, '0')}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>B:</span> <span className="text-white">0x{regB.toString(16).toUpperCase().padStart(2, '0')}</span>
//           </div>
//           <div className="flex justify-between mt-2 pt-2 border-t border-white/10">
//             <span>PC:</span> <span className="text-yellow-400">{pc.toString(2).padStart(4, '0')}</span>
//           </div>
//         </div>
        
//         <div className="flex flex-col gap-2">
//           <div className={`border p-2 rounded transition-colors duration-300 text-center ${activeWire === 'ALU' ? 'border-red-500 bg-red-900/20 text-red-300' : 'border-gray-800 text-gray-600'}`}>
//             ALU
//           </div>
//           <div className={`border p-2 rounded transition-colors duration-300 text-center ${activeWire === 'RAM' ? 'border-blue-500 bg-blue-900/20 text-blue-300' : 'border-gray-800 text-gray-600'}`}>
//             RAM
//           </div>
//         </div>
//       </div>
      
//       {/* Animated Bus Wire */}
//       <div className={`absolute bottom-4 left-4 right-4 h-1 rounded transition-all duration-200 ${activeWire === 'BUS' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-800'}`}></div>
//     </div>
//   );
// };

// // --- 3. ROS2 SLAM Visualizer ---
// export const RosSlamViz = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let robotX = 150;
//     let robotY = 100;
//     let angle = 0;
//     // Fix: explicitly type the map data array
//     const mapData: {x: number, y: number}[] = [];

//     let animationFrameId: number;

//     const draw = () => {
//       // Clear background
//       ctx.fillStyle = '#111';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw Map Points
//       ctx.fillStyle = '#4ade80';
//       mapData.forEach(p => {
//         ctx.fillRect(p.x, p.y, 2, 2);
//       });

//       // Move Robot
//       angle += 0.02;
//       robotX += Math.cos(angle) * 1;
//       robotY += Math.sin(angle * 0.7) * 1;

//       // Reset if out of bounds
//       if (robotX > 280 || robotX < 20) robotX = 150;
//       if (robotY > 180 || robotY < 20) robotY = 100;

//       // Simulate Lidar Raycast
//       for(let i=0; i<5; i++) {
//         const scanAngle = angle + (Math.random() - 0.5) * 2;
//         const dist = 20 + Math.random() * 40;
//         const hitX = robotX + Math.cos(scanAngle) * dist;
//         const hitY = robotY + Math.sin(scanAngle) * dist;
//         if(Math.random() > 0.8) mapData.push({x: hitX, y: hitY});
//       }

//       // Limit map size
//       if(mapData.length > 300) mapData.splice(0, 5);

//       // Draw Robot Triangle
//       ctx.save();
//       ctx.translate(robotX, robotY);
//       ctx.rotate(angle);
//       ctx.fillStyle = '#ef4444';
//       ctx.beginPath();
//       ctx.moveTo(8, 0);
//       ctx.lineTo(-4, 4);
//       ctx.lineTo(-4, -4);
//       ctx.fill();
//       ctx.restore();

//       animationFrameId = requestAnimationFrame(draw);
//     };

//     draw();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
//         <canvas ref={canvasRef} width={300} height={200} className="w-full h-full" />
//         <div className="absolute top-2 right-2 flex flex-col items-end pointer-events-none">
//             <span className="text-[10px] text-green-500 font-mono">/scan: 24Hz</span>
//             <span className="text-[10px] text-green-500 font-mono">/odom: ACT</span>
//         </div>
//     </div>
//   );
// };

// // --- 4. 3D Printer Viz ---
// export const PrinterViz = () => {
//     return (
//         <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
//             {/* Grid Background */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,30,0.5)_2px,transparent_2px),linear-gradient(90deg,rgba(20,20,30,0.5)_2px,transparent_2px)] bg-[size:20px_20px]"></div>
            
//             <div className="z-10 text-orange-500 animate-pulse">
//                 <Printer size={40} />
//             </div>
//             <div className="mt-4 font-mono text-xs text-orange-300 z-10 uppercase tracking-widest">Core_XY Gantry</div>
//             <div className="text-[10px] text-gray-500 z-10 font-mono mt-1">NOZZLE: 210°C</div>
            
//             {/* Animated Path Line */}
//             <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
//                 <path d="M 50 150 Q 150 50 250 150" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5">
//                         <animate attributeName="stroke-dashoffset" from="0" to="100" dur="5s" repeatCount="indefinite" />
//                 </path>
//             </svg>
//         </div>
//     )
// }

// // --- 5. SITL / Console Viz ---
// export const ConsoleViz = () => {
//     return (
//         <div className="w-full h-full bg-slate-950 flex flex-col p-4 font-mono text-xs border-l-2 border-indigo-500/50">
//             <div className="text-gray-500 border-b border-gray-800 pb-2 mb-2">terminal@ros2-node:~</div>
//             <div className="space-y-1">
//                 <div className="text-green-400">$ ros2 launch nav2_bringup</div>
//                 <div className="text-indigo-300">[INFO] [launch]: All systems go!</div>
//                 <div className="text-indigo-300">[INFO] [lifecycle]: Configuring...</div>
//                 <div className="text-yellow-400">[WARN] [map_server]: Loading map...</div>
//                 <div className="text-gray-500 animate-pulse">_</div>
//             </div>
//         </div>
//     )
// }