import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/services",
    name: "Services",
  },
  {
    to: "/pricing",
    name: "Pricing",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];

export const NavLinks = () => {
  return (
    <Stack direction="row" justifyContent="center" gap={1.5} flex={1}>
      {pages.map((page) => (
        <Link to={page.to} key={page.to}>
          <Button
            sx={{
              ...(location.pathname == page.to && {
                // Display underline dash when active
                "&:before": {
                  content: "''",
                  position: "absolute",
                  display: "block",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 24,
                  borderBottom: "2px solid #FFFFFF",
                },
              }),
            }}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};
