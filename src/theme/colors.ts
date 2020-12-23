interface Shades {
  lighter: string;
  light: string;
  default: string;
  dark: string;
}

interface Colors {
  primary: {
    background: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accent7: string;
    accent8: string;
    foreground: string;
  };
  error: Shades;
  success: Shades;
  warning: Shades;
  violet: Shades;
  cyan: Shades;
  highlight: {
    purple: string;
    magenta: string;
    pink: string;
    yellow: string;
    salmon: string;
  };
}

const lightMode: Colors = {
  primary: {
    background: '#FFF',
    accent1: '#FAFAFA',
    accent2: '#EAEAEA',
    // accent3: '#CCC',
    accent3: '#999',
    accent4: '#888',
    accent5: '#666',
    accent6: '#444',
    accent7: '#333',
    accent8: '#111',
    foreground: '#000',
  },
  error: {
    lighter: '#F7D4D6',
    light: '#FF1A1A',
    default: '#E00',
    dark: '#C50000',
  },
  success: {
    lighter: '#D3E5FF',
    light: '#3291FF',
    default: '#0070F3',
    dark: '#0761D1',
  },
  warning: {
    lighter: '#FFEFCF',
    light: '#F7B955',
    default: '#F5A623',
    dark: '#AB570A',
  },
  violet: {
    lighter: '#E3D7FC',
    light: '#8A63D2',
    default: '#7928CA',
    dark: '#4C2889',
  },
  cyan: {
    lighter: '#AAFFEC',
    light: '#79FFE1',
    default: '#50E3C2',
    dark: '#29BC9B',
  },
  highlight: {
    purple: '#F81Ce5',
    magenta: '#EB367F',
    pink: '#FF0080',
    yellow: '#FFF500',
    salmon: '#FF6363',
  },
}

const colors = {
  ...lightMode,
}

export default colors
