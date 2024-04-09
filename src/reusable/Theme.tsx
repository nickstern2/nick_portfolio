import { createTheme } from "@mui/material/styles";

// MODULE AUGMENTATION (customize the theme types)
export interface IndicatorColor {
  dark: string;
  light: string;
  complement: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    indicatorColors: {
      blue: IndicatorColor;
      green: IndicatorColor;
      red: IndicatorColor;
      // grey: IndicatorColor;
      // defaultGrey: IndicatorColor;
    };
  }
  interface PaletteOptions {
    indicatorColors?: {
      blue: IndicatorColor;
      green: IndicatorColor;
      red: IndicatorColor;
      orange: IndicatorColor;
      grey: IndicatorColor;
      defaultGrey: IndicatorColor;
    };
  }
  interface Theme {
    border: {
      radius: {
        low: number;
        medium: number;
        high: number;
      };
    };
  }
  interface ThemeOptions {
    border?: {
      radius?: {
        low: number;
        medium: number;
        high: number;
      };
    };
  }
  interface ZIndex {
    stickyHeader: number;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    15: string;
    20: string;
    25: string;
    30: string;

    altDark: string;
  }
}

// COLORS
const paletteText = {
  primary: "rgb(226 232 240)",
  secondary: "#081039",
};

const palettePrimary = {
  700: "#0731A5", // Main
  800: "#0F172A", // Dark
};

const paletteSecondary = {
  500: "#5E6CB0", // Main
  800: "#282E50", // Dark
};

export const paletteNavBar = {
  main: "rgba(10, 25, 47, 1)",
};
const paletteError = {
  25: "#FCE8E8",
  50: "#FAD1D1", // Light
  100: "#F7BABA",
  200: "#F5A3A3",
  300: "#F28C8C",
  400: "#F07575",
  500: "#ED5E5E",
  600: "#EA4646",
  700: "#CF1717", // Main
  800: "#8A0F0F", // Dark
  900: "#450808",
};

// THEME
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: palettePrimary[700],
      dark: palettePrimary[800],
    },
    secondary: {
      main: paletteSecondary[500],
      dark: paletteSecondary[800],
    },
    error: {
      main: paletteError[700],
      light: paletteError[50],
      dark: paletteError[800],
      900: paletteError[900],
      800: paletteError[800],
      700: paletteError[700],
      600: paletteError[600],
      500: paletteError[500],
      400: paletteError[400],
      300: paletteError[300],
      200: paletteError[200],
      100: paletteError[100],
      50: paletteError[50],
    },
    text: {
      primary: paletteText.primary,
      secondary: paletteText.secondary,
    },

    background: {
      paper: "#FFF",
      default: "#0F172A",
    },
  },
  border: {
    radius: {
      low: 4,
      medium: 8,
      high: 16,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "3rem", // 48px
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: "-0.0125em",
      color: paletteText.primary,
    },
    h2: {
      fontSize: "2rem", // 32px
      fontWeight: 500,
      letterSpacing: "-0.025rem",
      lineHeight: 1.75,
      color: paletteText.primary,
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
      letterSpacing: "-0.025rem",
      lineHeight: 1.75,
      color: paletteText.primary,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
      letterSpacing: "0.005em",
      whiteSpace: "pre-wrap", // This makes this variant render newlines and tab characters normally
      color: paletteText.primary,
      opacity: 0.8,
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
      letterSpacing: "0.0015em",
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 600,
      letterSpacing: "0.0015em",
      lineHeight: "1.16375rem", // 18.62px
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      letterSpacing: "0.0025em",
      whiteSpace: "pre-wrap", // This makes this variant render newlines and tab characters normally
    },
    overline: {
      fontSize: "0.75rem", // 12px,
      fontWeight: 500,
      letterSpacing: "0.0025em",
      lineHeight: "2",
      color: palettePrimary[700],
    },
    caption: {
      fontSize: "0.75rem", // 12px,
      fontWeight: 400,
      letterSpacing: "0.0025em",
      opacity: "0.65",
    },
    button: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      letterSpacing: "0.0125em",
      textTransform: "none",
    },
  },
  zIndex: {
    stickyHeader: 501,
  },
  spacing: 8,
  shadows: [
    "none",
    "0px 1px 3px 0px rgba(59, 70, 120, .12)",
    "0px 1px 5px 0px rgba(59, 70, 120, .12)",
    "0px 1px 8px 0px rgba(59, 70, 120, .12)",
    "0px 1px 10px 0px rgba(59, 70, 120, .12)",
    "0px 1px 14px 0px rgba(59, 70, 120, .12)",
    "0px 1px 18px 0px rgba(59, 70, 120, .12)",
    "0px 2px 16px 1px rgba(59, 70, 120, .12)",
    "0px 3px 14px 2px rgba(59, 70, 120, .12)",
    "0px 3px 16px 2px rgba(59, 70, 120, .12)",
    "0px 4px 18px 3px rgba(59, 70, 120, .12)",
    "0px 4px 20px 3px rgba(59, 70, 120, .12)",
    "0px 5px 22px 4px rgba(59, 70, 120, .12)",
    "0px 5px 24px 4px rgba(59, 70, 120, .12)",
    "0px 5px 26px 4px rgba(59, 70, 120, .12)",
    "0px 6px 28px 5px rgba(59, 70, 120, .12)",
    "0px 6px 30px 5px rgba(59, 70, 120, .12)",
    "0px 6px 32px 5px rgba(59, 70, 120, .12)",
    "0px 7px 34px 6px rgba(59, 70, 120, .12)",
    "0px 7px 36px 6px rgba(59, 70, 120, .12)",
    "0px 8px 38px 7px rgba(59, 70, 120, .12)",
    "0px 8px 40px 7px rgba(59, 70, 120, .12)",
    "0px 8px 42px 7px rgba(59, 70, 120, .12)",
    "0px 9px 44px 8px rgba(59, 70, 120, .12)",
    "0px 9px 46px 8px rgba(59, 70, 120, .12)",
  ],
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          margin: "4px",
        },
      },
    },
  },
});

// CUSTOMIZATION USING THEME VALUES
theme.palette.indicatorColors = {
  blue: {
    dark: theme.palette.primary.main,
    light: theme.palette.primary[25] as string,
    complement: theme.palette.primary[20] as string,
  },
  green: {
    dark: theme.palette.success.altDark as string,
    light: theme.palette.success[15] as string,
    complement: theme.palette.success[15] as string,
  },
  red: {
    dark: theme.palette.error.dark,
    light: theme.palette.error[25] as string,
    complement: theme.palette.error[25] as string,
  },

  // grey: {
  //   dark: theme.palette.secondary[700] as string,
  //   light: theme.palette.secondary[50] as string,
  //   complement: theme.palette.secondary[20] as string,
  // },
  // defaultGrey: {
  //   dark: theme.palette.info.dark,
  //   light: theme.palette.info[50] as string,
  //   complement: theme.palette.info[20] as string,
  // },
};

export { theme };
