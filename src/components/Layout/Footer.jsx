import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS, waLink } from "../../data/business";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="foot-grid">
        <div>
          <h4>Chicken Point</h4>
          <p>Charcoal tandoori, rich curries and kebabs, served hot in Karawal Nagar, Delhi.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Find Us</Link></li>
            <li><a href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">Order on Zomato</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit / Call</h4>
          <ul>
            <li>{BUSINESS.address}</li>
            <li>Open {BUSINESS.hoursLabel}</li>
            <li><a href={`tel:${BUSINESS.primaryPhone}`}>{BUSINESS.primaryPhone}</a></li>
            <li><a href={waLink("Hi Chicken Point!")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="copy">&copy; {new Date().getFullYear()} Chicken Point. Taste the Tradition.</div>
    </div>
  </footer>
);

export default Footer;
