import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const page = async() => {
    const res = await fetch("http://localhost:5000/kitchen-cleaners", {
        cache: "no-store"
    });
    const data = await res.json();

    return (
        <Box sx={{width:"80%"}}>
            <Box sx={{ backgroundColor: "lightgray", textAlign: "end", padding: "10px", width: "100%", margin: "0 auto" }}>
                <Typography variant="h6" sx={{ width: "100%" }}>
                    Admin
                </Typography>
            </Box>
            <TableContainer component={Paper} sx={{ margin: "50px auto", width: "80%" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((product: any) => (
                            <TableRow key={product._id}>
                                <TableCell component="th" scope="row">
                                    {product.Title}
                                </TableCell>
                                <TableCell align="right">{product.Price}</TableCell>
                                <TableCell align="right">{product.Ratings}</TableCell>
                                <TableCell align="right">{product.Category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default page;
