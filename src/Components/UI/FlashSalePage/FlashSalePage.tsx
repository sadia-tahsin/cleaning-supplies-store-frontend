// src/components/FlashSalePage.tsx

'use client';
import { Container, Typography, Grid, Box, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { useCountdown } from "../../utils/countdowntimer";

const FlashSalePage = ({ products }: { products: any[] }) => {
  const { timeLeft, formatTime } = useCountdown(10 * 60); // 10 minutes

  return (
    <Container sx={{ marginTop: "5%" }}>
      <Typography variant="h4">Flash Sale</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
          padding: 2,
          backgroundColor: "#f44336",
          color: "#fff",
          borderRadius: 1,
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Flash Sale ends in:
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          marginLeft={1}
          sx={{
            fontSize: "2rem",
            letterSpacing: "0.1rem",
          }}
        >
          {formatTime(timeLeft)} min
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
        {products.map((product: any) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
             <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={product.Images}
        alt={product.Title}
        sx={{ height: 200 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.Title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.Price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.Ratings} / 5
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary">
          Buy Now
        </Button> */}
      </CardActions>
    </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashSalePage;
