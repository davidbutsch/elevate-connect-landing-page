import { Box, Button, Card, Typography, useTheme, useMediaQuery } from "@mui/material";


export const ForPartners = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    <Card
    
        sx={{
            mt: 2,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography
            textAlign='center'
            sx={{
                typography: {
                    xs: "h6",
                    sm: "h5",
                    lg: "h4",
                },
                "> strong": {
                    color: (theme) => theme.palette.primary?.main,
                },
            }}
        >
            Building a <strong>Stronger</strong> Future, <strong>Together</strong>
        </Typography>

        <Typography
            textAlign='center'
            sx={{
                mt: 2,
                typography: {
                    sm: "h6",
                },
            }}
        >
            We help forward-thinking companies cultivate diverse talent pipelines and create career opportunities for the next generation. Elevate Connect is passionate about fostering connections between industry professionals and college students. Click the button below to learn more about how you can help shape the future of your industry.
        </Typography>

        <Button 
            variant="contained"
            size={isSmallScreen ? 'small': 'large'}
            sx={{
                mt: 2,
                mb: 1,
            }}
        >
            Learn More
        </Button>
    </Card>
    )
}


