import React from "react";
import Layout from "../components/Layout/Layout";
import { BUSINESS, waLink } from "../data/business";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Contact = () => (
  <Layout>
    <div className="page-head-wrap">
      <div className="container page-head">
        <h1>Find Us</h1>
        <p>Call, WhatsApp or walk in. We are open {BUSINESS.hoursLabel}.</p>
      </div>
    </div>

    <section className="section">
      <div className="container visit">
        <div>
          <ul className="info-list">
            <li><PlaceIcon /><div><small>Address</small>{BUSINESS.address}</div></li>
            <li><ScheduleIcon /><div><small>Hours</small>{BUSINESS.hoursLabel}</div></li>
            <li>
              <CallIcon />
              <div>
                <small>Call</small>
                {BUSINESS.phones.map((p) => (
                  <div key={p}><a href={`tel:${p}`}>{p}</a></div>
                ))}
              </div>
            </li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn-wa" href={waLink("Hi Chicken Point!")} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            <a className="btn btn-flame" href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>
        <iframe
          className="map-frame"
          title="Chicken Point location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0373860082614!2d77.2788534!3d28.718428699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdfb9b86d735%3A0x873b4129a1d6fed6!2sChicken%20Point!5e0!3m2!1sen!2sin!4v1772124248308!5m2!1sen!2sin"
        />
      </div>
    </section>
  </Layout>
);

export default Contact;
