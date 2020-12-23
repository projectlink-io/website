export default {
  baseStyle: {
  },
  defaultProps: {
    size: 'sm',
  },
  variants: {
    outline: {
      bg: 'rgba(0,0,0,0.0333)',
      borderColor: 'primary.accent3',
      _hover: {
        bg: 'rgba(0,0,0,0.1)',
        borderColor: 'primary.foreground',
      },
    },
    inverted: {
      bg: 'rgba(255,255,255,0.0333)',
      borderColor: 'primary.accent4',
      borderWidth: '1px',
      color: 'primary.background',
      _hover: {
        bg: 'rgba(255,255,255,0.15)',
        borderColor: 'primary.background',
      },
    },
  },
}
