import { HERO_IMAGE_URL } from "@/common";
import { Box, Container, styled } from "@mui/material";
import { Cards } from "./Cards";
import { ForPartners } from "./ForPartners";
import { HeroTypography } from "./HeroTypography";

const HeroContainer = styled(Container)({
  position: "relative",

  paddingTop: 2 * 8,

  minHeight: "calc(100vh - 72px)",
});

const HeroImage = (props: any) => (
  <Box
    {...props}
    sx={{
      position: "relative",
      padding: 4,
      height: "500px",
      overflow: "hidden",
      borderRadius: 2,
      ":before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        backgroundImage: `url(${HERO_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        opacity: { xs: 0.5, md: 0.75, lg: 1 },

        zIndex: -1,
      },
    }}
  />
);

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage>
        <HeroTypography />
      </HeroImage>
      <Cards />
      <ForPartners />
    </HeroContainer>
  );
};
