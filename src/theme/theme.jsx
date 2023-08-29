import { createTheme } from "@mui/material";

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1100,
    xl: 1300,
    xxl: 1536,
  },
};

export let theme = createTheme();

theme = createTheme({
  breakpoints,
  palette: {
    mode: "light",
    default: {
      main: "#FFFFFF",
      primary: "#0F424D",
      contrastText: "#FFFFFF",
    },
    primary: {
      main: "#0F424D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#869633",
      light: "#ACBD33",
      dark: "#60682A",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#0F424D",
      tertiary: "#869633",
      quaternary: "#60682A",
      quinary: "#ACBD33",
    },
    alert: {
      main: "#a8771a",
    },
  },

  typography: {
    fontFamily: ["var(--poppins)", "var(--playfair)"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: "var(--playfair)",
      fontSize: "2.625rem", // 42px
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("lg")]: {
        fontSize: "2rem", // 32px
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.75rem", // 28px
      },
    },
    h2: {
      fontFamily: "var(--playfair)",
      fontSize: "2.1875rem", // 35px
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem", // 24px
      },
    },
    h3: {
      fontFamily: "var(--poppins)",
      fontSize: "1.875rem", // 30px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.5625rem", // 25px
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem", // 20px
      },
    },
    h4: {
      fontFamily: "var(--poppins)",
      fontSize: "1.5625rem", // 25px
      fontWeight: 600,
      fontStyle: "italic",
      lineHeight: "164%",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem", // 20px
      },
    },
    h5: {
      fontFamily: "var(--poppins)",
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem", // 18px
      },
    },
    h6: {
      fontFamily: "var(--poppins)",
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem", // 16px
      },
    },
    subtitle1: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    },
    subtitle2: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "normal",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    },
    body1: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "158%",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    },
    body2: {
      fontFamily: "var(--poppins)",
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "174%",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    },
    button: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "185%",
      textTransform: "unset",
    },
    count: {
      fontFamily: "var(--playfair)",
      fontSize: "3.75rem", // 60px
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem", // 40px
      },
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
  },
});
