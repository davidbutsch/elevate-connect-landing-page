import { Typography } from "@mui/material";

export const HeroTypography = () => {
  return (
    <>
      <Typography
        fontWeight="bold"
        ml="auto"
        textAlign="right"
        color="white"
        maxWidth={{ xs: "100%", sm: "60%" }}
        sx={{
          typography: {
            xs: "h4",
            sm: "h3",
            lg: "h2",
          },
          "> strong": {
            color: (theme) => theme.palette.primary?.main,
          },
        }}
      >
        <strong>Elevating</strong> careers, One <strong>Connection</strong> at a
        Time
      </Typography>
      <Typography
        mt="auto"
        variant="subtitle1"
        fontWeight="bold"
        textAlign="right"
        color="white"
        sx={{
          position: "absolute",
          bottom: 4 * 8,
          right: 4 * 8,
        }}
      >
        Elevate Connect
      </Typography>
    </>
  );
};
