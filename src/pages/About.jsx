import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../images/ChickenTandoori.jpg";

const About = () => (
  <Layout>
    <div className="page-head-wrap">
      <div className="container page-head">
        <h1>Our Story</h1>
        <p>A neighbourhood chicken joint in North East Delhi.</p>
      </div>
    </div>

    <section className="section">
      <div className="container about-grid">
        <img src={Banner} alt="Tandoori chicken at Chicken Point" />
        <div className="about-text">
          <p>
            A hidden gem in North East Delhi for chicken lovers. We serve the <b>best Tandoori Chicken</b> in the area,
            charcoal roasted for tenderness and juiciness.
          </p>
          <p>
            Have it with soft tandoori roti, crisp laccha onions and mint chutney. The menu also has <b>Chicken Tikka,
            Fried Chicken and Chicken Changezi</b>, each cooked with care.
          </p>
          <p>
            Whether you eat chicken every day or just love bold flavours, we hope you leave with a full stomach and a
            reason to come back.
          </p>
          <div className="signoff">Taste the Tradition. Feel the Flavor.</div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
