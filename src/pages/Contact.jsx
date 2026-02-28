import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";

const Contact = () => {
  return (
    <Layout>
      {/* Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Contact Our Restaurant
        </Typography>

        {/* Underline */}
        <Box
          sx={{
            width: "70px",
            height: "4px",
            backgroundColor: "#e23744",
            mx: "auto",
            mt: 1,
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Contact Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 4,
          my: 6,
          px: 3,
        }}
      >
        {/* Call Card */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            flex: 1,
            textAlign: "center",
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 8,
            },
          }}
        >
          <CallIcon sx={{ fontSize: 45, color: "green", mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Call Us
          </Typography>
          <Typography>9211598030</Typography>
          <Typography>9990417352</Typography>
          <Typography>9711893786</Typography>
        </Paper>

        {/* Address Card */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            flex: 1,
            textAlign: "center",
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 8,
            },
          }}
        >
          <HomeIcon sx={{ fontSize: 45, color: "red", mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Our Address
          </Typography>
          <Typography>
            Main Shiv Vihar Tiraha, Near Anil Sweets,
            Shiv Vihar, Karawal Nagar, Delhi - 110094
          </Typography>
        </Paper>

        {/* Map Card */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            flex: 1,
            textAlign: "center",
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 8,
            },
          }}
        >
          <MapIcon sx={{ fontSize: 45, color: "skyblue", mb: 2 }} />
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Find Us
          </Typography>
          <a
            href="https://maps.app.goo.gl/NkZuQC8YATq42a547"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#e23744",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            View on Google Maps
          </a>
        </Paper>
      </Box>

      {/* Embedded Google Map */}
      <Box
        sx={{
          px: { xs: 2, md: 10 },
          mb: 8,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0373860082614!2d77.2788534!3d28.718428699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdfb9b86d735%3A0x873b4129a1d6fed6!2sChicken%20Point!5e0!3m2!1sen!2sin!4v1772124248308!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "15px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chicken Point Location"
        ></iframe>
       </Box>
    </Layout>
  );
};

export default Contact;