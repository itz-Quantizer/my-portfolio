import { Cpu, FileText, Layers, Printer, Radio, Terminal, Atom, Disc, Bot, PenTool } from 'lucide-react';

export const interests = [
  {
    title: "Quantum Technology",
    desc: "Exploring quantum algorithms and qubit coherence. Enthusiast of the future of computing.",
    icon: Atom, 
    color: "text-purple-400" 
  },
  {
    title: "Autonomous Robotics",
    desc: "Building intelligent agents using ROS2, Nav2, and SLAM for real-world navigation.",
    icon: Bot, 
    color: "text-cyan-400" 
  },
  {
    title: "Digital Logic Design",
    desc: "Designing CPU architectures from scratch (8-bit) and simulating logic gates.",
    icon: Cpu, 
    color: "text-emerald-400" 
  },
  {
    title: "Additive Manufacturing",
    desc: "Designing custom 3D printers and optimizing firmware for precision fabrication.",
    icon: Printer, 
    color: "text-orange-400" 
  }
];

export const projects = [
  {
    id: "ros2-sitl",
    title: "ROS2 & SITL Integration",
    category: "Robotics / Simulation",
    shortDesc: "Advanced simulation environment integrating ROS2 with SITL for autonomous drone testing.",
    fullDesc: "This project bridges the gap between simulated physics and real-world flight controllers. By integrating Robot Operating System 2 (ROS2) with Software In The Loop (SITL), I created a safe testing ground for autonomous drone navigation algorithms before deploying them to expensive hardware. The system simulates GPS denial, wind shear, and sensor noise.",
    tech: ["ROS2", "Gazebo", "Python", "C++", "PX4"],
    icon: Terminal,
    color: "from-blue-500 to-cyan-400",
    video:"https://drive.google.com/file/d/1KUF3v-xE7OwdmAnu7J3nTB5J6i14Se8P/preview",
    mdFile:"ROS2-Gazebo.md"
  },
  {
    id: "ros2-slam",
    title: "ROS2 SLAM Implementation",
    category: "Robotics",
    shortDesc: "Real-time Simultaneous Localization and Mapping system capable of 2D occupancy grids.",
    fullDesc: "A complete navigation stack built on ROS2. This system processes raw Lidar data to create high-resolution 2D occupancy grid maps in real-time. It utilizes the Nav2 stack for path planning and obstacle avoidance, optimized for low-compute edge devices.",
    tech: ["ROS2", "Nav2", "Lidar Processing", "Rviz"],
    icon: Layers,
    color: "from-indigo-500 to-purple-400",

    vizType: "slam",
    // ADD THIS LINE BELOW:
    // video: "https://drive.google.com/file/d/1VEVAnQXteiStGn5m1ArnQlEyQ0u_eZON/view?usp=drive_link"
    video: "https://drive.google.com/file/d/1VEVAnQXteiStGn5m1ArnQlEyQ0u_eZON/preview"
  },
  {
    id: "8bit-computer",
    title: "8-bit Computer Simulation",
    category: "Digital System Design",
    shortDesc: "Fully functional 8-bit computer architecture designed from logic gates up.",
    fullDesc: "Inspired by the SAP-1 architecture, this project involves the complete design of an 8-bit computer in simulation. It includes a custom Instruction Set Architecture (ISA), a handcrafted ALU (Arithmetic Logic Unit), RAM, and a Control Unit. The entire system allows for writing and executing custom Assembly code.",
    tech: ["Verilog", "Logisim", "Assembly", "Digital Logic", "Digital System Design"],
    icon: Cpu,
    color: "from-emerald-500 to-green-400",
    video:"https://drive.google.com/file/d/11bvBCJyGZAoWr859zrbdSdZs5yAL4k_W/preview",
    mdFile: "8Bit-Computer-Complete-README.md"
  },
  {
    id: "custom-3d-printer",
    title: "Carbon-Fiber Reinforced 3D Printer",
    category: "Hardware Engineering",
    shortDesc: "End-to-end design and fabrication of a custom FDM 3D printer.",
    fullDesc: "A high-performance CoreXY 3D printer built from scratch. I designed the chassis using CAD software, sourced the stepper motors, wired the control board, and compiled a custom version of Marlin Firmware to handle specific acceleration and jerk settings.",
    tech: ["Marlin Firmware", "SolidWorks", "Electronics", "C++"],
    icon: Printer,
    color: "from-orange-500 to-amber-400",
    video:"https://drive.google.com/file/d/1xan9BgoOFIMpp7o4AcaFU5ZaYlnqielf/preview",
    mdFile:"Custom-3D-Printer.md",
    cadViewer: "/viewers/printer-3d.html"
  },
  {
    id: "rng-hardware",
    title: "Non-Deterministic RNG",
    category: "Noisy Systems",
    shortDesc: "True random number generator hardware exploiting thermal noise.",
    fullDesc: "Unlike pseudo-random number generators in software, this hardware module uses the avalanche breakdown noise of a reverse-biased Zener diode to generate true entropy. The analog signal is amplified and digitized to provide cryptographically secure random numbers.",
    tech: ["Python", "PCB Design", "Analog Electronics", "Quantum Mechanics","Data Analysis"],
    icon: Radio,
    color: "from-rose-500 to-red-400",
    video:"https://drive.google.com/file/d/1LWpyuGC-gdgYrrYwRZFwon4QmfhFxtQY/preview",
    github:"https://github.com/itz-Quantizer",
    mdFile:"Non-deterministic_RNG.md"
    
  },
  {
    id: "Review-paper",
    title: "Academic Review Paper",
    category: "Research",
    shortDesc: "Review on Qunatum Communcation and its applications.",
    fullDesc: "A systematic review of state-of-the-art advancements in Quantum Communication. The paper categorizes over 10 recent publications, comparing their methodologies, efficiencies, and practical applications in modern technology.",
    tech: ["Quantum Communication", "Quantum Mechanics", "LaTeX", "Academic Writing", "Data Analysis"],
    icon: FileText,
    color: "from-slate-500 to-gray-400",
    video:"https://drive.google.com/file/d/1X64jciX3UIfYyOQgdIG6SAA5JPARppEj/preview"
  }
];


// (Keep your imports and interests array same as before)
// ...

// export const projects = [
//   {
//     id: "ros2-slam",
//     title: "ROS2 SLAM Implementation",
//     category: "Robotics",
//     shortDesc: "Real-time Simultaneous Localization and Mapping system capable of 2D occupancy grids.",
//     fullDesc: "A complete navigation stack built on ROS2. This system processes raw Lidar data to create high-resolution 2D occupancy grid maps in real-time. It utilizes the Nav2 stack for path planning and obstacle avoidance, optimized for low-compute edge devices.",
//     tech: ["ROS2", "Nav2", "Lidar Processing", "Rviz"],
//     // Use colors for the glow effect
//     color: "from-blue-500 to-cyan-400",
//     // Type of visualization to use
//     vizType: "slam" 
//   },
//   {
//     id: "rng-hardware",
//     title: "Quantum RNG",
//     category: "Quantum / Embedded",
//     shortDesc: "True random number generator hardware exploiting thermal noise/avalanche breakdown.",
//     fullDesc: "Unlike pseudo-random number generators in software, this hardware module uses the avalanche breakdown noise of a reverse-biased Zener diode to generate true entropy. The analog signal is amplified and digitized to provide cryptographically secure random numbers.",
//     tech: ["C", "PCB Design", "Analog Electronics"],
//     color: "from-purple-600 to-indigo-500",
//     vizType: "quantum"
//   },
//   {
//     id: "8bit-computer",
//     title: "8-bit Computer",
//     category: "Digital System Design",
//     shortDesc: "Fully functional 8-bit computer architecture designed from logic gates up.",
//     fullDesc: "Inspired by the SAP-1 architecture, this project involves the complete design of an 8-bit computer in simulation. It includes a custom Instruction Set Architecture (ISA), a handcrafted ALU (Arithmetic Logic Unit), RAM, and a Control Unit.",
//     tech: ["Verilog", "Logisim", "Assembly", "Digital Logic"],
//     color: "from-emerald-500 to-green-400",
//     vizType: "cpu"
//   },
//   {
//     id: "custom-3d-printer",
//     title: "Custom 3D Printer",
//     category: "Hardware Engineering",
//     shortDesc: "End-to-end design and fabrication of a custom FDM 3D printer.",
//     fullDesc: "A high-performance CoreXY 3D printer built from scratch. I designed the chassis using CAD software, sourced the stepper motors, wired the control board, and compiled a custom version of Marlin Firmware.",
//     tech: ["Marlin Firmware", "SolidWorks", "Electronics"],
//     color: "from-orange-500 to-amber-400",
//     vizType: "printer"
//   },
//   {
//     id: "ros2-sitl",
//     title: "ROS2 & SITL Integration",
//     category: "Robotics / Simulation",
//     shortDesc: "Advanced simulation environment integrating ROS2 with SITL for autonomous drone testing.",
//     fullDesc: "This project bridges the gap between simulated physics and real-world flight controllers. By integrating Robot Operating System 2 (ROS2) with Software In The Loop (SITL), I created a safe testing ground for autonomous drone navigation.",
//     tech: ["ROS2", "Gazebo", "Python", "PX4"],
//     color: "from-indigo-500 to-blue-500",
//     vizType: "console"
//   },
//    {
//     id: "review-paper",
//     title: "Academic Review Paper",
//     category: "Research",
//     shortDesc: "Comprehensive review analyzing current trends in autonomous systems.",
//     fullDesc: "A systematic review of state-of-the-art algorithms in SLAM and Path Planning. The paper categorizes over 50 recent publications, comparing their computational efficiency.",
//     tech: ["LaTeX", "Academic Writing", "Data Analysis"],
//     color: "from-slate-500 to-gray-400",
//     vizType: "none" // No animation for this one
//   }
// ];