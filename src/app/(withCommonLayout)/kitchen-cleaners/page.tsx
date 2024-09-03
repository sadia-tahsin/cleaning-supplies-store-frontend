// import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

// const page = async () => {
//   const res = await fetch("http://localhost:5000/kitchen-cleaners");
//   const data = await res.json();
//   console.log(data);
//   return (
//     <Container sx={{ display: "flex", paddingRight: "5%", marginTop:4 }}>
//       <Box
//         sx={{
//           width: "20%",
//         }}
//       >
//         <Typography variant="h6">Categories</Typography>

//       </Box>
//       <Box
//         sx={{
//           width: "70%",
//         }}
//       >
//         <Typography variant="h3" paddingBottom={2}>Our Collection of Products</Typography>
//         <Typography component="p" color="GrayText">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
//           cumque beatae fugit, veritatis optio provident animi pariatur est eius
//           dolore.
//         </Typography>
//         <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
//           {data.map((product: any) => (
//             <Grid item xs={12} sm={6} md={4} key={product.id}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                 <CardMedia
//                   component="img"
//                   image={product.Images}
//                   alt={product.Title}
//                   sx={{ height: 200 }}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {product.Title}
//                   </Typography>
//                   {/* <Typography variant="body2" color="text.secondary">
//                     {product.Description}
//                   </Typography> */}
//                   <Typography variant="h6" color="text.primary">
//                     ${product.Price}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Rating: {product.Ratings} / 5
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
                 
//                   <Button size="small" color="primary">
//                     Buy Now
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

"use client";

import { useState, useEffect, cache } from "react";
import AllProductsPage from "@/Components/UI/AllProductsPage/AllProductsPage";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products, optionally filtered by category
        const category = searchParams.get("Category");
        const url = category
          ? `http://localhost:5000/kitchen-cleaners?Category=${category}`
          : `http://localhost:5000/kitchen-cleaners`;
  
        const res = await fetch(url, {
          cache:"no-store"
        });
        const data = await res.json();
  
        setProducts(data);
        setUniqueCategories(Array.from(new Set(data.map((product: any) => product.Category))));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
  
    fetchData();
  }, [searchParams]);
  
  return <AllProductsPage products={products} categories={uniqueCategories} />;
};

export default Page;



