import { createTheme, type Shadows } from "@mui/material";
import { navigationCustomizations } from "./customizations";

import { palette } from "./palette";

export const theme = createTheme({
  palette,
  shadows: Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 12,
  },
  components: {
    ...navigationCustomizations,
  },
  typography: {
    fontFamily: [
      "Lexend",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
