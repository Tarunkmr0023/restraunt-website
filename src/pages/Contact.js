import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography, TableHead, TableBody, TableContainer, Table, TableRow, TableCell, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from "@mui/icons-material/Call";
import MapIcon from '@mui/icons-material/Map';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                my: 10,
                textAlign: "center",
                p: 3,
                "& h4": {
                    fontWeight: "bold",
                },
                ".mapLink": {
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "#000"
                },
                ".mapLink:hover": {
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    transition: "0.3s ease-in",
                    color: "blue"
                },
                "@media (max-width:600px)": {
                    width: "300px",
                    textAlign: "center",
                    "& h4": {
                        m: "auto",
                        fontSize: "1.5rem"
                    }
                }
            }}>
                <Typography variant="h4">Contact Our Restaurant</Typography>
            </Box>
            <Box
                sx={{
                    m: 3,
                    width: "95%",
                    my: 5,
                    "@media (max-width:600px)": {
                        width: "90%",
                    },
                }}
            >
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{ bgcolor: "black", color: "white", textAlign: "center" }}
                                    colSpan={2}
                                >
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> Mobile
                                </TableCell>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <b>9211598030, 9990417352</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <HomeIcon sx={{ color: "red", pt: 1 }} /> Address
                                </TableCell>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <b>Main Shiv Vihar Tiraha, Near Anil Sweets, Shiv Vihar, Karawal Nagar, Delhi - 110094</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <MapIcon sx={{ color: "skyblue", pt: 1 }} /> Google Map
                                </TableCell>
                                <TableCell sx={{ textAlign: "left" }}>
                                    <b><Link to={"https://maps.app.goo.gl/NkZuQC8YATq42a547"} target="_blank" className="mapLink">Chicken Point</Link></b>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    );
};

export default Contact;
