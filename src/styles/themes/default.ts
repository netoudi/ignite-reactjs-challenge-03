export const defaultTheme = {
  grid: {
    container: '89.6rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '1rem',
  },
  font: {
    family: "'Nunito', sans-serif",
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
    },
  },
  colors: {
    blue: '#3294F8',
    'base-title': '#E7EDF4',
    'base-subtitle': '#C4D4E3',
    'base-text': '#AFC2D4',
    'base-span': '#7B96B2',
    'base-label': '#3A536B',
    'base-border': '#1C2F41',
    'base-post': '#112131',
    'base-profile': '#0B1B2B',
    'base-background': '#071422',
    'base-input': '#040F1A',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
