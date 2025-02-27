import { createTheme } from "@mui/material/styles";

const commonColors = {
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(0, 0, 0, 1)",
  transparentWhite: "rgba(255, 255, 255, 0.3)",
  transparentBlack: "rgba(0, 0, 0, 0.1)",
  darkGray: "rgb(34 36 41)",
  lightGray: "rgb(235 232 253)",
  lightPurple: "rgba(156, 39, 176, 1)",
  darkPurple: "rgba(106, 27, 154, 1)",
};

const colors = {
  gradients: {
    light: `linear-gradient(to right, ${commonColors.white}, rgba(52, 0, 79, 0.12))`,
    dark: `linear-gradient(to right, rgba(34, 34, 34, 0.8), rgba(91, 7, 122, 0.1))`,
    purpleLight: commonColors.lightPurple,
    purpleDark: commonColors.darkPurple,
    low: {
      colors: { light: ["#9589a5", "#983ce4"], dark: ["#9589a5", "#983ce4"] },
      background: "#973ce32b",
      typographyGradient: "linear-gradient(0deg, #9589a5, #983ce4)",
    },
    medium: {
      colors: { light: ["rgb(249 175 63)"], dark: ["rgb(249 175 63)"] },
      background: "rgba(214, 194, 35, 0.2)",
      typographyGradient: "linear-gradient(0deg, rgba(214, 194, 35, 1), rgba(255, 165, 0, 1))",
    },
  },
  apps: {
    light: "rgba(72, 76, 112, 1)",
    dark: "rgb(117 122 166 / 53%)",
  },
  configs: {
    light: commonColors.white,
    dark: "rgb(72 76 122 / 59%)",
  },
  capsuleBtn: {
    active: { dark: commonColors.white, light: "rgba(82, 88, 125, 1)" },
    notActive: { dark: commonColors.white, light: "rgba(121, 124, 146, .44)" },
    background: { dark: "rgb(72 76 111 / 44%)", light: commonColors.lightGray },
    slider: "rgba(143, 141, 179, 0.4)",
  },
  background: {
    dark: commonColors.darkGray,
    light: commonColors.lightGray,
  },
};

const getTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? colors.background.dark : colors.background.light,
        paper: "transparent",
      },
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            fontFamily: "'Lalezar', sans-serif",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "'Lalezar', sans-serif",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            fontFamily: "'Lalezar', sans-serif",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "'Lalezar', sans-serif",
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            fontFamily: "'Lalezar', sans-serif",
          },
        },
      },
    },
    colors: colors,
  });

export default getTheme;
