# Non-Deterministic Random-Number-Generator-RNG (Monte Carlo Estimation of π Using Zener Diode Noise)

## Overview

This project implements Monte Carlo estimation of π using random bits extracted from analog voltage measurements of a Zener diode noise source. The voltage noise is digitally sampled, converted into a binary sequence via statistical thresholding, and then transformed into 2D coordinate pairs in [0,1)² using bit pairing strategies. Two distinct algorithmic approaches are compared:

- **Version 0 (v0.mlx)**: Sequential non-overlapping bit consumption with MSB/LSB interpretation variants
- **Version 1 (v1.mlx)**: Overlapping sliding-window strategy achieving approximately 40× more usable Monte Carlo sample points

Both methods enable high-accuracy π estimation from a limited set of physical random bits.

## Project Structure

```
.
├── Data_Post_Processing_v0.mlx
├── Data_Post_Processing_v1.mlx
├── LICENSE
├── README.md
└── Data_from_Scope/
    └── scope_6_2.csv
```

### File Descriptions

- **Data_Post_Processing_v0.mlx**: MATLAB Live Script implementing sequential non-overlapping bit grouping with MSB-first, LSB-first, and combined (BOTH) interpretation methods for coordinate generation and Monte Carlo π estimation.

- **Data_Post_Processing_v1.mlx**: MATLAB Live Script implementing overlapping sliding-window approach with 1-bit step size, maximizing bit utilization and generating 5,376 coordinate pairs from 5,415 extracted bits.

- **Data_from_Scope/scope_6_2.csv**: Raw voltage measurements from oscilloscope containing 1,000,001 samples acquired at 20 kHz over 50 seconds.

## Methodology Overview

### Data Acquisition

Raw voltage samples are acquired and stored in CSV format:
- **File**: `Data_from_Scope/scope_6_2.csv`
- **Total Samples**: 1,000,001
- **Sampling Frequency**: 20 kHz
- **Measurement Duration**: 50 seconds
- **Voltage Range**: Approximately 0.247–0.255 V

### Signal Statistical Analysis

The voltage signal is characterized through computation of:
- **Mean**: μ_V = 0.251235 V
- **Standard Deviation**: σ_V = 0.001946 V (≈ 2 mV)
- **Upper Threshold**: V_max = μ_V + 2σ_V = 0.255126 V
- **Lower Threshold**: V_min = μ_V - 2σ_V = 0.247344 V

### Bit Extraction

Voltage samples are converted to binary bits using threshold detection:

- **V(k) > V_max** → Bit value 1
- **V(k) < V_min** → Bit value 0
- **V_min ≤ V(k) ≤ V_max** -> Discarded

**Extraction Statistics**:
- Valid bits extracted: 5,415
- Discarded samples: 994,586
- Extraction efficiency: 0.54%

---

## Algorithm Version 0 (v0.mlx): Sequential Non-Overlapping Approach

### Bit Organization

The 5,415 extracted bits are partitioned into consecutive, non-overlapping 40-bit windows:
- **Bits per coordinate pair**: 40 bits total (20 for x-coordinate, 20 for y-coordinate)
- **Sequential grouping**: Each pair consumes unique bits with no overlap
- **Coordinate pair capacity**: ⌊5,415 / 40⌋ = **135 coordinate pairs**
- **Unused bits**: 15 bits (0.28% waste)

### Binary Fraction Conversion Methods

Each 20-bit sequence is converted to a decimal value in [0, 1) using one of two interpretation methods:

**MSB Method (Most Significant Bit First)**
- Bits processed left-to-right with first bit as 2⁻¹, second as 2⁻²
- Formula: x = Σ(b_i × 2^(-i)) for i=1 to 20
- Example [1,0,1,1]: x = 0.5 + 0 + 0.125 + 0.0625 = **0.6875**

**LSB Method (Least Significant Bit First)**
- Bits reversed before conversion, last extracted bit as 2⁻¹
- Formula: x = Σ(b_(21-i) × 2^(-i)) for i=1 to 20
- Example [1,0,1,1] → Reversed [1,1,0,1]: x = 0.5 + 0.25 + 0 + 0.0625 = **0.8125**

### Version 0 Results

#### Method 1: MSB Only
- **Coordinate pairs**: 135
- **Points inside circle**: 105
- **Circle/Total ratio**: 0.777778
- **Estimated π**: 3.11111111
- **Absolute error**: 0.03048154
- **Relative error**: 0.9703%

#### Method 2: LSB Only
- **Coordinate pairs**: 135
- **Points inside circle**: 111
- **Circle/Total ratio**: 0.822222
- **Estimated π**: 3.28888889
- **Absolute error**: 0.14729624
- **Relative error**: 4.6886%

#### Method 3: BOTH (Combined)
- **Coordinate pairs**: 270 (MSB + LSB interpretations)
- **Points inside circle**: 216
- **Circle/Total ratio**: 0.800000
- **Estimated π**: 3.20000000
- **Absolute error**: 0.05840735
- **Relative error**: 1.8592%

### Statistical Analysis of v0 Coordinates

| Statistic | X-Coordinates | Y-Coordinates | Combined |
|-----------|---|---|---|
| Mean | 558,145.47 | 565,663.97 | 561,904.72 |
| Std Dev | 310,337.18 | 292,698.22 | 301,390.20 |
| Theoretical uniform mean | 524,287.50 | 524,287.50 | 524,287.50 |
| Bias magnitude | +33,857.97 | +41,376.47 | +37,617.22 |

**Observations**:
- Both X and Y coordinates exhibit positive bias (3.6% toward higher values)
- Y-coordinate bias exceeds X-coordinate bias by ~22%, indicating asymmetric noise distribution
- Standard deviations comparable, suggesting similar spread in both dimensions

---

## Algorithm Version 1 (v1.mlx): Overlapping Sliding-Window Approach

### Sliding Window Mechanism

A 40-bit window slides across the 5,415-bit sequence with a **step size of 1 bit**:

```
Window position k:
- X-coordinate bits: positions [k, k+1, ..., k+19]
- Y-coordinate bits: positions [k+20, k+21, ..., k+39]
- Next window (k+1): shift by 1 bit, reusing 39 bits
```

### Overlap Structure

Each successive window reuses **39 of 40 bits** from the previous window:
- Window 1: bits [0–39] → (x₁, y₁)
- Window 2: bits [1–40] → (x₂, y₂) [39 bits reused]
- Window 3: bits [2–41] → (x₃, y₃) [39 bits reused]
- ... continues until end of bit sequence

### Coordinate Pair Capacity

**Maximum windows**: N_windows = Total_bits − Window_size + 1
```
N_windows = 5,415 − 40 + 1 = 5,376 coordinate pairs
```

**Efficiency comparison**:
- Sequential (v0): 135 pairs, 85% utilization
- Overlapping (v1): 5,376 pairs, **99.997% utilization**
- **Improvement factor**: **40× more sample points**

### Binary Fraction Conversion

V1 uses the same MSB conversion as v0's Method 1 (left-to-right bit ordering):
```
For 20-bit sequence [b₁, b₂, ..., b₂₀]:
x = Σ(b_i × 2^(-i)) for i=1 to 20
```

### Version 1 Results

#### Primary: Overlapping Method
- **Coordinate pairs**: 5,376
- **Points inside circle**: 4,217
- **Circle/Total ratio**: 0.78441
- **Estimated π**: 3.13765
- **Absolute error**: 0.00394265
- **Relative error**: 0.1255%

#### Extended: Bidirectional Variant
- **Coordinate pairs**: 10,752 (MSB + LSB interpretations across overlapping windows)
- **Points inside circle**: 8,399
- **Circle/Total ratio**: 0.78116
- **Estimated π**: 3.12463
- **Absolute error**: 0.01696265
- **Relative error**: 0.5401%

---

## Comparative Performance Analysis

### Sample Generation Efficiency

| Aspect | v0 (Sequential) | v1 (Overlapping) | Ratio |
|--------|---|---|---|
| 40-bit windows extractable | 135 | 5,376 | 40.0× |
| Bits reused per window | 0 | 39 | N/A |
| Bit utilization | 85% | 99.997% | 1.18× |
| Total bits consumed | 5,400 | 5,415 | 1.003× |

### π Estimation Accuracy Comparison

| Method | Samples | Est. π | Error (%) | Type |
|--------|---------|--------|-----------|------|
| v0 MSB | 135 | 3.11111 | 0.9703% | Independent |
| v0 LSB | 135 | 3.28889 | 4.6886% | Independent |
| v0 BOTH | 270 | 3.20000 | 1.8592% | Independent pairs |
| **v1 Overlapping** | **5,376** | **3.13765** | **0.1255%** | Correlated (97.5% overlap) |
| v1 Bidirectional | 10,752 | 3.12463 | 0.5401% | Correlated (97.5% overlap) |

### Key Findings

1. **V1 overlapping achieves 15× better accuracy** than v0 BOTH despite 97.5% inter-sample correlation
2. **40× increase in sample count** overwhelms correlation effects in Monte Carlo estimation
3. **Monte Carlo convergence (O(1/√N))**: √5,376/√270 ≈ 4.46× theoretical improvement vs. 14.8× observed improvement
4. **Statistical independence trade-off validated**: Ensemble size and averaging power dominate independence considerations

---

## Monte Carlo π Estimation Method

For each coordinate pair (x, y), test whether it lies within the inscribed circle:

```
Distance condition: (x - 0.5)² + (y - 0.5)² ≤ 0.25
```

The mathematical relationship:
```
π ≈ 4 × (N_inside / N_total)
```

Where:
- N_inside = count of points satisfying the circle condition
- N_total = total number of coordinate pairs
- Factor of 4 accounts for unit circle inscribed in unit square area ratio (π/4)

---

## Using the Data Post-Processing Scripts

### Version 0 (v0.mlx) Workflow

1. **Load Data**: Reads `Data_from_Scope/scope_6_2.csv`
2. **Statistical Analysis**: Computes mean, standard deviation, and thresholds
3. **Bit Extraction**: Applies 2σ threshold detection to generate 5,415 binary bits
4. **Coordinate Generation**: Sequential 40-bit grouping with MSB and LSB interpretation
5. **Monte Carlo Estimation**: Performs circle test on 135 (or 270 with BOTH) coordinate pairs
6. **π Calculation**: Computes estimates for MSB, LSB, and combined methods
7. **Error Analysis**: Calculates absolute/relative error for each method
8. **Visualization**: Generates plots of voltage time series, coordinate scatter plots, and error metrics

### Version 1 (v1.mlx) Workflow

1. **Load Data**: Reads `Data_from_Scope/scope_6_2.csv`
2. **Statistical Analysis**: Computes mean, standard deviation, and thresholds
3. **Bit Extraction**: Applies 2σ threshold detection to generate 5,415 binary bits
4. **Overlapping Window Generation**: Sliding window with 1-bit step creates 5,376 coordinate pairs
5. **Binary Fraction Conversion**: Converts 20-bit sequences to [0,1) decimals
6. **Monte Carlo Estimation**: Performs circle test on all 5,376 pairs
7. **Optional Bidirectional**: Also generates 10,752 pairs using MSB+LSB interpretation
8. **π Calculation**: Computes overlapping and bidirectional estimates
9. **Error Analysis**: Calculates absolute/relative error and convergence metrics
10. **Visualization**: Generates scatter plots, convergence curves, and comparison histograms

### Key Variables and Functions

**Common to both versions**:
- `voltage_data`: Raw 1,000,001 voltage samples
- `mu_V`, `sigma_V`: Signal statistics (mean and standard deviation)
- `V_threshold_upper`, `V_threshold_lower`: Extraction thresholds (2σ band)
- `extracted_bits`: Binary sequence (5,415 bits)
- `pi_estimate`: Calculated π value(s)
- `error_absolute`, `error_percent`: Error metrics

**Version 0 specific**:
- `coordinates_MSB`, `coordinates_LSB`: Generated coordinate pairs from MSB/LSB methods
- `inside_circle_MSB`, `inside_circle_LSB`: Circle membership arrays

**Version 1 specific**:
- `coordinates_overlap`: 5,376 coordinate pairs from overlapping windows
- `coordinates_bidir`: 10,752 coordinate pairs from bidirectional method
- `inside_circle_overlap`, `inside_circle_bidir`: Circle membership arrays

---

## Theoretical Foundations

### Independence vs. Ensemble Size Trade-off

**Version 0** maintains strict statistical independence between consecutive coordinate pairs at the cost of severe bit waste (85% utilization) and limited sample count (135 pairs). Each pair consumes unique, non-overlapping bits.

**Version 1** sacrifices inter-sample independence (97.5% bit overlap between adjacent pairs) to maximize ensemble size (5,376 pairs) and bit utilization (99.997%). The central limit theorem ensures that despite correlation, the accumulated decisions across thousands of samples converge to the true expectation.

**Principle**: In Monte Carlo estimation, ensemble size and averaging power dominate over individual sample independence. When resources constrain the total entropy available, generating many correlated samples outperforms generating fewer independent samples.

## Practical Advantages and Applications

- **Data Efficiency**: V1 extracts 40× more information from limited entropy source
- **Computational Simplicity**: No complex algorithms; straightforward threshold detection and bit processing
- **Accuracy**: V1 achieves 0.1255% π estimation error with only 5,415 extracted bits
- **Reproducibility**: Hardware-based randomness enables validation of inherent noise properties
- **Educational Value**: Demonstrates signal processing challenges (threshold selection, entropy extraction, coordinate generation) and statistical concepts (Monte Carlo convergence, ensemble averaging)

---

## References

- D. H. Bailey, "Numerical results on the transcendence of constants involving π, e, and Euler's constant," *Mathematics of Computation*, vol. 50, no. 181, pp. 275–281, Jan. 1988.

- D. E. Knuth, *The Art of Computer Programming: Seminumerical Algorithms*, vol. 2, 3rd ed. Addison-Wesley, 1997.

- G. S. Fishman, *Monte Carlo: Concepts, Algorithms, and Applications*. Springer-Verlag, 1996.

- L. Gammaitoni, P. Hänggi, P. Jung, and F. Marchesoni, "Stochastic resonance," *Reviews of Modern Physics*, vol. 70, no. 2, pp. 223–287, Apr. 1998.
