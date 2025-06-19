import { Grid } from "@mui/material";
import { useState } from "react";
import { ContactDialog } from "../ContactDialog";
import { Card } from "./Card"; // Ensure the correct path to the Card component

const cards = [
  {
    title: "Connect with Industry Leaders",
    text: "Connect with rich ass people. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam doloremque nobis. Quo, debitis? Nihil facilis corporis officia mollitia eos sequi, quidem quis laborum aperiam blanditiis aliquam asperiores earum quam explicabo repellat! Quibusdam vitae, molestiae non, ullam animi deleniti corrupti dolore error distinctio perspiciatis perferendis similique adipisci molestias magnam eius rerum deserunt tempora velit quam? Accusamus molestiae praesentium consectetur impedit in hic esse iure nam adipisci commodi, a vitae neque itaque sunt officia nesciunt, ad, earum voluptatum molestias quae tenetur.",
  },
  {
    title: "Master Professional Skills",
    text: "You will be goat in your profession. I swear to god. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam doloremque nobis. Quo, debitis? Nihil facilis corporis officia mollitia eos sequi, quidem quis laborum aperiam blanditiis aliquam asperiores earum quam explicabo repellat! Quibusdam vitae, molestiae non, ullam animi deleniti corrupti dolore error distinctio perspiciatis perferendis similique adipisci molestias magnam eius rerum deserunt tempora velit quam? Accusamus molestiae praesentium consectetur impedit in hic esse iure nam adipisci commodi, a vitae neque itaque sunt officia nesciunt, ad, earum voluptatum molestias quae tenetur.",
  },
  {
    title: "Secure Impactful Careers",
    text: "You will make so much money you won't know what to do with it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam doloremque nobis. Quo, debitis? Nihil facilis corporis officia mollitia eos sequi, quidem quis laborum aperiam blanditiis aliquam asperiores earum quam explicabo repellat! Quibusdam vitae, molestiae non, ullam animi deleniti corrupti dolore error distinctio perspiciatis perferendis similique adipisci molestias magnam eius rerum deserunt tempora velit quam? Accusamus molestiae praesentium consectetur impedit in hic esse iure nam adipisci commodi, a vitae neque itaque sunt officia nesciunt, ad, earum voluptatum molestias quae tenetur.",
  },
];

export const Cards = () => {
  const [open, setOpen] = useState(false);
  
  //set which card is expanded
  const [expandedIndex, setExpandedIndex] = useState(-1)
  //whether or not any card at all is currently expanded 
  const [isExpanded, setIsExpanded] = useState(false)

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
          <Card 
            key={i}
            title={card.title} 
            text={card.text}
            isExpanded={isExpanded} 
            setIsExpanded={setIsExpanded} 
            index={i} 
            expandedIndex={expandedIndex} 
            setExpandedIndex={setExpandedIndex} 
            setOpen={setOpen} 
          />
        ))}
      </Grid>
    </>
  );
};
