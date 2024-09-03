import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import logo from "../../../../public/New folder/unnamed.png";
import Link from "next/link";
const Sidebar = () => {
  return (
    <Box className="bg-neutral-800 min-h-screen" sx={{ width: "20%" }}>
      <Box sx={{ margin: "10px" }}>
        <Link href="/">
          <Image src={logo} alt="logo" height={48} width={48}></Image>
        </Link>
      </Box>
      <Box
        sx={{ margin: "20px 10px", padding: "10px", backgroundColor: "gray" }}
      >
        <Link href="/dashboard/all-products">All Products</Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
