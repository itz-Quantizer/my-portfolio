// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, Mail, ArrowRight } from 'lucide-react';
// import { projects, interests } from './data'; 

// // --- IMPORT THE COMET COMPONENT ---
// import { CometRain } from './comet-rain';

// export default function Portfolio() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-purple-500/30 font-sans relative overflow-x-hidden">
      
//       {/* --- ADD THE COMET RAIN BACKGROUND HERE --- */}
//       {/* This sits at the top of the stack code-wise, rendering it as the background layer */}
//       <CometRain />
//       {/* ------------------------------------------ */}

//       {/* --- Navbar --- */}
//       <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
//             DEV.PORTFOLIO
//           </Link>
//           <nav className="flex gap-6 text-sm font-medium">
//             <a href="#interests" className="hover:text-cyan-400 transition-colors">Interests</a>
//             <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
//             <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* --- Hero Section --- */}
//       {/* Added 'z-10' to ensure text sits ABOVE the comets */}
//       <section className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto z-10">
        
//         {/* Background Glow Art */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl relative"
//         >
//           <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/20 rounded-full border border-cyan-800/50">
//             Systems & Robotics Engineer
//           </div>
//           <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
//             Building the bridge between <br />
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Hardware & Software.</span>
//           </h2>
//           <p className="text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
//             Specializing in ROS2, Digital System Design, and Embedded Engineering. 
//             From 8-bit simulation to Quantum Tech exploration.
//           </p>
          
//           <div className="flex gap-4">
//             <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
//               <Github size={20} /> GitHub
//             </button>
//             <button className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700">
//               <Mail size={20} /> Contact Me
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* --- Interests Section --- */}
//       <section id="interests" className="relative py-12 px-6 max-w-6xl mx-auto border-t border-white/5 z-10">
//          <div className="mb-8">
//             <h3 className="text-2xl font-bold text-white">Areas of Interest</h3>
//          </div>
//          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {interests.map((item, idx) => (
//                <div key={idx} className="p-4 rounded-xl bg-neutral-900/30 border border-white/5 flex flex-col gap-3 hover:bg-neutral-900 transition-colors backdrop-blur-sm">
//                   <div className={`${item.color}`}>
//                      <item.icon size={28} />
//                   </div>
//                   <div>
//                      <h4 className="font-semibold text-white">{item.title}</h4>
//                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </section>

//       {/* --- Projects Grid --- */}
//       <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto z-10">
//         <div className="mb-12">
//           <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
//           <p className="text-neutral-400">A selection of my work in robotics, simulation, and hardware.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, idx) => (
//             <Link href={`/projects/${project.id}`} key={idx}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="h-full group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden flex flex-col backdrop-blur-sm"
//               >
//                 {/* Gradient Blob */}
//                 {hoveredIndex === idx && (
//                   <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.color} blur-xl transition-opacity duration-500`} />
//                 )}

//                 <div className="relative z-10 flex flex-col h-full">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className={`p-3 rounded-lg bg-neutral-800/50 text-white`}>
//                       <project.icon size={24} />
//                     </div>
//                     <ArrowRight size={20} className="text-neutral-600 group-hover:text-cyan-400 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
//                   </div>
                  
//                   <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
//                   <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
//                     {project.shortDesc}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tech.slice(0, 3).map((t, i) => (
//                       <span key={i} className="px-2 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded border border-neutral-700">
//                         {t}
//                       </span>
//                     ))}
//                     {project.tech.length > 3 && (
//                         <span className="px-2 py-1 text-xs text-neutral-500">+ {project.tech.length - 3}</span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer id="contact" className="py-12 border-t border-white/5 mt-20 bg-neutral-950 relative z-10">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-2xl font-bold text-white mb-6">Let's build something together.</h3>
//           <p className="text-neutral-500 mb-8">
//             Open for collaborations on ROS2, Embedded Systems, and Quantum research.
//           </p>
//           <div className="text-sm text-neutral-600">
//             © {new Date().getFullYear()} Built with Next.js, Tailwind & Framer Motion.
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, ArrowRight, Linkedin, MapPin } from 'lucide-react';
import { projects, interests } from './data'; 
import { CometRain } from './comet-rain';

// import ThreeDViewer from './components/ThreeDViewer';

// 1. CHANGE: Import SpaceBackground (Make sure the file exists in components folder)
import SpaceBackground from './components/SpaceBackground';


// // 2. INSERT: The Color Helper Function
// const getSunColors = (colorClass: string) => {
//     let colors = {
//         core: '#ffffff',
//         plasma: '#ffea00', // Yellow
//         corona: '#ff9100', // Orange
//         outer: '#ff0000',  // Red
//     };

//     if (colorClass.includes('blue') || colorClass.includes('cyan') || colorClass.includes('sky')) {
//         colors = { core: '#ffffff', plasma: '#00eaff', corona: '#008cff', outer: '#0011ff' };
//     } else if (colorClass.includes('rose') || colorClass.includes('red')) {
//         colors = { core: '#fff7e6', plasma: '#ff4800', corona: '#ff0000', outer: '#8a0000' };
//     } else if (colorClass.includes('emerald') || colorClass.includes('green')) {
//         colors = { core: '#ffffff', plasma: '#00ff48', corona: '#00bd35', outer: '#005919' };
//     } else if (colorClass.includes('purple') || colorClass.includes('indigo') || colorClass.includes('violet')) {
//         colors = { core: '#ffffff', plasma: '#d000ff', corona: '#8c00ff', outer: '#4800ff' };
//     }
//     return colors;
// };


// --- Helper: Get Dynamic Sun Colors ---
const getSunColors = (colorClass: string) => {
    // Default: Type G (Yellow Star - Like our Sun)
    let colors = {
        core: '#fff4ea',   // White-Yellow core
        plasma: '#ffd700', // Pure Gold
        corona: '#ffb900', // Orange-Yellow
        outer: '#ff8c00',  // Deep Orange
    };

    // 1. Type O (Blue Supergiant)
    if (colorClass.includes('blue') || colorClass.includes('cyan') || colorClass.includes('sky')) {
        colors = { core: '#f0f8ff', plasma: '#00bfff', corona: '#007fff', outer: '#0000ff' };
    } 
    // 2. Neutron Star / Pulsar (Purple/Indigo) <--- MOVED TO 2ND
    else if (colorClass.includes('purple') || colorClass.includes('violet') || colorClass.includes('fuchsia') || colorClass.includes('indigo')) {
        colors = { 
            core: '#f8e7ff',   // White-Purple
            plasma: '#d000ff', // Neon Purple
            corona: '#a020f0', // Purple
            outer: '#4b0082'   // Indigo/Deep Purple
        };
    }
    // 3. Type M (Red Dwarf/Giant)
    else if (colorClass.includes('red') || colorClass.includes('rose')) {
        colors = { core: '#ffddd0', plasma: '#ff4500', corona: '#ff0000', outer: '#8b0000' };
    } 
    // 4. Type K (Orange Star)
    else if (colorClass.includes('orange') || colorClass.includes('amber')) {
        colors = { core: '#ffefd5', plasma: '#ffa500', corona: '#ff7f50', outer: '#cd5c5c' };
    } 
    // 5. Sci-Fi (Green/Emerald)
    else if (colorClass.includes('emerald') || colorClass.includes('green') || colorClass.includes('lime')) {
        colors = { core: '#f0fff4', plasma: '#00ff48', corona: '#00bd35', outer: '#005919' };
    }
    // 6. Type A (White/Silver)
    else if (colorClass.includes('slate') || colorClass.includes('gray') || colorClass.includes('zinc')) {
        colors = { core: '#ffffff', plasma: '#e6e6e6', corona: '#bdc3c7', outer: '#7f8c8d' };
    }

    return colors;
};

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // --- CONFIGURATION: UPDATE YOUR DETAILS HERE ---
  const socialLinks = {
    github: "https://github.com/itz-Quantizer", // <--- Put your GitHub URL here
    linkedin: "https://www.linkedin.com/in/thanooj-mahenderkar-/", // <--- Put your LinkedIn URL here
    email: "mailto:thanoojmahenderkar@gmail.com" // <--- Put your email here
  };

  return (
    

    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-purple-500/30 font-sans relative overflow-x-hidden">
      
      {/* --- Background Layers --- */}
      <CometRain />
      
      {/* --- Navbar --- */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            DEV.PORTFOLIO.QUANTIZER
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#interests" className="hover:text-cyan-400 transition-colors">Interests</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto z-10">
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl relative"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/20 rounded-full border border-cyan-800/50">
            {/* Systems & Robotics Engineer */}POLYMATH | QUNATUM ENGINEER | ROBOTICS ENTHUSIAST
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building the bridge between <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Hardware & Software.</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
            Specializing in Physics, ROS2, Digital System Design, and Electronic Engineering. 
            From 8-bit Computer simulation to Quantum Tech exploration.
          </p>
          
          {/* --- FIXED BUTTONS --- */}
          <div className="flex gap-4">
            {/* GitHub Button: Now an <a> tag pointing to your config */}
            <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            
            {/* Contact Button: Smooth scrolls to footer */}
            <a 
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              <Mail size={20} /> Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- Interests Section --- */}
      <section id="interests" className="relative py-12 px-6 max-w-6xl mx-auto border-t border-white/5 z-10">
         <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Areas of Interest</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((item, idx) => (
               <div key={idx} className="p-4 rounded-xl bg-neutral-900/30 border border-white/5 flex flex-col gap-3 hover:bg-neutral-900 transition-colors backdrop-blur-sm">
                  <div className={`${item.color}`}>
                     <item.icon size={28} />
                  </div>
                  <div>
                     <h4 className="font-semibold text-white">{item.title}</h4>
                     <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- Projects Grid --- */}
      {/* <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto z-10">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
          <p className="text-neutral-400">A selection of my work in robotics, simulation, and hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link href={`/projects/${project.id}`} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden flex flex-col backdrop-blur-sm"
              >
                {hoveredIndex === idx && (
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.color} blur-xl transition-opacity duration-500`} />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg bg-neutral-800/50 text-white`}>
                      <project.icon size={24} />
                    </div>
                    <ArrowRight size={20} className="text-neutral-600 group-hover:text-cyan-400 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded border border-neutral-700">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-neutral-500">+ {project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section> */}
      <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto z-10">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
          <p className="text-neutral-400">A selection of my work in robotics, simulation, and hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            // 4. CALCULATE: Get the colors for this specific project
            const mainColorClass = project.color.split(' ')[0].replace('from-', '');
            const sunColors = getSunColors(mainColorClass);

            return (
                <Link href={`/projects/${project.id}`} key={idx}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative h-full bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden flex flex-col backdrop-blur-sm"
                >
                    {/* Background Glow */}
                    {hoveredIndex === idx && (
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.color} blur-xl transition-opacity duration-500`} />
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg bg-neutral-800/50 text-white`}>
                                <project.icon size={24} />
                            </div>
                            <ArrowRight size={20} className="text-neutral-600 group-hover:text-cyan-400 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                        
                        {/* 5. APPLY: The Dynamic Sun Glow Style to the Title */}
                        <h4 
                            className="text-xl font-bold mb-2 sun-glow-card"
                            style={{
                                // @ts-ignore
                                '--core': sunColors.core,
                                '--plasma': sunColors.plasma,
                                '--corona': sunColors.corona,
                                '--outer': sunColors.outer,
                            }}
                        >
                            {project.title}
                        </h4>

                        <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                            {project.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="px-2 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded border border-neutral-700">
                                {t}
                            </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-2 py-1 text-xs text-neutral-500">+ {project.tech.length - 3}</span>
                            )}
                        </div>
                    </div>
                </motion.div>
                </Link>
            );
          })}
        </div>
      </section>

      {/* --- NEW: Contact Details Section --- */}
      <footer id="contact" className="py-20 border-t border-white/5 mt-20 bg-neutral-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-neutral-400 max-w-xl mx-auto">
                    Currently open to full-time opportunities in Robotics Software Engineering and Embedded Systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                {/* Email Card */}
                <a href={socialLinks.email} className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-cyan-500/50 transition-colors text-center backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center text-cyan-400">
                        <Mail size={24} />
                    </div>
                    <h4 className="font-semibold text-white">Email Me</h4>
                    <p className="text-sm text-neutral-500 mt-1 group-hover:text-cyan-400 transition-colors">Click to Send</p>
                </a>

                {/* LinkedIn Card */}
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-blue-500/50 transition-colors text-center backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center text-blue-400">
                        <Linkedin size={24} />
                    </div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-sm text-neutral-500 mt-1 group-hover:text-blue-400 transition-colors">Let's Connect</p>
                </a>

                {/* Location Card
                <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center text-emerald-400">
                        <MapPin size={24} />
                    </div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-sm text-neutral-500 mt-1">Open to Relocation</p>
                </div> */}
            </div>

            <div className="text-center mt-12 text-sm text-neutral-600">
                © {new Date().getFullYear()} Built with Next.js, Tailwind & Framer Motion.
            </div>
        </div>
      </footer>

                  {/* 6. INSERT: CSS Styles for the Glow Effect */}
      <style>{`
          .sun-glow-card {
              color: var(--core);
              text-shadow: 
                0 0 2px var(--core),
                0 0 10px var(--plasma),
                0 0 20px var(--corona),
                0 0 30px var(--outer); 
              transition: text-shadow 0.3s ease;
          }

          .group:hover .sun-glow-card {
              text-shadow: 
                0 0 4px var(--core),
                0 0 15px var(--plasma),
                0 0 25px var(--corona),
                0 0 40px var(--outer),
                0 0 60px var(--outer);
          }
      `}</style>


    </main>
  );
}





// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Terminal, Cpu, FileText, Printer, Radio, Bot } from 'lucide-react';
// // FIX: Removed 'interests' from the import below
// import { projects } from './data';
// import { QuantumRNGViz, ComputerEmulator, RosSlamViz, PrinterViz, ConsoleViz } from './visualizations';

// // Helper function to render the correct visualization based on type
// const renderViz = (type: string | undefined) => {
//   switch (type) {
//     case 'slam': return <RosSlamViz />;
//     case 'quantum': return <QuantumRNGViz />;
//     case 'cpu': return <ComputerEmulator />;
//     case 'printer': return <PrinterViz />;
//     case 'console': return <ConsoleViz />;
//     default: return (
//       <div className="w-full h-full bg-neutral-900 flex items-center justify-center border border-white/5">
//          <div className="text-neutral-700 font-mono text-xs">NO_SIGNAL_INPUT</div>
//       </div>
//     );
//   }
// };

// // Helper to map icons string to Lucide component
// const getIcon = (id: string) => {
//     if(id.includes('ros')) return <Bot size={20} />;
//     if(id.includes('rng')) return <Radio size={20} />;
//     if(id.includes('8bit')) return <Cpu size={20} />;
//     if(id.includes('printer')) return <Printer size={20} />;
//     if(id.includes('paper')) return <FileText size={20} />;
//     return <Terminal size={20} />;
// }

// export default function Portfolio() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-purple-500/30 font-sans">
      
//       {/* --- Navbar (Technical Style) --- */}
//       <div className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
//           <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                   <Terminal className="w-4 h-4 text-emerald-500" />
//                   <span className="font-mono text-xs text-emerald-500 tracking-wider">SYSTEM.ONLINE</span>
//               </div>
//               <div className="flex items-center gap-6 text-xs font-mono text-gray-500">
//                   <span className="hidden sm:inline">MEM: 64GB</span>
//                   <div className="flex items-center gap-1 text-orange-400">
//                       <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
//                       <span>LOCAL_ENV</span>
//                   </div>
//               </div>
//           </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          
//           {/* --- Hero Section --- */}
//           <header className="mb-20">
//               <div className="inline-block px-3 py-1 border border-purple-500/30 rounded-full bg-purple-900/10 text-purple-400 text-xs font-mono mb-6">
//                   QUANTUM // HARDWARE // ROBOTICS
//               </div>
//               <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent mb-8">
//                   Hardware from <br />
//                   <span className="text-white relative">
//                       Scratch.
//                   </span>
//               </h1>
//               <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
//                   I am a Hardware Purist and Quantum Tech Enthusiast. I build Digital Twins, embedded systems, and robotic simulations from the atomic level up.
//               </p>
//           </header>

//           {/* --- Bento Grid with LIVE VISUALIZATIONS --- */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
//               {projects.map((project, idx) => (
//                   <Link 
//                     href={`/projects/${project.id}`} 
//                     key={idx}
//                     className={`group relative bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${project.id === 'ros2-slam' ? 'md:col-span-2' : ''}`}
//                     onMouseEnter={() => setHoveredIndex(idx)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                   >
//                       {/* Header (Floating) */}
//                       <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
//                           <div className={`p-1.5 rounded-md bg-black/80 backdrop-blur border border-white/10 text-white shadow-lg`}>
//                               {getIcon(project.id)}
//                           </div>
//                           <span className="text-sm font-semibold tracking-tight bg-black/50 px-2 py-1 rounded text-white backdrop-blur-sm">
//                             {project.title}
//                           </span>
//                       </div>

//                       {/* LIVE VISUALIZATION CONTAINER */}
//                       <div className="absolute inset-0 pt-16 px-4 pb-4 bg-neutral-950">
//                           <div className="w-full h-full rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-purple-500/50 transition-all shadow-2xl relative">
                              
//                               {/* The Live Component */}
//                               {renderViz(project.vizType)}

//                               {/* Overlay Gradient for readability */}
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
//                           </div>
//                       </div>

//                       {/* Description appearing on Hover */}
//                       <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
//                            <div className="flex gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
//                                 {project.tech.slice(0, 3).map((t, i) => (
//                                     <span key={i} className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-300 border border-white/5">
//                                         {t}
//                                     </span>
//                                 ))}
//                            </div>
//                            <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-white transition-colors">
//                                {project.shortDesc}
//                            </p>
//                       </div>
//                   </Link>
//               ))}
//           </div>

//           {/* --- Footer Stack --- */}
//           <div className="mt-20 border-t border-white/5 pt-10">
//               <h3 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">System Architecture</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-sm">
//                   <div>
//                       <div className="text-white mb-1">Next.js 15</div>
//                       <div className="text-xs text-gray-600">App Router</div>
//                   </div>
//                   <div>
//                       <div className="text-white mb-1">ROS 2 Humble</div>
//                       <div className="text-xs text-gray-600">Middleware</div>
//                   </div>
//                   <div>
//                       <div className="text-white mb-1">Canvas API</div>
//                       <div className="text-xs text-gray-600">WebGL/2D</div>
//                   </div>
//                   <div>
//                       <div className="text-white mb-1">Tailwind</div>
//                       <div className="text-xs text-gray-600">Styling</div>
//                   </div>
//               </div>
//           </div>
//       </div>
//     </main>
//   );
// }