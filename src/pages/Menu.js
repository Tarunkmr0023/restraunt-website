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
  Divider,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 4,
          mb: 4,
          px: { xs: 2, sm: 0 },
        }}
      >
        {MenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%",
              },
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              borderRadius: 3,
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea sx={{ flexGrow: 1 }}>
              <CardMedia
                component="img"
                src={menu.image}
                alt={menu.name}
                sx={{
                  height: 220,
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {menu.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "gray", mb: 2 }}
                >
                  {menu.description}
                </Typography>

                <Divider sx={{ mb: 1 }} />

                {/* Styled Prices */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                    color: "#e23744",
                  }}
                >
                  <Typography variant="body2">
                    Quarter ₹{menu.QuarterPrice}
                  </Typography>
                  <Typography variant="body2">
                    Half ₹{menu.HalfPrice}
                  </Typography>
                  <Typography variant="body2">
                    Full ₹{menu.FullPrice}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

        {RotiMenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%",
              },
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              borderRadius: 3,
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea sx={{ flexGrow: 1 }}>
              <CardMedia
                component="img"
                src={menu.image}
                alt={menu.name}
                sx={{
                  height: 220,
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {menu.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "gray", mb: 2 }}
                >
                  {menu.description}
                </Typography>

                <Divider sx={{ mb: 1 }} />

                {/* Styled Price */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#e23744",
                    fontSize: "16px",
                  }}
                >
                  ₹{menu.price} Per Piece
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;