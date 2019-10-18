const fontStack = `"Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export default {
  colors: {
    text: {
      primary: "#333",
      highContrast: "#000",
      lowContrast: "#777",
      negative: {
        primary: "#fff",
        highContrast: "#fff",
        lowContrast: "#777",
      },
    },
    highlight: "#0066FF",
    background: {
      beige: "#f5f5f5",
      black: "#000",
    },
    primary: "#639",
    secondary: "#ff6347",
    border: "#D7DBDD",
  },
  fonts: {
    body: fontStack,
    heading: fontStack,
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    light: 400,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [10, 13, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  height: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 3, 7],
  breakpoints: ['48em', '56em', '64em',],
}