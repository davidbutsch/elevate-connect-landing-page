import { Container, Divider, Paper, Stack } from "@mui/material";
import { CopyrightTypography } from "./CopyrightTypography";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Paper
      variant="outlined"
      component="footer"
      sx={{
        mt: 10,
        p: 5,
      }}
    >
      <Container>
        <Stack gap={4}>
          <Stack direction="row">
            <Logo />
            {/* TODO */}
          </Stack>
          <Divider />
          <Stack direction="row">
            <CopyrightTypography />
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
};
