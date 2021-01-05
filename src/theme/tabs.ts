export default {
  parts: ['tab'],
  variants: {
    enclosed: {
      tab: {
        color: 'primary.accent4',
        mb: '-1px',
        fontWeight: 400,
        fontSize: ['xs', 'xs', 'sm'],
        _hover: {
          color: 'primary.foreground',
        },
        _selected: {
          bg: 'primary.accent1',
          color: 'primary.foreground',
          borderBottomColor: 'primary.accent1',
        },
      },
      tablist: {
        mb: 0,
      },
    },
  },
}
