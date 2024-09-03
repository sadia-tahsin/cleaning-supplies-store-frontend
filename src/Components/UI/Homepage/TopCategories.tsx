import { Container, Box, Typography, Grid, Card,
  CardMedia,
  CardContent,
  CardActions  } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const TopCategories = () => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h3"> Top Categories</Typography>
        <Typography component="p" marginTop={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          necessitatibus molestias hic magnam non quos fuga et officiis ullam
          perferendis. necessitatibus molestias hic magnam non quos fuga et
          officiis ullam perferendis
        </Typography>
      </Box>
   
  
    <div className="grid grid-cols-3 gap-4 my-12">
  {/* First Column */}
  <div className="flex flex-col gap-4">
    <div className="flex-1">
     
   <Link href="/kitchen-cleaners?Category=kitchen-brush">
     <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/brush11.png"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kitchen Cleaning Brush
          </Typography>
        </CardContent>
      </Card></Link>
    </div>
    <div className="flex-1">
      
   <Link href="/kitchen-cleaners?Category=kitchen-liquid">
      <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/liq4.jpg"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Liquid Soap
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  </div>

  {/* Second Column */}
  <div className="flex flex-col gap-4">
    <div className="flex-1">
     
   <Link href="/kitchen-cleaners?Category=kitchen-soap">
     <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/product-bathroombar-23-1.0-100x100.jpg"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kitchen Soap
          </Typography>
        </CardContent>
      </Card></Link>
    </div>
    <div className="flex-1">
      
   <Link href="/kitchen-cleaners?Category=kitchen-broom">
      <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/bm1.jpg"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kitchen broom
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  </div>

  {/* Third Column */}
  <div className="flex flex-col gap-4">
    <div className="flex-1">
     
   <Link href="/kitchen-cleaners?Category=kitchen-towel">
     <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/towel1.jpeg"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kitchen towel
          </Typography>
        </CardContent>
      </Card></Link>
    </div>
    <div className="flex-1">
      
   <Link href="/kitchen-cleaners?Category=kitchen-spray">
      <Card className="flex-1">
        <CardMedia
          component="img"
          image="/New folder/oil1.jpg"
          alt="soap"
          className="h-48" // Reduce height to balance overall column height
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Oil cleaners
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  </div>
</div>


    </Container>
  );
};

export default TopCategories;
