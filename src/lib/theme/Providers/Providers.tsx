"use client"

import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import React from "react";

const Providers = ({children}:{children:React.ReactNode}) => {
    return  <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
     
    ;
};

export default Providers;