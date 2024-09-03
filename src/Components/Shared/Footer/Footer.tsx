import { Box, Stack, Container, Typography } from "@mui/material";
import logo1 from "../../../../public/shefinds-logo 1.png";
import logo2 from "../../../../public/yahoo-news-img 1.png";
import logo3 from "../../../../public/Healthline-img 1.png";
import logo4 from "../../../../public/MSN-logo 1.png";
import Image from "next/image";
const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgba(102, 102, 102, 0.1)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={4}
          >
            <Image src={logo1} alt="logo" width={64} height={24} />
            <Image src={logo2} alt="logo" width={64} height={24} />
            <Image src={logo3} alt="logo" width={64} height={24} />
            <Image src={logo4} alt="logo" width={64} height={24} />
            <Image src={logo1} alt="logo" width={64} height={24} />
          </Stack>
        </Container>
      </Box>
      <Box
  sx={{
    backgroundColor: "rgba(61, 61, 61, 1)",
  }}
>
  <Container>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start" // Align to the top of each column
      spacing={4} // Add spacing between columns
      padding={4}
    >
      {/* Column 1 */}
      <Stack spacing={2}>
        <Typography sx={{ color: "rgba(154, 154, 154, 1)" }}>
          Products
        </Typography>
        <Typography sx={{ color: "white" }}>
          Lorem ipsum
        </Typography>
        <Typography sx={{ color: "white" }}>
          Lorem ipsum
        </Typography>
        <Typography sx={{ color: "white" }}>
          Lorem ipsum
        </Typography>
      </Stack>

      {/* Column 2 */}
      <Stack spacing={2}>
        <Typography sx={{ color: "rgba(154, 154, 154, 1)" }}>
          Legal Pages
        </Typography>
        <Typography sx={{ color: "white" }}>
          Lorem ipsum
        </Typography>
        <Typography sx={{ color: "white" }}>
          Lorem ipsum
        </Typography>
      </Stack>

      {/* Column 3 */}
      <Stack spacing={2}>
        <Typography sx={{ color: "rgba(154, 154, 154, 1)" }}>
          Company
        </Typography>
        <Typography sx={{ color: "white" }}>
          About Us
        </Typography>
        <Typography sx={{ color: "white" }}>
          Careers
        </Typography>
        <Typography sx={{ color: "white" }}>
          Blog
        </Typography>
      </Stack>

      {/* Column 4 */}
      <Stack spacing={2}>
        <Typography sx={{ color: "rgba(154, 154, 154, 1)" }}>
          Support
        </Typography>
        <Typography sx={{ color: "white" }}>
          Help Center
        </Typography>
        <Typography sx={{ color: "white" }}>
          Contact Us
        </Typography>
        <Typography sx={{ color: "white" }}>
          FAQs
        </Typography>
      </Stack>
    </Stack>
  </Container>
  <div className="border-b-[1px] border-dashed " color="white"></div>
<Box sx={{
    textAlign:"center",
    color:"white",
    margin:"10px 10px"
}}>
    <Typography>Copyright © 2023 Renew Bariatrics, Inc</Typography>
</Box>
</Box>

    </Box>
  );
};

export default Footer;
