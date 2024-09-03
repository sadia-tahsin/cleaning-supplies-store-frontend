'use client'

import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import image from "../../../../public/2147917183.jpg"
import image2 from "../../../../public/New folder/Kitchen-Counters-6-copy.jpg"
import image3 from "../../../../public/New folder/oil2.jpg"
import image4 from "../../../../public/New folder/brush11.png"
import image5 from "../../../../public/New folder/oil1.jpg"
import image6 from "../../../../public/New folder/brush11.png"

const NextArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius: '50%',  zIndex: 2 , backgroundColor:"gray"}}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  borderRadius: '50%',  zIndex: 2, backgroundColor:"gray"}}
      onClick={onClick}
    />
  );
};

const data = [
  {
    id:1,
    img:image },
  {
    id:2,
    img:image2 },
  {
    id:3,
    img:image3 },
  {
    id:4,
    img:image4 },
    {
      id:5,
      img:image5 },
      {
        id:6,
        img:image6 },

   
]

const HeroSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
    
    sx={{
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "relative",
      //top: "-100px",
      //zIndex: -1,
      textAlign: "center",
      paddingTop: "40px",
      paddingBottom: "80px",
      alignItems: "center",
      justifyContent: "center",
    //  color: "white",
    }}
  >
    <Typography variant="h3">Crafting Comfort, Redefining Spaces.</Typography>
    <Typography variant="h4">Your Home, Your Signature Style!</Typography>
    <Typography
      component="p"
      textAlign="center"
      sx={{
        padding: "20px 220px",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus
      modi pariatur est velit quidem rem corporis voluptate ratione! Qui iste
      fuga magni assumenda explicabo, suscipit velit aperiam tempore labore voluptates
      quis nemo soluta fugit cumque asperiores rem voluptate accusamus esse quia pariatur.
    </Typography>
  
    <Box sx={{ margin: "20px 150px", position: "relative"}}>
      <Slider {...settings}>
      {data.map((item, index) => (
          <Box key={index} sx={{padding:"10px"}}>
            <Card key={index} sx={{ margin: "10px 10px" }}>
              
                {/* <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={`Slide ${index + 1}`}
                /> */}
                <Box sx={{height: 300, position: "relative" }}>
                  <Image
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Slide {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a description for slide {index + 1}.
                  </Typography>
                </CardContent> */}
             
            </Card>
            </Box>
          ))
   }
      </Slider>
    </Box>
  </Box>
  
  );
};

export default HeroSection;
