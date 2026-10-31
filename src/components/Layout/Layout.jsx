import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { BUSINESS, waLink } from "../../data/business";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <div className="mobile-bar">
      <a href={`tel:${BUSINESS.primaryPhone}`}><CallIcon fontSize="small" />Call</a>
      <a className="wa" href={waLink("Hi Chicken Point, I want to place an order.")} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon fontSize="small" />WhatsApp
      </a>
      <a className="zomato" href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">
        <DeliveryDiningIcon fontSize="small" />Zomato
      </a>
    </div>
  </>
);

export default Layout;
