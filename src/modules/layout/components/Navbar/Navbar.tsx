import { AppBar, Container, Toolbar } from "@mui/material";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ bgcolor: "transparent" }}
      elevation={0}
    >
      <Container>
        <Toolbar
          sx={{
            height: 72,
          }}
          disableGutters
        >
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
