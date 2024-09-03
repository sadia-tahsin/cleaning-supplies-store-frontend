import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../../../../public/png-transparent-check-mark-checkbox-computer-icons-symbol-tick-angle-hand-sign-thumbnail.png"
import { Container, Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
interface Params {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/kitchen-cleaners");
  const data = await res.json();
  return data.slice(0, 10).map((product: any) => ({
    productId: product._id,
  }));
};
const page = async ({ params }: Params) => {
  const res = await fetch(
    `http://localhost:5000/kitchen-cleaners/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const {Title,Images,Ratings,Description,Price} = await res.json();
  // Define a regex pattern or unwanted characters
  const unwantedPattern = /^[\s"]+$/;

  // Split Description into an array of lines and remove lines with unwanted characters
  const description = Description.split('.').filter((item:string) => 
    !unwantedPattern.test(item.trim()))
  const descriptionLines= description.filter((line:string )=> line !== '')
 
  return (
    <Container>
      <Stack direction="row" alignItems="center" margin= "5%" >
        <Box sx={{ width: "45%", marginRight: "5%" }}>
          <Image
            src={Images}
            width={500}
            height={500}
            alt="water"
            objectFit="cover"
          ></Image>
        </Box>
        <Box>
          <Typography variant="h4">{Title}</Typography>
          <Stack direction="row" alignItems="center" marginTop={2}>
            <Typography variant="h5" color="textSecondary">
              $ {Price}
            </Typography>
            <Typography variant="h4" color="GrayText">
              {" "}
              &nbsp;|&nbsp;
            </Typography>

            <Typography
              variant="h5"
              color="textSecondary"
              sx={{ marginRight: "8px" }}
            >
              Rating: {Ratings} out of 5
            </Typography>
          </Stack>
          <div className="border-b-2 border-gray-300 my-2"></div>
          <Typography variant="h5" color="textSecondary" marginBottom={5}>
             Description
             <ul style={{ paddingLeft: 0, listStyle: 'none' , marginTop: "20px"}}>
            {descriptionLines.map((item: string, index: number) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={icon} alt="tick" width={18} height={18} />
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: 1 }}
                  >
                    {item}
                  </Typography>
                </Box>
              </li>
            ))}
          </ul>
            </Typography>
           
        </Box>
      </Stack>
      
    </Container>
  );
};

export default page;
