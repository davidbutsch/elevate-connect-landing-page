import {
  CardContent,
  Grid,
  Icon,
  Link,
  Card as MuiCard,
  Typography,
} from "@mui/material";

export type CardProps = {
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Card = (props: CardProps) => {
  const { title, setOpen } = props;

  const handleClick = () => setOpen(true);

  return (
    <Grid size={{ xs: 12, md: 12 / 3 }}>
      <MuiCard>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Link component="button" onClick={handleClick}>
            Contact Us
            <Icon className="material-symbols-outlined" fontSize="small">
              arrow_forward
            </Icon>
          </Link>
        </CardContent>
      </MuiCard>
    </Grid>
  );
};
