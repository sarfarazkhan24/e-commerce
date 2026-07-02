export const brandColors = {
  forestGreen: "#1F4D3A",
  gold: "#B8892B",
  cream: "#F7F1E3",
  white: "#FFFFFF",
  charcoal: "#1F1F1F",
} as const;

export const borderRadius = {
  sm: "0.375rem",
  md: "0.625rem",
  lg: "0.875rem",
  xl: "1.25rem",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(31, 31, 31, 0.06)",
  md: "0 4px 14px rgba(31, 31, 31, 0.10)",
  lg: "0 10px 30px rgba(31, 31, 31, 0.14)",
} as const;

export const containerWidths = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
} as const;

export const animationDurations = {
  fast: "150ms",
  normal: "250ms",
  slow: "400ms",
} as const;

export const theme = {
  colors: brandColors,
  borderRadius,
  shadows,
  containerWidths,
  animationDurations,
} as const;