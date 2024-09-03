import React from "react";
import FlashSalePage from "../../../Components/UI/FlashSalePage/FlashSalePage";



const FlashSaleServer = async () => {
  // Fetch flash sale products
  const res = await fetch("http://localhost:5000/flash-sale",{
    cache:"no-store"
  });
  const data = await res.json();

  return <FlashSalePage products={data} />;
};

export default FlashSaleServer;
