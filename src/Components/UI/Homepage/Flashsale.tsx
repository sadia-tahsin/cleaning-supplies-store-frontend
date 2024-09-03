import {
  Typography,
  Box,
  Button,
  Stack,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Link from "next/link";
const Flashsale = async () => {
  const data = await (
    await fetch("http://localhost:5000/flash-sale", {
      next: {
        revalidate: 30,
      },
    })
  ).json();
  return (
    <Container>
      <Box className="min-h-screen" sx={{ marginTop: 4 }}>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">Flashsale</Typography>
          <Link href="/flash-sale">
            <Button variant="contained"> See All</Button>
          </Link>
        </Stack>
        <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
          {data.slice(0, 4).map((product: any) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
      </Box>
    </Container>
  );
};

export default Flashsale;
