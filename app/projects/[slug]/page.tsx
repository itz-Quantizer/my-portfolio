// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Calendar, Github, ExternalLink } from 'lucide-react';
// import { projects } from '../../data';

// interface PageProps {
//   params: { slug: string };
// }

// export default function ProjectDetail({ params }: PageProps) {
//   // Find the project that matches the URL slug
//   const project = projects.find((p) => p.id === params.slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-200">

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-4xl mx-auto px-6 py-4">
//           <Link href="/" className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors">
//             <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">

//         {/* Header Area */}
//         <div className="mb-10">
//             <div className={`inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-neutral-300`}>
//                 <project.icon size={14} />
//                 {project.category}
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                 {project.title}
//             </h1>

//             <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
//                 {project.shortDesc}
//             </p>
//         </div>

//         <hr className="border-white/10 mb-10" />

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//             {/* Left Column: Main Description */}
//             <div className="md:col-span-2 space-y-8">
//                 <div>
//                     <h3 className="text-2xl font-semibold text-white mb-4">Project Overview</h3>
//                     <p className="text-neutral-300 leading-7">
//                         {project.fullDesc}
//                     </p>
//                 </div>

//                 {/* Mock Image Placeholder Area */}
//                 <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${project.color} opacity-20 border border-white/10 flex items-center justify-center`}>
//                     <span className="text-white/50 font-mono">Project Demo / Screenshot Placeholder</span>
//                 </div>
//             </div>

//             {/* Right Column: Sidebar */}
//             <div className="space-y-8">

//                 {/* Tech Stack */}
//                 <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5">
//                     <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Technologies</h4>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-sm text-neutral-200 bg-neutral-800 rounded-md border border-neutral-700">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Links */}
//                 <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5 flex flex-col gap-3">
//                     <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Links</h4>
//                     <button className="flex items-center justify-center gap-2 w-full py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors">
//                         <Github size={18} /> View Source
//                     </button>
//                     <button className="flex items-center justify-center gap-2 w-full py-2 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700">
//                         <ExternalLink size={18} /> Live Demo
//                     </button>
//                 </div>

//             </div>
//         </div>

//       </div>
//     </main>
//   );
// }


// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2, Layers } from 'lucide-react';
// import { projects } from '../../data';

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30">

//       {/* --- Navbar (Matches Home Page Width) --- */}
//       <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

//         {/* --- Header Section --- */}
//         <div className="mb-12 border-b border-white/5 pb-12">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-6 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-cyan-400 w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-neutral-400 leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Desktop Actions (Top Right) */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
//                         <Github size={18} /> View Code
//                     </a>
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors border border-white/10">
//                         <ExternalLink size={18} /> Live Demo
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* --- Main Grid (Matches Home Page Grid Style) --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* Left Column: Visuals & Description (Spans 8 cols) */}
//             <div className="lg:col-span-8 space-y-8">

//                 {/* Visual Placeholder */}
//                 <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/50 group`}>
//                      {/* Gradient Background */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />

//                     <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500">
//                         <Layers size={48} className="mb-4 opacity-50" />
//                         <span className="text-sm font-mono uppercase tracking-widest opacity-70">Interactive Preview</span>
//                     </div>
//                 </div>

//                 {/* Deep Dive Text */}
//                 <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
//                     <h3 className="text-2xl font-bold text-white mb-4">Technical Details</h3>
//                     <p className="leading-8">{project.fullDesc}</p>
//                 </div>
//             </div>

//             {/* Right Column: Meta Info (Spans 4 cols) */}
//             <div className="lg:col-span-4 space-y-6">

//                 {/* Tech Stack Card */}
//                 <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors">
//                     <div className="flex items-center gap-2 mb-4 text-white">
//                         <Code2 size={20} className="text-cyan-400"/>
//                         <h3 className="font-bold">Technologies</h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-sm text-neutral-300 bg-neutral-800/50 rounded-md border border-white/5">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Mobile Actions (Visible only on small screens) */}
//                 <div className="md:hidden flex flex-col gap-3">
//                     <button className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-semibold rounded-lg">
//                         <Github size={18} /> View Code
//                     </button>
//                     <button className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 text-white font-medium rounded-lg border border-white/10">
//                         <ExternalLink size={18} /> Live Demo
//                     </button>
//                 </div>
//             </div>

//         </div>

//       </div>
//     </main>
//   );
// }


// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2, Layers } from 'lucide-react';
// import { projects } from '../../data';

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   // Extract the main color from the tailwind string (e.g., "from-blue-500" -> "blue-500")
//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30 overflow-hidden">

//       {/* --- Navbar --- */}
//       <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

//         {/* --- Header Section --- */}
//         <div className="mb-12 border-b border-white/5 pb-12">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-6 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-cyan-400 w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-neutral-400 leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Desktop Actions */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
//                         <Github size={18} /> View Code
//                     </a>
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors border border-white/10">
//                         <ExternalLink size={18} /> Live Demo
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* --- Main Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* Left Column */}
//             <div className="lg:col-span-8 space-y-8">

//                 {/* --- NEW: THEMATIC ART HEADER --- */}
//                 <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 group`}>
//                      {/* The glowing gradient background */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

//                     {/* The SVG Circuit Pattern Art */}
//                     <CircuitPattern color={mainColor} />

//                     {/* Overlay Icon */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                         <div className={`p-4 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 shadow-[0_0_30px_-5px] shadow-${mainColor}/50`}>
//                              {project.icon && <project.icon size={32} />}
//                         </div>
//                     </div>
//                 </div>
//                 {/* -------------------------------- */}

//                 <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
//                     <h3 className="text-2xl font-bold text-white mb-4">Technical Details</h3>
//                     <p className="leading-8">{project.fullDesc}</p>
//                 </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-4 space-y-6">
//                 <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors">
//                     <div className="flex items-center gap-2 mb-4 text-white">
//                         <Code2 size={20} className="text-cyan-400"/>
//                         <h3 className="font-bold">Technologies</h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-sm text-neutral-300 bg-neutral-800/50 rounded-md border border-white/5">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // --- NEW COMPONENT: Thematic Circuit Pattern Art ---
// // This generates a technical-looking background pattern
// function CircuitPattern({ color }: { color: string }) {
//     // We map the tailwind color name to an actual hex code for the SVG stroke
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6',
//         'indigo-500': '#6366f1',
//         'emerald-500': '#10b981',
//         'orange-500': '#f97316',
//         'rose-500': '#f43f5e',
//         'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';

//   return (
//     <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//           <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//           <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//           <circle cx="25" cy="25" r="2" fill={strokeColor} />
//           <circle cx="75" cy="75" r="2" fill={strokeColor} />
//           <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//         </pattern>
//         <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//       </svg>
//     </div>
//   );
// }







// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2, Layers } from 'lucide-react';
// import { projects } from '../../data';

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   // Extract the main color from the tailwind string (e.g., "from-blue-500" -> "blue-500")
//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30 overflow-hidden">

//       {/* --- Navbar --- */}
//       <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

//         {/* --- Header Section --- */}
//         <div className="mb-12 border-b border-white/5 pb-12">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-6 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-cyan-400 w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-neutral-400 leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Desktop Actions */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
//                         <Github size={18} /> View Code
//                     </a>
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors border border-white/10">
//                         <ExternalLink size={18} /> Live Demo
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* --- Main Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* Left Column */}
//             <div className="lg:col-span-8 space-y-8">

//                 {/* --- HEADER VISUAL (Video or Art) --- */}
//                 <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 group`}>

//                      {/* 1. CHECK: If a video link exists in data.ts, show the video */}
//                      {/* @ts-ignore: Assuming project.video exists in your data type */}
//                      {project.video ? (
//                         <iframe 
//                             src={project.video} 
//                             className="w-full h-full object-cover z-20 relative" 
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         ></iframe>
//                      ) : (
//                         /* 2. ELSE: Show the standard Circuit Art */
//                         <>
//                             {/* Gradient Background */}
//                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

//                             {/* The Circuit Pattern Helper */}
//                             <CircuitPattern color={mainColor} />

//                             {/* Icon Overlay */}
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                                 <div className={`p-4 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 shadow-[0_0_30px_-5px] shadow-${mainColor}/50`}>
//                                     {project.icon && <project.icon size={32} />}
//                                 </div>
//                             </div>
//                         </>
//                      )}
//                 </div>
//                 {/* -------------------------------- */}

//                 <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
//                     <h3 className="text-2xl font-bold text-white mb-4">Technical Details</h3>
//                     <p className="leading-8">{project.fullDesc}</p>
//                 </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-4 space-y-6">
//                 <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors">
//                     <div className="flex items-center gap-2 mb-4 text-white">
//                         <Code2 size={20} className="text-cyan-400"/>
//                         <h3 className="font-bold">Technologies</h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-sm text-neutral-300 bg-neutral-800/50 rounded-md border border-white/5">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // --- COMPONENT: Thematic Circuit Pattern Art ---
// function CircuitPattern({ color }: { color: string }) {
//     // We map the tailwind color name to an actual hex code for the SVG stroke
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6',
//         'indigo-500': '#6366f1',
//         'emerald-500': '#10b981',
//         'orange-500': '#f97316',
//         'rose-500': '#f43f5e',
//         'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';

//   return (
//     <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//           <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//           <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//           <circle cx="25" cy="25" r="2" fill={strokeColor} />
//           <circle cx="75" cy="75" r="2" fill={strokeColor} />
//           <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//         </pattern>
//         <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//       </svg>
//     </div>
//   );
// }






















// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2, Layers } from 'lucide-react';
// import ReactMarkdown from 'react-markdown'; // <--- New Import
// import { projects } from '../../data';

// // --- NEW COMPONENT: Thematic Circuit Pattern Art ---
// function CircuitPattern({ color }: { color: string }) {
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6', 'indigo-500': '#6366f1', 'emerald-500': '#10b981',
//         'orange-500': '#f97316', 'rose-500': '#f43f5e', 'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';
//     return (
//         <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                     <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//                     <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//                     <circle cx="25" cy="25" r="2" fill={strokeColor} />
//                     <circle cx="75" cy="75" r="2" fill={strokeColor} />
//                     <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//                 </pattern>
//                 <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//             </svg>
//         </div>
//     );
// }

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   // --- LOGIC: Read Markdown Content ---
//   let markdownContent = '';

//   // @ts-ignore: Check if mdFile exists in your data type
//   if (project.mdFile) {
//     try {
//         // Construct path to the file in the 'content' folder
//         // @ts-ignore
//         const filePath = path.join(process.cwd(), 'content', project.mdFile);
//         markdownContent = fs.readFileSync(filePath, 'utf8');
//     } catch (error) {
//         console.error("Error reading markdown file:", error);
//         // Fallback to the short string if file fails
//         markdownContent = project.fullDesc; 
//     }
//   } else {
//       markdownContent = project.fullDesc;
//   }
//   // ------------------------------------

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30 overflow-hidden">

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

//         {/* Header Section */}
//         <div className="mb-12 border-b border-white/5 pb-12">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-6 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/5 text-cyan-400 w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-neutral-400 leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
//                         <Github size={18} /> View Code
//                     </a>
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors border border-white/10">
//                         <ExternalLink size={18} /> Live Demo
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* Left Column */}
//             <div className="lg:col-span-8 space-y-8">

//                 {/* Visual Header (Video or Art) */}
//                 <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 group`}>
//                      {/* @ts-ignore */}
//                      {project.video ? (
//                         <iframe 
//                             // @ts-ignore
//                             src={project.video} 
//                             className="w-full h-full object-cover z-20 relative" 
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         ></iframe>
//                      ) : (
//                         <>
//                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
//                             <CircuitPattern color={mainColor} />
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                                 <div className={`p-4 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 shadow-[0_0_30px_-5px] shadow-${mainColor}/50`}>
//                                     {project.icon && <project.icon size={32} />}
//                                 </div>
//                             </div>
//                         </>
//                      )}
//                 </div>

//                 {/* --- MARKDOWN CONTENT RENDERER --- */}
//                 {/* Uses 'prose' class from Tailwind Typography to automatically style the Markdown */}
//                 <article className="prose prose-invert prose-lg max-w-none text-neutral-300 prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
//                     <ReactMarkdown>
//                         {markdownContent}
//                     </ReactMarkdown>
//                 </article>
//                 {/* -------------------------------- */}

//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-4 space-y-6">
//                 <div className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors">
//                     <div className="flex items-center gap-2 mb-4 text-white">
//                         <Code2 size={20} className="text-cyan-400"/>
//                         <h3 className="font-bold">Technologies</h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-sm text-neutral-300 bg-neutral-800/50 rounded-md border border-white/5">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }




// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2 } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { projects } from '../../data';
// import remarkMermaid from 'remark-mermaidjs';
// import Mermaid from '../../components/Mermaid'; // Adjust path if needed
// // --- Circuit Pattern Component ---
// function CircuitPattern({ color }: { color: string }) {
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6', 'indigo-500': '#6366f1', 'emerald-500': '#10b981',
//         'orange-500': '#f97316', 'rose-500': '#f43f5e', 'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';
//     return (
//         <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                     <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//                     <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//                     <circle cx="25" cy="25" r="2" fill={strokeColor} />
//                     <circle cx="75" cy="75" r="2" fill={strokeColor} />
//                     <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//                 </pattern>
//                 <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//             </svg>
//         </div>
//     );
// }

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   // --- Logic: Read Markdown Content ---
//   let markdownContent = '';
//   // @ts-ignore
//   if (project.mdFile) {
//     try {
//         // @ts-ignore
//         const filePath = path.join(process.cwd(), 'content', project.mdFile);
//         markdownContent = fs.readFileSync(filePath, 'utf8');
//     } catch (error) {
//         console.error("Error reading markdown file:", error);
//         markdownContent = project.fullDesc; 
//     }
//   } else {
//       markdownContent = project.fullDesc;
//   }

//   // --- GITHUB STYLE COMPONENTS MAPPING ---
//   // This maps markdown elements to exact GitHub Dark Mode styles
//   const MarkdownComponents = {
//       h1: ({node, ...props}: any) => <h1 className="text-[2em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-8" {...props} />,
//       h2: ({node, ...props}: any) => <h2 className="text-[1.5em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-6" {...props} />,
//       h3: ({node, ...props}: any) => <h3 className="text-[1.25em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
//       h4: ({node, ...props}: any) => <h4 className="text-[1em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
//       p: ({node, ...props}: any) => <p className="text-[16px] leading-[1.5] text-[#c9d1d9] mb-4" {...props} />,
//       a: ({node, ...props}: any) => <a className="text-[#58a6ff] no-underline hover:underline" {...props} />,
//       ul: ({node, ...props}: any) => <ul className="list-disc pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       ol: ({node, ...props}: any) => <ol className="list-decimal pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       li: ({node, ...props}: any) => <li className="mb-1 leading-[1.5]" {...props} />,
//       blockquote: ({node, ...props}: any) => <blockquote className="border-l-[0.25em] border-[#30363d] pl-4 text-[#8b949e] mb-4" {...props} />,
//       // Code Blocks (The Box)
//       pre: ({node, ...props}: any) => <pre className="bg-[#161b22] rounded-md p-4 mb-4 overflow-auto border border-[#30363d] text-[85%] leading-[1.45]" {...props} />,
//       // Inline Code (The backticks)
//       code: ({node, inline, className, children, ...props}: any) => {
//           if (inline) {
//             return <code className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-md px-[0.4em] py-[0.2em] text-[85%] font-mono" {...props}>{children}</code>
//           }
//           return <code className="font-mono text-[#e6edf3]" {...props}>{children}</code>
//       },
//       // Tables (Exact Grid)
//       table: ({node, ...props}: any) => <div className="overflow-auto mb-4"><table className="border-collapse w-full text-left" {...props} /></div>,
//       th: ({node, ...props}: any) => <th className="border border-[#30363d] p-[6px_13px] font-semibold text-[#e6edf3] bg-[#161b22] text-sm" {...props} />,
//       td: ({node, ...props}: any) => <td className="border border-[#30363d] p-[6px_13px] text-[#c9d1d9] text-sm bg-[#0d1117] odd:bg-[#0d1117] even:bg-[#161b22]" {...props} />,
//       tr: ({node, ...props}: any) => <tr className="even:bg-[#161b22] odd:bg-[#0d1117]" {...props} />,
//       img: ({node, ...props}: any) => <img className="max-w-full h-auto bg-transparent border-none" {...props} />,
//       hr: ({node, ...props}: any) => <hr className="h-[0.25em] bg-[#30363d] border-0 my-6" {...props} />,
//   };

//   return (
//     <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] selection:bg-[#1f6feb]/40 overflow-hidden font-sans">

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 bg-[#010409]/90 backdrop-blur-md border-b border-[#30363d]">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-[#8b949e] hover:text-[#58a6ff] transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

//         {/* Header Section */}
//         <div className="mb-10 border-b border-[#30363d] pb-8">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-4 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[rgba(240,246,252,0.1)] bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-3xl md:text-5xl font-semibold text-[#e6edf3] tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-[#8b949e] leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#21262d] text-[#c9d1d9] font-medium text-sm rounded-md hover:bg-[#30363d] hover:text-[#e6edf3] transition-all border border-[rgba(240,246,252,0.1)] shadow-sm">
//                         <Github size={16} /> View on GitHub
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

//             {/* Left Column: Content */}
//             <div className="lg:col-span-9 space-y-6">

//                 {/* Visual Header (Video or Art) */}
//                 <div className="relative w-full aspect-video rounded-md overflow-hidden border border-[#30363d] bg-[#0d1117] group">
//                      {/* @ts-ignore */}
//                      {project.video ? (
//                         <iframe 
//                             // @ts-ignore
//                             src={project.video} 
//                             className="w-full h-full object-cover z-20 relative" 
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         ></iframe>
//                      ) : (
//                         <>
//                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
//                             <CircuitPattern color={mainColor} />
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                                 <div className={`p-4 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-[#30363d] shadow-2xl`}>
//                                     {project.icon && <project.icon size={32} />}
//                                 </div>
//                             </div>
//                         </>
//                      )}
//                 </div>

//                 {/* --- README CONTAINER (The GitHub Box) --- */}
//                 <div className="rounded-md border border-[#30363d] bg-[#0d1117]">
//                     <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 rounded-t-md flex items-center gap-2">
//                         <Code2 size={16} className="text-[#8b949e]"/>
//                         <span className="text-xs font-mono font-semibold text-[#e6edf3]">README.md</span>
//                     </div>

//                     <article className="p-8 md:p-10 font-sans">
//                         <ReactMarkdown 
//                             remarkPlugins={[ remarkGfm]}
//                             // @ts-ignore
//                             components={MarkdownComponents}
//                         >
//                             {markdownContent}
//                         </ReactMarkdown>
//                     </article>
//                 </div>
//                 {/* ------------------------------------- */}

//             </div>

//             {/* Right Column: Sidebar */}
//             <div className="lg:col-span-3 space-y-6">
//                 <div className="p-4 rounded-md bg-[#0d1117] border border-[#30363d]">
//                     <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">About</h3>
//                     <p className="text-sm text-[#8b949e] mb-4 leading-relaxed">
//                         {project.shortDesc}
//                     </p>

//                     <div className="border-t border-[#30363d] my-3"></div>

//                     <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">Languages</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-xs font-medium text-[#c9d1d9] bg-[#21262d] rounded-full border border-[rgba(240,246,252,0.1)]">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }






// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2 } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { projects } from '../../data';
// import Mermaid from '../../components/Mermaid'; // Import your custom component

// // --- Circuit Pattern Component ---
// function CircuitPattern({ color }: { color: string }) {
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6', 'indigo-500': '#6366f1', 'emerald-500': '#10b981',
//         'orange-500': '#f97316', 'rose-500': '#f43f5e', 'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';
//     return (
//         <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                     <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//                     <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//                     <circle cx="25" cy="25" r="2" fill={strokeColor} />
//                     <circle cx="75" cy="75" r="2" fill={strokeColor} />
//                     <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//                 </pattern>
//                 <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//             </svg>
//         </div>
//     );
// }

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   // --- Logic: Read Markdown Content ---
//   let markdownContent = '';
//   // @ts-ignore
//   if (project.mdFile) {
//     try {
//         // @ts-ignore
//         const filePath = path.join(process.cwd(), 'content', project.mdFile);
//         markdownContent = fs.readFileSync(filePath, 'utf8');
//     } catch (error) {
//         console.error("Error reading markdown file:", error);
//         markdownContent = project.fullDesc; 
//     }
//   } else {
//       markdownContent = project.fullDesc;
//   }

//   // --- GITHUB STYLE COMPONENTS MAPPING ---
//   // This maps markdown elements to exact GitHub Dark Mode styles
//   const MarkdownComponents = {
//       h1: ({node, ...props}: any) => <h1 className="text-[2em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-8" {...props} />,
//       h2: ({node, ...props}: any) => <h2 className="text-[1.5em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-6" {...props} />,
//       h3: ({node, ...props}: any) => <h3 className="text-[1.25em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
//       h4: ({node, ...props}: any) => <h4 className="text-[1em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
//       p: ({node, ...props}: any) => <p className="text-[16px] leading-[1.5] text-[#c9d1d9] mb-4" {...props} />,
//       a: ({node, ...props}: any) => <a className="text-[#58a6ff] no-underline hover:underline" {...props} />,
//       ul: ({node, ...props}: any) => <ul className="list-disc pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       ol: ({node, ...props}: any) => <ol className="list-decimal pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       li: ({node, ...props}: any) => <li className="mb-1 leading-[1.5]" {...props} />,
//       blockquote: ({node, ...props}: any) => <blockquote className="border-l-[0.25em] border-[#30363d] pl-4 text-[#8b949e] mb-4" {...props} />,

//       // Code Blocks Logic: Checks for Mermaid
//       code: ({node, inline, className, children, ...props}: any) => {
//           // 1. Check if the code block language is 'mermaid'
//           const match = /language-(\w+)/.exec(className || '');
//           const isMermaid = match && match[1] === 'mermaid';

//           // 2. If it's a Mermaid block, render the Mermaid component
//           if (!inline && isMermaid) {
//              return <Mermaid chart={String(children).replace(/\n$/, '')} />;
//           }

//           // 3. Otherwise, render standard inline code
//           if (inline) {
//             return <code className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-md px-[0.4em] py-[0.2em] text-[85%] font-mono" {...props}>{children}</code>
//           }

//           // 4. Or render standard block code (GitHub Box)
//           return (
//             <pre className="bg-[#161b22] rounded-md p-4 mb-4 overflow-auto border border-[#30363d] text-[85%] leading-[1.45]">
//                 <code className={`font-mono text-[#e6edf3] ${className}`} {...props}>
//                     {children}
//                 </code>
//             </pre>
//           );
//       },

//       // Tables (Exact Grid)
//       table: ({node, ...props}: any) => <div className="overflow-auto mb-4"><table className="border-collapse w-full text-left" {...props} /></div>,
//       th: ({node, ...props}: any) => <th className="border border-[#30363d] p-[6px_13px] font-semibold text-[#e6edf3] bg-[#161b22] text-sm" {...props} />,
//       td: ({node, ...props}: any) => <td className="border border-[#30363d] p-[6px_13px] text-[#c9d1d9] text-sm bg-[#0d1117] odd:bg-[#0d1117] even:bg-[#161b22]" {...props} />,
//       tr: ({node, ...props}: any) => <tr className="even:bg-[#161b22] odd:bg-[#0d1117]" {...props} />,
//       img: ({node, ...props}: any) => <img className="max-w-full h-auto bg-transparent border-none" {...props} />,
//       hr: ({node, ...props}: any) => <hr className="h-[0.25em] bg-[#30363d] border-0 my-6" {...props} />,
//   };

//   return (
//     <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] selection:bg-[#1f6feb]/40 overflow-hidden font-sans">

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 bg-[#010409]/90 backdrop-blur-md border-b border-[#30363d]">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-[#8b949e] hover:text-[#58a6ff] transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto relative z-10">

//         {/* Header Section */}
//         <div className="mb-10 border-b border-[#30363d] pb-8">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-4 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[rgba(240,246,252,0.1)] bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-3xl md:text-5xl font-semibold text-[#e6edf3] tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-[#8b949e] leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#21262d] text-[#c9d1d9] font-medium text-sm rounded-md hover:bg-[#30363d] hover:text-[#e6edf3] transition-all border border-[rgba(240,246,252,0.1)] shadow-sm">
//                         <Github size={16} /> View on GitHub
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

//             {/* Left Column: Content */}
//             <div className="lg:col-span-9 space-y-6">

//                 {/* Visual Header (Video or Art) */}
//                 <div className="relative w-full aspect-video rounded-md overflow-hidden border border-[#30363d] bg-[#0d1117] group">
//                      {/* @ts-ignore */}
//                      {project.video ? (
//                         <iframe 
//                             // @ts-ignore
//                             src={project.video} 
//                             className="w-full h-full object-cover z-20 relative" 
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         ></iframe>
//                      ) : (
//                         <>
//                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
//                             <CircuitPattern color={mainColor} />
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                                 <div className={`p-4 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-[#30363d] shadow-2xl`}>
//                                     {project.icon && <project.icon size={32} />}
//                                 </div>
//                             </div>
//                         </>
//                      )}
//                 </div>

//                 {/* --- README CONTAINER (The GitHub Box) --- */}
//                 <div className="rounded-md border border-[#30363d] bg-[#0d1117]">
//                     <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 rounded-t-md flex items-center gap-2">
//                         <Code2 size={16} className="text-[#8b949e]"/>
//                         <span className="text-xs font-mono font-semibold text-[#e6edf3]">README.md</span>
//                     </div>

//                     <article className="p-8 md:p-10 font-sans">
//                         <ReactMarkdown 
//                             remarkPlugins={[remarkGfm]}
//                             // @ts-ignore
//                             components={MarkdownComponents}
//                         >
//                             {markdownContent}
//                         </ReactMarkdown>
//                     </article>
//                 </div>
//                 {/* ------------------------------------- */}

//             </div>

//             {/* Right Column: Sidebar */}
//             <div className="lg:col-span-3 space-y-6">
//                 <div className="p-4 rounded-md bg-[#0d1117] border border-[#30363d]">
//                     <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">About</h3>
//                     <p className="text-sm text-[#8b949e] mb-4 leading-relaxed">
//                         {project.shortDesc}
//                     </p>

//                     <div className="border-t border-[#30363d] my-3"></div>

//                     <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">Languages</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-xs font-medium text-[#c9d1d9] bg-[#21262d] rounded-full border border-[rgba(240,246,252,0.1)]">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { ArrowLeft, Github, ExternalLink, Code2, List, AlignLeft } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import { projects } from '../../data';
// import Mermaid from '../../components/Mermaid'; 

// // --- 1. Helper: Slugify (Converts "My Header" to "my-header" for links) ---
// const slugify = (text: string) => {
//     return text
//         .toString()
//         .toLowerCase()
//         .trim()
//         .replace(/\s+/g, '-')     // Replace spaces with -
//         .replace(/[^\w\-]+/g, '') // Remove all non-word chars
//         .replace(/\-\-+/g, '-');  // Replace multiple - with single -
// };



// // --- 2. Helper: Extract Table of Contents (Smart Version) ---
// const getToc = (markdown: string) => {
//     const lines = markdown.split(/\r?\n/);
//     const toc: { level: number; text: string; slug: string }[] = [];

//     let inCodeBlock = false; // New flag to track if we are inside code

//     lines.forEach((line) => {
//         const trimmedLine = line.trim();

//         // 1. Detect if we are entering or exiting a code block (```)
//         if (trimmedLine.startsWith('```')) {
//             inCodeBlock = !inCodeBlock;
//             return; // Skip the line that contains the backticks
//         }

//         // 2. Only look for headers if we are NOT inside a code block
//         if (!inCodeBlock) {
//             // Regex: Starts with 1-3 hashes, followed by a space
//             const match = line.match(/^\s*(#{1,3})\s+(.*)$/);

//             if (match) {
//                 const text = match[2].trim();
//                 if (text) {
//                     toc.push({
//                         level: match[1].length,
//                         text: text,
//                         slug: slugify(text)
//                     });
//                 }
//             }
//         }
//     });
//     return toc;
// };

// // --- Circuit Pattern Component ---
// function CircuitPattern({ color }: { color: string }) {
//     const colorMap: Record<string, string> = {
//         'blue-500': '#3b82f6', 'indigo-500': '#6366f1', 'emerald-500': '#10b981',
//         'orange-500': '#f97316', 'rose-500': '#f43f5e', 'slate-500': '#64748b',
//     };
//     const strokeColor = colorMap[color] || '#ffffff';
//     return (
//         <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
//             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                     <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"/>
//                     <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
//                     <circle cx="25" cy="25" r="2" fill={strokeColor} />
//                     <circle cx="75" cy="75" r="2" fill={strokeColor} />
//                     <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5"/>
//                 </pattern>
//                 <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
//             </svg>
//         </div>
//     );
// }

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.id === slug);

//   if (!project) {
//     return notFound();
//   }

//   const mainColor = project.color.split(' ')[0].replace('from-', '');

//   // --- Logic: Read Markdown Content ---
//   let markdownContent = '';
//   // @ts-ignore
//   if (project.mdFile) {
//     try {
//         // @ts-ignore
//         const filePath = path.join(process.cwd(), 'content', project.mdFile);
//         markdownContent = fs.readFileSync(filePath, 'utf8');
//     } catch (error) {
//         console.error("Error reading markdown file:", error);
//         markdownContent = project.fullDesc; 
//     }
//   } else {
//       markdownContent = project.fullDesc;
//   }

//   // --- Generate Table of Contents Data ---
//   const toc = getToc(markdownContent);

//   // --- GITHUB STYLE COMPONENTS MAPPING ---
//   // Now updated to auto-generate IDs for scroll linking
//   const MarkdownComponents = {
//       // Headers now get an ID so the Index links work
//       h1: ({node, children, ...props}: any) => {
//           const id = slugify(String(children));
//           return <h1 id={id} className="text-[2em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-8 scroll-mt-32 group" {...props}>
//               {children}
//               <a href={`#${id}`} className="ml-2 text-[#30363d] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#58a6ff]">#</a>
//           </h1>
//       },
//       h2: ({node, children, ...props}: any) => {
//           const id = slugify(String(children));
//           return <h2 id={id} className="text-[1.5em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-6 scroll-mt-32 group" {...props}>
//               {children}
//               <a href={`#${id}`} className="ml-2 text-[#30363d] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#58a6ff]">#</a>
//           </h2>
//       },
//       h3: ({node, children, ...props}: any) => {
//           const id = slugify(String(children));
//           return <h3 id={id} className="text-[1.25em] font-semibold text-[#e6edf3] mb-4 mt-6 scroll-mt-32" {...props}>{children}</h3>
//       },

//       // Standard elements
//       h4: ({node, ...props}: any) => <h4 className="text-[1em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
//       p: ({node, ...props}: any) => <p className="text-[16px] leading-[1.6] text-[#c9d1d9] mb-4" {...props} />,
//       a: ({node, ...props}: any) => <a className="text-[#58a6ff] no-underline hover:underline" {...props} />,
//       ul: ({node, ...props}: any) => <ul className="list-disc pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       ol: ({node, ...props}: any) => <ol className="list-decimal pl-8 mb-4 text-[#c9d1d9]" {...props} />,
//       li: ({node, ...props}: any) => <li className="mb-1 leading-[1.5]" {...props} />,
//       blockquote: ({node, ...props}: any) => <blockquote className="border-l-[0.25em] border-[#30363d] pl-4 text-[#8b949e] mb-4 bg-[#161b22]/50 py-1" {...props} />,

//       // Code Blocks Logic
//       code: ({node, inline, className, children, ...props}: any) => {
//           const match = /language-(\w+)/.exec(className || '');
//           const isMermaid = match && match[1] === 'mermaid';

//           if (!inline && isMermaid) {
//              return <Mermaid chart={String(children).replace(/\n$/, '')} />;
//           }

//           if (inline) {
//             return <code className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-md px-[0.4em] py-[0.2em] text-[85%] font-mono" {...props}>{children}</code>
//           }

//           return (
//             <pre className="bg-[#161b22] rounded-md p-4 mb-4 overflow-auto border border-[#30363d] text-[85%] leading-[1.45]">
//                 <code className={`font-mono text-[#e6edf3] ${className}`} {...props}>
//                     {children}
//                 </code>
//             </pre>
//           );
//       },

//       table: ({node, ...props}: any) => <div className="overflow-auto mb-4"><table className="border-collapse w-full text-left" {...props} /></div>,
//       th: ({node, ...props}: any) => <th className="border border-[#30363d] p-[6px_13px] font-semibold text-[#e6edf3] bg-[#161b22] text-sm" {...props} />,
//       td: ({node, ...props}: any) => <td className="border border-[#30363d] p-[6px_13px] text-[#c9d1d9] text-sm bg-[#0d1117] odd:bg-[#0d1117] even:bg-[#161b22]" {...props} />,
//       tr: ({node, ...props}: any) => <tr className="even:bg-[#161b22] odd:bg-[#0d1117]" {...props} />,
//       img: ({node, ...props}: any) => <img className="max-w-full h-auto bg-transparent border-none" {...props} />,
//       hr: ({node, ...props}: any) => <hr className="h-[0.25em] bg-[#30363d] border-0 my-6" {...props} />,
//   };

//   return (
//     <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] selection:bg-[#1f6feb]/40 font-sans">

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 bg-[#010409]/90 backdrop-blur-md border-b border-[#30363d]">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <Link 
//             href="/" 
//             className="inline-flex items-center text-sm font-medium text-[#8b949e] hover:text-[#58a6ff] transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Projects
//           </Link>
//         </div>
//       </nav>

//       <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">

//         {/* Header Section */}
//         <div className="mb-10 border-b border-[#30363d] pb-8">
//             <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
//                 <div className="space-y-4 max-w-3xl">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[rgba(240,246,252,0.1)] bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] w-fit">
//                         {project.icon && <project.icon size={14} />}
//                         {project.category}
//                     </div>

//                     <h1 className="text-3xl md:text-5xl font-semibold text-[#e6edf3] tracking-tight">
//                         {project.title}
//                     </h1>

//                     <p className="text-xl text-[#8b949e] leading-relaxed">
//                         {project.shortDesc}
//                     </p>
//                 </div>

//                 <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
//                     <a href="#" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#21262d] text-[#c9d1d9] font-medium text-sm rounded-md hover:bg-[#30363d] hover:text-[#e6edf3] transition-all border border-[rgba(240,246,252,0.1)] shadow-sm">
//                         <Github size={16} /> View on GitHub
//                     </a>
//                 </div>
//             </div>
//         </div>

//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

//             {/* Left Column: Markdown Content (Span 9) */}
//             <div className="lg:col-span-9 space-y-6">

//                 {/* Visual Header */}
//                 <div className="relative w-full aspect-video rounded-md overflow-hidden border border-[#30363d] bg-[#0d1117] group">
//                      {/* @ts-ignore */}
//                      {project.video ? (
//                         <iframe 
//                             // @ts-ignore
//                             src={project.video} 
//                             className="w-full h-full object-cover z-20 relative" 
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         ></iframe>
//                      ) : (
//                         <>
//                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
//                             <CircuitPattern color={mainColor} />
//                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
//                                 <div className={`p-4 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-[#30363d] shadow-2xl`}>
//                                     {project.icon && <project.icon size={32} />}
//                                 </div>
//                             </div>
//                         </>
//                      )}
//                 </div>

//                 {/* --- README CONTAINER --- */}
//                 <div className="rounded-md border border-[#30363d] bg-[#0d1117]">
//                     <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 rounded-t-md flex items-center gap-2">
//                         <Code2 size={16} className="text-[#8b949e]"/>
//                         <span className="text-xs font-mono font-semibold text-[#e6edf3]">README.md</span>
//                     </div>

//                     <article className="p-8 md:p-10 font-sans ">
//                         <ReactMarkdown 
//                             remarkPlugins={[remarkGfm]}
//                             // @ts-ignore
//                             components={MarkdownComponents}
//                         >
//                             {markdownContent}
//                         </ReactMarkdown>
//                     </article>
//                 </div>
//             </div>

//             {/* Right Column: Sticky Sidebar (Span 3) */}
//             <div className="lg:col-span-3 space-y-6 sticky top-24">

//                 {/* --- TABLE OF CONTENTS (WIKIPEDIA STYLE) --- */}
//                 <div className="p-4 rounded-md bg-[#161b22]/50 border border-[#30363d] backdrop-blur-sm">
//                     <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#30363d]">
//                         <List size={16} className="text-[#8b949e]"/>
//                         <h3 className="font-semibold text-sm text-[#e6edf3]">Contents</h3>
//                     </div>

//                     <nav className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                         <ul className="space-y-1">
//                             {toc.map((item, index) => (
//                                 <li key={index} style={{ paddingLeft: `${(item.level - 1) * 12}px` }}>
//                                     <a 
//                                         href={`#${item.slug}`}
//                                         className={`block text-xs py-1 leading-snug hover:text-[#58a6ff] transition-colors ${item.level === 1 ? 'font-semibold text-[#c9d1d9]' : 'text-[#8b949e]'}`}
//                                     >
//                                         {item.text}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//                 {/* ------------------------------------------- */}

//                 <div className="p-4 rounded-md bg-[#0d1117] border border-[#30363d]">
//                     <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">Languages</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {project.tech.map((t, i) => (
//                             <span key={i} className="px-3 py-1 text-xs font-medium text-[#c9d1d9] bg-[#21262d] rounded-full border border-[rgba(240,246,252,0.1)]">
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//       </div>

//       {/* Optional: Add custom scrollbar for the TOC if list is very long */}
//       <style>{`
//           .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//           .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//           .custom-scrollbar::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
//           html { scroll-behavior: smooth; }
//       `}</style>
//     </main>
//   );
// }




import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, Code2, List } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '../../data';
import Mermaid from '../../components/Mermaid';
import SpaceBackground from '../../components/SpaceBackground';
// import ThreeDViewer from '../../components/ThreeDViewer';


// --- 1. Helper: Slugify ---
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

// --- 2. Helper: Extract Table of Contents ---
const getToc = (markdown: string) => {
    const lines = markdown.split(/\r?\n/);
    const toc: { level: number; text: string; slug: string }[] = [];
    let inCodeBlock = false;

    lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            return;
        }
        if (!inCodeBlock) {
            const match = line.match(/^\s*(#{1,3})\s+(.*)$/);
            if (match) {
                const text = match[2].trim();
                if (text) {
                    toc.push({
                        level: match[1].length,
                        text: text,
                        slug: slugify(text)
                    });
                }
            }
        }
    });
    return toc;
};
// --- 3. Helper: Get Dynamic Sun Colors (MATCHING HOME PAGE) ---
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
    // 2. Neutron Star / Pulsar (Purple/Indigo) <--- UPDATED
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

// --- Circuit Pattern Component ---
function CircuitPattern({ color }: { color: string }) {
    const colorMap: Record<string, string> = {
        'blue-500': '#3b82f6', 'indigo-500': '#6366f1', 'emerald-500': '#10b981',
        'orange-500': '#f97316', 'rose-500': '#f43f5e', 'slate-500': '#64748b',
    };
    const strokeColor = colorMap[color] || '#ffffff';
    return (
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mask-image:radial-gradient(circle, black 60%, transparent 100%)">
            <svg className="w-full h-full" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M100 0H0V100" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4" />
                    <path d="M25 25h50v50h-50z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                    <circle cx="25" cy="25" r="2" fill={strokeColor} />
                    <circle cx="75" cy="75" r="2" fill={strokeColor} />
                    <path d="M25 75V100 M75 25V0 M0 25H25 M100 75H75" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
        </div>
    );
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return notFound();
    }

    const mainColorClass = project.color.split(' ')[0].replace('from-', '');

    // Get the specific Sun Colors for this project
    const sunColors = getSunColors(mainColorClass);

    // --- Logic: Read Markdown Content ---
    let markdownContent = '';
    // @ts-ignore
    if (project.mdFile) {
        try {
            // @ts-ignore
            const filePath = path.join(process.cwd(), 'content', project.mdFile);
            markdownContent = fs.readFileSync(filePath, 'utf8');
        } catch (error) {
            console.error("Error reading markdown file:", error);
            markdownContent = project.fullDesc;
        }
    } else {
        markdownContent = project.fullDesc;
    }

    // --- Generate Table of Contents Data ---
    const toc = getToc(markdownContent);

    // --- GITHUB STYLE COMPONENTS MAPPING ---
    const MarkdownComponents = {
        h1: ({ node, children, ...props }: any) => {
            const id = slugify(String(children));
            return <h1 id={id} className="text-[2em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-8 scroll-mt-32 group" {...props}>
                {children}
                <a href={`#${id}`} className="ml-2 text-[#30363d] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#58a6ff]">#</a>
            </h1>
        },
        h2: ({ node, children, ...props }: any) => {
            const id = slugify(String(children));
            return <h2 id={id} className="text-[1.5em] font-semibold text-[#e6edf3] border-b border-[#21262d] pb-2 mb-4 mt-6 scroll-mt-32 group" {...props}>
                {children}
                <a href={`#${id}`} className="ml-2 text-[#30363d] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#58a6ff]">#</a>
            </h2>
        },
        h3: ({ node, children, ...props }: any) => {
            const id = slugify(String(children));
            return <h3 id={id} className="text-[1.25em] font-semibold text-[#e6edf3] mb-4 mt-6 scroll-mt-32" {...props}>{children}</h3>
        },
        h4: ({ node, ...props }: any) => <h4 className="text-[1em] font-semibold text-[#e6edf3] mb-4 mt-6" {...props} />,
        p: ({ node, ...props }: any) => <p className="text-[16px] leading-[1.6] text-[#c9d1d9] mb-4" {...props} />,
        a: ({ node, ...props }: any) => <a className="text-[#58a6ff] no-underline hover:underline" {...props} />,
        ul: ({ node, ...props }: any) => <ul className="list-disc pl-8 mb-4 text-[#c9d1d9]" {...props} />,
        ol: ({ node, ...props }: any) => <ol className="list-decimal pl-8 mb-4 text-[#c9d1d9]" {...props} />,
        li: ({ node, ...props }: any) => <li className="mb-1 leading-[1.5]" {...props} />,
        blockquote: ({ node, ...props }: any) => <blockquote className="border-l-[0.25em] border-[#30363d] pl-4 text-[#8b949e] mb-4 bg-[#161b22]/50 py-1" {...props} />,

        code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const isMermaid = match && match[1] === 'mermaid';

            if (!inline && isMermaid) {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />;
            }

            if (inline) {
                return <code className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-md px-[0.4em] py-[0.2em] text-[85%] font-mono" {...props}>{children}</code>
            }

            return (
                <pre className="bg-[#161b22] rounded-md p-4 mb-4 overflow-auto border border-[#30363d] text-[85%] leading-[1.45]">
                    <code className={`font-mono text-[#e6edf3] ${className}`} {...props}>
                        {children}
                    </code>
                </pre>
            );
        },

        // Standard elements
        table: ({ node, ...props }: any) => <div className="overflow-auto mb-4"><table className="border-collapse w-full text-left" {...props} /></div>,
        th: ({ node, ...props }: any) => <th className="border border-[#30363d] p-[6px_13px] font-semibold text-[#e6edf3] bg-[#161b22] text-sm" {...props} />,
        td: ({ node, ...props }: any) => <td className="border border-[#30363d] p-[6px_13px] text-[#c9d1d9] text-sm bg-[#0d1117] odd:bg-[#0d1117] even:bg-[#161b22]" {...props} />,
        tr: ({ node, ...props }: any) => <tr className="even:bg-[#161b22] odd:bg-[#0d1117]" {...props} />,
        img: ({ node, ...props }: any) => <img className="max-w-full h-auto bg-transparent border-none" {...props} />,
        hr: ({ node, ...props }: any) => <hr className="h-[0.25em] bg-[#30363d] border-0 my-6" {...props} />,
    };

    return (
        // REMOVED 'overflow-hidden' from main so sticky works
        <main className="min-h-screen text-[#c9d1d9] selection:bg-[#1f6feb]/40 font-sans relative">

            {/* Background Wrapper: Handles overflow so the main page can scroll naturally */}
            <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <SpaceBackground />
            </div>


            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#010409]/70 backdrop-blur-md border-b border-[#30363d]">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back to Projects
                    </Link>
                </div>
            </nav>

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 animate-fade-in-up">

                {/* Header Section */}
                <div className="mb-10 border-b border-[#30363d] pb-8">
                    <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
                        <div className="space-y-4 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[rgba(240,246,252,0.1)] bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] w-fit">
                                {project.icon && <project.icon size={14} />}
                                {project.category}
                            </div>

                            {/* --- DYNAMIC GLOWING TITLE --- */}
                            <h1
                                className="text-3xl md:text-5xl font-bold tracking-tight sun-glow"
                                style={{
                                    // @ts-ignore
                                    '--core': sunColors.core,
                                    '--plasma': sunColors.plasma,
                                    '--corona': sunColors.corona,
                                    '--outer': sunColors.outer,
                                }}
                            >
                                {project.title}
                            </h1>

                            <p className="text-xl text-[#8b949e] leading-relaxed">
                                {project.shortDesc}
                            </p>
                        </div>

                        <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
                            {/* Only show button if a GitHub link exists */}
                            {/* @ts-ignore */}
                            {project.github && (
                                <a
                                    // @ts-ignore
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#21262d]/80 hover:bg-[#30363d] backdrop-blur-sm text-[#c9d1d9] font-medium text-sm rounded-md transition-all border border-[rgba(240,246,252,0.1)] shadow-sm"
                                >
                                    <Github size={16} /> View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Column: Markdown Content (Span 9) */}
                    <div className="lg:col-span-9 space-y-6">
                         {/* --- INTERACTIVE CAD VIEWER --- */}
                            {/* @ts-ignore */}
                            {project.cadViewer && (
                                <div className="rounded-md border border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md overflow-hidden mb-6 shadow-lg shadow-cyan-900/10">
                                    <div className="border-b border-[#30363d] bg-[#161b22]/90 px-4 py-3 flex items-center gap-2">
                                        <span className="text-xs font-mono font-semibold text-[#e6edf3]">Interactive 3D Model</span>
                                        <span className="text-[10px] text-[#8b949e] ml-auto">Drag to rotate • Scroll to zoom</span>
                                    </div>
                                    {/* The container for the 3D model */}
                                    <div className="w-full aspect-video relative bg-white"> 
                                        <iframe 
                                            // @ts-ignore
                                            src={`/my-portfolio${project.cadViewer}`} 
                                            className="w-full h-full border-none"
                                            title="3D CAD Model Viewer"
                                            allow="fullscreen"
                                        ></iframe>
                                    </div>
                                </div>
                            )}                                        
                        {/* Visual Header */}
                        <div className="relative w-full aspect-video rounded-md overflow-hidden border border-[#30363d] bg-[#0d1117] group shadow-2xl shadow-blue-900/20">
                            {/* @ts-ignore */}
                            {project.video ? (
                                <iframe
                                    // @ts-ignore
                                    src={project.video}
                                    className="w-full h-full object-cover z-20 relative"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                                    <CircuitPattern color={mainColorClass} />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 z-20">
                                        <div className={`p-4 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-[#30363d] shadow-2xl`}>
                                            {project.icon && <project.icon size={32} />}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                                          
                        {/* --- README CONTAINER --- */}
                        <div className="rounded-md border border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md">
                            <div className="border-b border-[#30363d] bg-[#161b22]/90 px-4 py-3 rounded-t-md flex items-center gap-2">
                                <Code2 size={16} className="text-[#8b949e]" />
                                <span className="text-xs font-mono font-semibold text-[#e6edf3]">README.md</span>
                            </div>

                            <article className="p-8 md:p-10 font-sans ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    // @ts-ignore
                                    components={MarkdownComponents}
                                >
                                    {markdownContent}
                                </ReactMarkdown>
                            </article>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar (Span 3) */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* --- STICKY WRAPPER --- */}
                        {/* This div sticks to the viewport top because main doesn't overflow hidden anymore */}
                        <div className="sticky top-24 space-y-6">

                            {/* --- TABLE OF CONTENTS --- */}
                            {toc.length > 0 && (
                                <div className="p-4 rounded-md bg-[#161b22]/60 border border-[#30363d] backdrop-blur-md shadow-lg">
                                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#30363d]">
                                        <List size={16} className="text-[#8b949e]" />
                                        <h3 className="font-semibold text-sm text-[#e6edf3]">Contents</h3>
                                    </div>

                                    <nav className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                        <ul className="space-y-1">
                                            {toc.map((item, index) => (
                                                <li key={index} style={{ paddingLeft: `${(item.level - 1) * 12}px` }}>
                                                    <a
                                                        href={`#${item.slug}`}
                                                        className={`block text-xs py-1 leading-snug hover:text-[#58a6ff] transition-colors ${item.level === 1 ? 'font-semibold text-[#c9d1d9]' : 'text-[#8b949e]'}`}
                                                    >
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            )}

                            {/* --- LANGUAGES --- */}
                            <div className="p-4 rounded-md bg-[#0d1117]/80 border border-[#30363d] backdrop-blur-md shadow-lg">
                                <h3 className="font-semibold text-sm text-[#e6edf3] mb-3">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-[#c9d1d9] bg-[#21262d]/80 rounded-full border border-[rgba(240,246,252,0.1)]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
          html { scroll-behavior: smooth; }
          
          @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }

          /* --- DYNAMIC SUN GLOW CSS --- */
          /* Using CSS Variables injected from the component */
          .sun-glow {
              color: var(--core);
              text-shadow: 
                0 0 10px var(--core),
                0 0 20px var(--plasma),
                0 0 30px var(--corona),
                0 0 40px var(--outer),
                0 0 70px var(--outer),
                0 0 80px var(--core);
              animation: sun-pulse 4s ease-in-out infinite;
          }

          @keyframes sun-pulse {
              0%, 100% {
                  text-shadow: 
                    0 0 10px var(--core),
                    0 0 20px var(--plasma),
                    0 0 30px var(--corona),
                    0 0 40px var(--outer),
                    0 0 70px var(--outer),
                    0 0 80px var(--core);
              }
              50% {
                  text-shadow: 
                    0 0 12px var(--core),
                    0 0 25px var(--plasma),
                    0 0 35px var(--corona),
                    0 0 50px var(--outer),
                    0 0 80px var(--outer),
                    0 0 100px var(--core);
              }
          }
      `}</style>
        </main>
    );
}
// ... (Your existing component code is above here)

// --- ADD THIS FUNCTION AT THE BOTTOM ---
// This tells Next.js exactly which routes to build statically
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}