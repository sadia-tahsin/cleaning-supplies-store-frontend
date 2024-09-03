import Sidebar from "@/Components/Shared/Sidebar/Sidebar";
import {Box} from "@mui/material"
const layout = ({children}: {children:React.ReactNode}) => {
    return (
        <Box sx={{display:"flex"}}>
            <Sidebar></Sidebar>
                {children}
        </Box>
    );
};

export default layout;