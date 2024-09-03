// "use client";

// import { useState } from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   Checkbox,
//   FormGroup,
//   FormControlLabel
// } from "@mui/material";
// import Link from "next/link";

// const AllProductsPage = ({ products, categories }:{products:any, categories:any}) => {
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(12); // Initial number of visible products
  
//     const handleCategoryChange = (event:any) => {
//       const { value, checked } = event.target;
//       if (checked) {
//         setSelectedCategories((prev) => [...prev, value]);
//       } else {
//         setSelectedCategories((prev) =>
//           prev.filter((category) => category !== value)
//         );
//       }
//     };
  
//     const handleLoadMore = () => {
//       setVisibleCount((prev) => prev + 12); // Load 12 more products on click
//     };
  
//     const filteredProducts =
//       selectedCategories.length > 0
//         ? products.filter((product:string) =>
//             selectedCategories.includes(product.Category)
//           )
//         : products;
  
//     const visibleProducts = filteredProducts.slice(0, visibleCount); // Limit the number of visible products
  
//     return (
//       <Container sx={{ display: "flex", paddingRight: "5%", marginTop: 4 }}>
//         <Box
//           sx={{
//             width: "20%",
//           }}
//         >
//           <Typography variant="h6" paddingBottom={2}>
//             Categories
//           </Typography>
//           <FormGroup>
//             {categories.map((category) => (
//               <FormControlLabel
//                 key={category}
//                 control={
//                   <Checkbox
//                     value={category}
//                     onChange={handleCategoryChange}
//                     checked={selectedCategories.includes(category)}
//                   />
//                 }
//                 label={category}
//               />
//             ))}
//           </FormGroup>
//         </Box>
//         <Box
//           sx={{
//             width: "70%",
//           }}
//         >
//           <Typography variant="h3" paddingBottom={2}>
//             Our Collection of Products
//           </Typography>
//           <Typography component="p" color="GrayText">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
//             cumque beatae fugit, veritatis optio provident animi pariatur est eius
//             dolore.
//           </Typography>
//           <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
//             {visibleProducts.map((product) => (
//               <Grid item xs={12} sm={6} md={4} key={product.id}>
//                 <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
//                   <CardMedia
//                     component="img"
//                     image={product.Images}
//                     alt={product.Title}
//                     sx={{ height: 200 }}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h6" component="div">
//                       {product.Title}
//                     </Typography>
//                     {/* <Typography variant="body2" color="text.secondary">
//                       {product.Description}
//                     </Typography> */}
//                     <Typography variant="h6" color="text.primary">
//                       ${product.Price}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Rating: {product.Ratings} / 5
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Link href={`\kitchen-cleaners\\${product._id}`}>
//                     <Button size="small" color="primary">
//                      View Details
//                     </Button>
//                     </Link>
                    
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//           {visibleCount < filteredProducts.length && (
//             <Box sx={{ textAlign: "center", marginBottom: 4 }}>
//               <Typography component="p" my={2}>Showing 12 out of {filteredProducts.length}</Typography>
//               <Button variant="contained" onClick={handleLoadMore}>
//                 Load More
//               </Button>
//             </Box>
//           )}
//         </Box>
//       </Container>
//     );
//   };

// export default AllProductsPage;
"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@mui/material";
import Link from "next/link";
const AllProductsPage = ({ products, categories}:{products:any, categories:any}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  //const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>();
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const priceRanges = [
    { label: "$0 - $5", min: 0, max: 5 },
    { label: "$6 - $10", min: 6, max: 10 },
    { label: "$11 - $15", min: 11, max: 15 },
    { label: "$16 - $20", min: 16, max: 20 },
   
  ];

  const handleCategoryChange = (event:any) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };


  const handleRatingChange = (event:any) => {
    setSelectedRating(event.target.value);
  };

  const handlePriceRangeChange = (event:any) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPriceRanges((prev) => [...prev, value]);
    } else {
      setSelectedPriceRanges((prev) =>
        prev.filter((range) => range !== value)
      );
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const filteredProducts = products
    .filter((product:any) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.Category)
        : true
    )
    .filter((product:any) =>
      selectedRating ? product.Ratings >= selectedRating : true
    )
    .filter((product: any) =>
      selectedPriceRanges.length > 0
        ? selectedPriceRanges.some((range) => {
            const priceRange = priceRanges.find((r) => r.label === range);
            const min = priceRange?.min ?? 0;
            const max = priceRange?.max ?? Infinity;
            return product.Price >= min && product.Price <= max;
          })
        : true
    );
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <Container sx={{ display: "flex", paddingRight: "5%", marginTop: 4 }}>
      <Box sx={{ width: "20%" }}>
        <Typography variant="h6" paddingBottom={2}>
          Filters
        </Typography>

        {/* Categories Filter */}
        <Typography variant="subtitle1">Categories</Typography>
        <FormGroup>
          {categories.map((category:string) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  value={category}
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes(category)}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>

    

        {/* Rating Filter */}
  <Box sx={{
    borderRadius:"2px",
     }}>
  <Typography variant="subtitle1" paddingTop={2}>
          Rating
        </Typography>
        <FormGroup>
          {["4", "3", "2", "1"].map((rating) => (
            <FormControlLabel
              key={rating}
              control={
                <Checkbox
                  value={rating}
                  onChange={handleRatingChange}
                  checked={selectedRating === rating}
                />
              }
              label={`${rating} Stars & above`}
            />
          ))}
        </FormGroup>
  </Box>

        {/* Price Range Filter */}
        <Typography variant="subtitle1" paddingTop={2}>
          Price Range
        </Typography>
        <FormGroup>
          {priceRanges.map((range) => (
            <FormControlLabel
              key={range.label}
              control={
                <Checkbox
                  value={range.label}
                  onChange={handlePriceRangeChange}
                  checked={selectedPriceRanges.includes(range.label)}
                />
              }
              label={range.label}
            />
          ))}
        </FormGroup>
      </Box>
      <Box sx={{ width: "70%" }}>
        <Typography variant="h3" paddingBottom={2}>
          Our Collection of Products
        </Typography>
        <Typography component="p" color="GrayText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          cumque beatae fugit, veritatis optio provident animi pariatur est eius
          dolore.
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
          {visibleProducts.map((product:any) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                  <Link href={`\kitchen-cleaners\\${product._id}`}>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {visibleCount < filteredProducts.length && (
          <Box sx={{ textAlign: "center", marginBottom: 4 }}>
            <Typography component="p" my={2}>
              Showing {visibleCount} out of {filteredProducts.length}
            </Typography>
            <Button variant="contained" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default AllProductsPage;

