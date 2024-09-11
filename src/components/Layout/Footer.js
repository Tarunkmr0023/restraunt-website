import React from "react";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": { fontSize: "50px", cursor: "pointer", mr: 2 },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <WhatsAppIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Chicken Point
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
