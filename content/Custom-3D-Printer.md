# Dual-Nozzle Composite Fiber 3D Printer Project

## Overview

This project outlines the design, development, and implementation of a custom Cartesian-style dual-nozzle 3D printer optimized for raw carbon fiber (CF) printing with polyamide (PA) matrix integration. The system supports real-time in-situ curing of resin-coated continuous fibers via a dedicated UV curing chamber, enabling the production of high-performance, lightweight composite structures with precise geometric accuracy for very thin objects. Key innovations include dual-nozzle deposition for simultaneous fiber and matrix extrusion, potentially doubling print speeds for complex geometries like cellular composites, and a software interface for real-time print monitoring.

Built on an MKS GEN L V1.0 motherboard with E3D V6 hotends, the printer features a compact 120x120mm build volume, dual extruders for PA and CF filaments, and enhancements for smooth motion and curing efficiency. It's tailored for engineering applications in aerospace, automotive, and load-bearing components, emphasizing toughness, durability, and surface quality through sandwich structures (e.g., CF core with PA6 outer layers reinforced with short glass fibers).

## Objectives

- **Primary**: Develop a comprehensive dual-nozzle 3D printer for raw CF printing, supporting real-time extrusion of thin objects and a software-based interface for visualization and control.
- **Immediate Curing**: Integrate UV or thermal mechanisms to cure resin-coated fibers post-extrusion, solidifying the composite and preserving accuracy.
- **Matrix Integration**: Use the second nozzle to deposit PA as a surface layer or matrix, enhancing finish, toughness, and durability (e.g., short glass fiber-reinforced PA6 for outer layers).
- **Speed Enhancement**: Leverage dual-nozzle parallelism to double printing speed vs. single-nozzle systems, ideal for complex structures like cellular composites by depositing fiber and matrix simultaneously.

These align with producing precise, high-strength composites via in-situ coating, curing, and PA reinforcement.

## Hardware Components

### Core Frame and Motion System
- **Frame**: Aluminum extrusion-based Cartesian design (DIY from 2020mm profiles for X/Y/Z axes).
- **Motion**: 
  - GT2 belts with 20-tooth pulleys for X/Y axes.
  - Lead screw (8mm diameter, 2mm pitch) for Z-axis.
  - Linear rods (8mm) and bearings for smooth travel.
  - **Enhancements**: Rollers integrated with pulleys for smoother extruder head movement, replacing initial black strap setup to boost efficiency and reduce friction (see Fig. 1 for assembly).
- **Build Volume**: 120mm x 120mm x 120mm (compact for thin prototypes).

### Dual Extrusion and Hotend System
- **Hotends**: Dual E3D V6 all-metal (0.4mm or 0.8mm nozzles, tuned for 220-260°C on PA/CF).
- **Extruders**: Bowden-style NEMA 17 steppers (1.8° step angle, microstepping for precise feed).
  - Primary (Nozzle 1): PA filament (e.g., PA6 with short glass fibers) for matrix/surface layers.
  - Secondary (Nozzle 2): Continuous raw CF filament, fed through resin impregnation and curing chamber.
- **Filament Handling**: 
  - PLA/PA feed: Spool to extruder; heated chamber melts filament, pushed through nozzle via geared grip with sharp teeth for controlled steps.
  - CF Feed: Spool to impregnation chamber for uniform UV-curable resin coating, then to curing zone.
- **Heater Cartridges**: 40W each, with NTC 100K thermistors.
- **PID Tuning**: P=22.2, I=1.08, D=114 (optimized to avoid blobs/under-extrusion).

### Resin Curing Chamber (Integrated with Secondary Extruder)
- **Purpose**: Enables in-situ UV curing of resin-impregnated CF for real-time solidification, ensuring structural integrity without post-processing.
- **Components**:
  - **Fiber Constraint Mechanism (Pulley Assembly)**: Tensioned pulleys guide and align continuous fiber entry, preventing deviation or breakage.
  - **Resin Impregnation Box (Red-Purple Reservoir)**: Enclosed mini-bath for uniform UV-curable resin coating; minimizes waste and ensures even distribution.
  - **UV Curing Zone (Rear LED Mount)**: Strategic UV LED array exposes fiber-resin mix post-coating, activating polymerization for partial/full cure based on speed/resin properties.
- **Working Mechanism**: CF enters via pulleys into resin box for coating, exits to UV zone for instant curing, then feeds to nozzle. Synchronized with extruder speed for jam-free operation.
- **Functional Benefits**:
  - Uniform resin deposition prevents weak bonding.
  - Real-time curing boosts mechanical performance.
  - Compact design fits within print head housing.
  - Enhances strength-to-weight ratio for aerospace/automotive parts.
- **Layout**: Mounted on the right side of the extruder assembly for seamless integration.

### Bed and Heating
- **Bed**: 120x120mm PEI spring steel sheet.
- **Heater**: 24V silicone pad (100W).
- **Leveling**: Manual thumbwheels; BLTouch upgrade planned.

### Electronics
- **Motherboard**: MKS GEN L V1.0 (ATmega2560-based, Marlin-compatible).
- **Drivers**: TMC2208 for quiet, precise control (X/Y/Z/E0/E1).
- **Power Supply**: 24V/15A Meanwell unit.
- **Cooling**: 5015 blower for parts; 4020 for electronics; UV LEDs for curing.
- **Sensors**: Endstops, thermistors; optional in-line cure quality sensors for future enhancements.

### Tools and Misc
- Soldering iron, multimeter, calipers.
- Filaments: 1.75mm PA/CF (Prusa/generic); UV-curable resin.
- **Figure 1**: [Placeholder for roller-pulley assembly image – insert photo of smooth motion upgrade].

## Working Mechanism

1. **PA/PLA Extrusion (Primary Nozzle)**: Filament from spool enters extruder; heating chamber (220-260°C) melts it; motor pushes molten material through nozzle at controlled feed rate. Deposits layer-by-layer, solidifying on cooling for matrix/surface.
2. **CF Processing (Secondary Nozzle)**: Continuous fiber from spool enters curing chamber via pulleys; coated in resin bath; UV LEDs cure resin around fiber for solid composite tow; extruded as reinforced core.
3. **Dual-Nozzle Sync**: Nozzles deposit simultaneously (e.g., CF core + PA matrix) for sandwich structures; software coordinates for speed doubling.
4. **Curing Integration**: Post-extrusion UV/thermal activation solidifies resin, maintaining thin-object precision.
5. **Motion**: Rollers + belts ensure stable, smooth axes movement for consistent deposition.

## Software Configuration

### Firmware
- **Base**: Marlin 2.1.x (bugfix-2.1.x).
- **Key Settings** (`Configuration.h`):
  ```cpp
  #define DEFAULT_AXIS_STEPS_PER_UNIT {40, 120, 400, 140, 140}  // X/Y/Z/E0/E1
  #define DEFAULT_MAX_FEEDRATE {300, 300, 5, 25, 25}
  #define DEFAULT_MAX_ACCELERATION {3000, 3000, 100, 10000, 10000}
  #define PREHEAT_1_TEMP_HOTEND 240  // PA/CF
  #define PREHEAT_1_TEMP_BED 80
  #define EXTRUDE_MAXLENGTH 100
  #define SINGLENOZZLE_DUAL_EXTRUDER_SWAP  // For dual use
  // Custom: UV LED control via M42 (e.g., pin for curing activation)