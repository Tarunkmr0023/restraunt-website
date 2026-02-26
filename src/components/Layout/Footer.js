import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "white",
        pt: 5,
        pb: 3,
        textAlign: "center",
        borderTop: "2px solid goldenrod",
        boxShadow: "0 2px 10px rgba(218,165,32,0.4)",
      }}
    >
      {/* Social Icons Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mb: 3,
        }}
      >
        {/* WhatsApp */}
        <Box
          component="a"
          href="https://wa.me/919211598030"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#1A1A19",
            p: 2,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#25D366",
              transform: "translateY(-5px)",
              boxShadow: "0 0 15px #25D366",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Box>

        {/* Instagram */}
        <Box
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#1A1A19",
            p: 2,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#E1306C",
              transform: "translateY(-5px)",
              boxShadow: "0 0 15px #E1306C",
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: 30 }} />
        </Box>

        {/* YouTube */}
        <Box
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#1A1A19",
            p: 2,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#FF0000",
              transform: "translateY(-5px)",
              boxShadow: "0 0 15px #FF0000",
            },
          }}
        >
          <YouTubeIcon sx={{ fontSize: 30 }} />
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "#333", mb: 2, mx: "20%" }} />

      {/* Footer Text */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem" },
          letterSpacing: 1,
        }}
      >
        © {new Date().getFullYear()} Chicken Point. All Rights Reserved.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "gray",
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        Made with ❤️ for Chicken Lovers
      </Typography>
    </Box>
  );
};

export default Footer;