import { Grid } from "@mui/material";
import { useState } from "react";
import { ContactDialog } from "../ContactDialog";
import { Card } from "./Card"; // Ensure the correct path to the Card component

const cards = [
  {
    title: "Connect with Industry Leaders",
  },
  {
    title: "Master Professional Skills",
  },
  {
    title: "Secure Impactful Careers",
  },
];

export const Cards = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactDialog open={open} setOpen={setOpen} />
      <Grid
        container
        mt={2}
        spacing={2}
        direction={{ xs: "column", md: "row" }}
      >
        {cards.map((card, i) => (
          <Card key={i} title={card.title} setOpen={setOpen} />
        ))}
      </Grid>
    </>
  );
};
