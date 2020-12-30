export default {
  global: {
    'html, body': {
      // fontFamily: 'Inter, -apple-system, Roboto, sans-serif, serif',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    "@keyframes slideIn": {
      from: {
        transform: "translateY(-16px)",
        opacity: 0,
      },
      to: {
        transform: "translateY(0)",
        opacity: 1,
      },
    },
  },
}
