import React from "react";
import { MenuList, RotiMenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {MenuList.map((menu) => (
                    <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ minHeight: "400px" }}
                                component={"img"}
                                src={menu.image}
                                alt={menu.name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom component={"div"}>
                                    {menu.name}
                                </Typography>
                                <Typography variant="body2">{menu.description}</Typography>
                                <Typography><b>Quarter: {menu.QuarterPrice}&emsp;&emsp;&emsp;Half: {menu.HalfPrice}&emsp;&emsp;&emsp;Full: {menu.FullPrice}</b></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                {RotiMenuList.map((menu) => (
                    <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ minHeight: "400px" }}
                                component={"img"}
                                src={menu.image}
                                alt={menu.name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom component={"div"}>
                                    {menu.name}
                                </Typography>
                                <Typography variant="body2">{menu.description}</Typography>
                                <Typography><b>Price: {menu.price} Rs. Per Piece</b></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Layout>
    );
};

export default Menu;