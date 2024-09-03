import { Container, Stack, Typography} from "@mui/material";
import logo from "../../../../public/New folder/unnamed.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between" alignItems="center"  sx={{
               zIndex:1,
               fontWeight:"800px"
            }}>
        <Link href='/'>
        <Image src={logo} alt="logo" height={48} width={56}></Image>
        </Link>
        {/* <Typography>Name</Typography>  */}
        <Stack direction="row"  gap={4} sx={{ flexGrow: 1, justifyContent: 'center' }} >
                <Typography component={Link} href="/">Home</Typography>
                <Typography component={Link} href="/kitchen-cleaners">Products</Typography>
                <Typography component={Link} href="/flash-sale">Flashsale</Typography>
                <Typography component={Link} href="/dashboard">DashBoard</Typography>
                
               </Stack>
            </Stack>
    </Container>
  )
}
