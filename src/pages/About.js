import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Divider } from "@mui/material";
import Banner from "../images/ChickenFeast.png"; // You can change image

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
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
          Welcome to Chicken Point
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

      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          px: 2,
        }}
      >
        <Box
          component="img"
          src={Banner}
          alt="Chicken Point"
          sx={{
            width: { xs: "100%", md: "70%" },
            height: "300px",
            objectFit: "cover",
            borderRadius: 4,
            boxShadow: 5,
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          mt: 6,
          mb: 10,
          px: 3,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.8,
            fontSize: "1.1rem",
            color: "#444",
          }}
        >
          A hidden gem nestled in North East Delhi that promises a culinary delight for all chicken lovers. At our restaurant, we proudly serve the <b style={{ color: "#e23744" }}>best Tandoori Chicken</b> in the area, charcoal roasted to perfection for unmatched tenderness and juiciness.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.8,
            fontSize: "1.1rem",
            color: "#444",
          }}
        >
          Enjoy it with soft Tandoori Roti, crisp Laccha Onions, and refreshing Mint Chutney — a combination that creates a heavenly dining experience. Our menu also features mouthwatering <b style={{ color: "#e23744" }}>Chicken Tikka, Fried Chicken, and Chicken Changezi</b>, each prepared with passion and authentic flavors.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: "1.1rem",
            color: "#444",
          }}
        >
          At Chicken Point, every dish is crafted with dedication to deliver rich taste and quality. Whether you're a devoted non-vegetarian or exploring bold flavors, we promise a dining experience that keeps you coming back for more.
        </Typography>

        <Divider sx={{ mt: 5 }} />

        {/* Closing Statement */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: 4,
            fontWeight: "bold",
            color: "#e23744",
          }}
        >
          Taste the Tradition. Feel the Flavor.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;