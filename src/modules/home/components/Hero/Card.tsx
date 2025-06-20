import {
  CardContent,
  Grid,
  Icon,
  Link,
  Card as MuiCard,
  Stack,
  Typography,
} from "@mui/material";

export type CardProps = {
  title: string;
  text: string;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  expandedIndex: number;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Card = (props: CardProps) => {
  const { title, text, isExpanded, index, expandedIndex, setExpandedIndex, setOpen, setIsExpanded } = props;

  const handleContactClick = () => setOpen(true);
  const handleSeeMoreClick = () => {
    setExpandedIndex(index)
    setIsExpanded(true)
  }
  const handleSeeLessClick = () => {
    setExpandedIndex(-1)
    setIsExpanded(false)
  }


  if(isExpanded && expandedIndex != index){
    return(
      <></>
    );
  }

  return (
    <Grid size={{ xs: 12, md: (expandedIndex == index && isExpanded) ? 12: 12 / 3 }}>
      <MuiCard>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          
          {!isExpanded ? 
            <Link component="button" onClick={handleSeeMoreClick}>
              see more...
            </Link>
            :
            <Stack spacing={1}>
              <Typography>{text}</Typography>
              <Link component="button" onClick={handleSeeLessClick}>
                see less
              </Link>
              <Link component="button" onClick={handleContactClick}>
                Contact Us
                <Icon className="material-symbols-outlined" fontSize="small">
                  arrow_forward
                </Icon>
              </Link>
            </Stack>
          }
          
        </CardContent>
      </MuiCard>
    </Grid>
  );
};
