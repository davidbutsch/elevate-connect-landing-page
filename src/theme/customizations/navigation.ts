import { type Components, type Theme } from "@mui/material";
import { palette } from "../palette";

export const navigationCustomizations: Components<Theme> = {
  MuiLink: {
    defaultProps: {
      color: "textSecondary",
    },
    styleOverrides: {
      underlineNone: true,
      root: {
        width: "fit-content",

        display: "flex",
        alignItems: "center",

        textDecoration: "none",
        transition: ".2s",

        ".material-symbols-outlined": {
          marginTop: 1,
          marginLeft: 2,
          fontSize: "1rem",
        },

        ":hover": {
          color: palette.text?.primary,
        },
      },
    },
  },
};
