import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DishCard from "../components/DishCard";
import Banner from "../images/ChickenFeast.png";
import { MenuList, REVIEWS } from "../data/data";
import { BUSINESS, getStatus } from "../data/business";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Reveal from "../components/Reveal";

const ribbonItems = ["Charcoal Tandoori", "Butter Chicken", "Chicken Tikka", "Seekh Kebab", "Free Delivery up to 1 km", "Open 6 PM - 11 PM", "Closed Tuesdays"];

const Home = () => {
  const status = getStatus();
  const signature = MenuList.filter((d) => d.tag === "Bestseller" || d.tag === "Chef Pick");

  return (
    <Layout>
      <section className="hero" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="container">
          <div>
            <div className={status.open ? "status open" : "status"}>
              <i /> {status.text} &middot; Karawal Nagar
            </div>
            <h1>Smoky chicken,<br /><em>served hot.</em></h1>
            <p className="lead">
              Tandoori chicken roasted over charcoal, butter chicken that begs for roti, and kebabs straight off the skewer.
            </p>
            <div className="hero-actions">
              <a className="btn btn-flame" href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">
                Order on Zomato
              </a>
              <a className="btn btn-ghost" href={`tel:${BUSINESS.primaryPhone}`}>
                <CallIcon fontSize="small" /> Call now
              </a>
            </div>
          </div>
          <div className="hero-chips">
            <div className="chip"><LocalFireDepartmentIcon /><div><b>Charcoal tandoor</b><small>Smoky, juicy, made fresh</small></div></div>
            <div className="chip"><DeliveryDiningIcon /><div><b>Free delivery</b><small>Within 1 km, min order Rs 300</small></div></div>
            <div className="chip"><ScheduleIcon /><div><b>6 PM to 11 PM</b><small>Closed on Tuesdays</small></div></div>
          </div>
        </div>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div>
          {[...ribbonItems, ...ribbonItems, ...ribbonItems, ...ribbonItems].map((t, i) => (
            <span key={i}>{t} &bull;</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Customer favourites</p>
            <h2 className="section-title">What everyone orders</h2>
            <p className="section-sub">Pick a portion and order in one tap on WhatsApp or Zomato.</p>
          </Reveal>
          <div className="grid grid-3">
            {signature.map((d, i) => <Reveal key={d.name} delay={i * 0.1}><DishCard dish={d} /></Reveal>)}
          </div>
          <p style={{ marginTop: 36 }}>
            <Link className="btn btn-dark" to="/menu">See full menu</Link>
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow">Why Chicken Point</p>
          <h2 className="section-title">Made the slow way</h2>
          <div className="grid features" style={{ marginTop: 36 }}>
            <div className="feature"><div className="num">01</div><h3>Charcoal roasted</h3><p>Our tandoori and tikka cook over real charcoal for that smoky, juicy bite.</p></div>
            <div className="feature"><div className="num">02</div><h3>Fresh masala</h3><p>Marinades and gravies are prepared in-house with whole spices.</p></div>
            <div className="feature"><div className="num">03</div><h3>Free delivery</h3><p>Free home delivery within 1 km on orders of Rs 300 and above.</p></div>
            <div className="feature"><div className="num">04</div><h3>Evening only</h3><p>We open 6 PM to 11 PM (closed Tuesdays), so everything you get is cooked fresh that evening.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <p className="eyebrow">How to order</p>
          <h2 className="section-title">Hungry in 3 steps</h2>
          <div className="grid steps" style={{ marginTop: 30 }}>
            <div className="step"><div className="num">1</div><h3>Pick your dish</h3><p>Browse the menu and choose Quarter, Half or Full.</p></div>
            <div className="step"><div className="num">2</div><h3>Order your way</h3><p>Tap WhatsApp, order on Zomato, or just call us.</p></div>
            <div className="step"><div className="num">3</div><h3>Eat it hot</h3><p>Dine in at Shiv Vihar or get free delivery within 1 km.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {REVIEWS.length > 0 && (
            <div className="grid grid-3" style={{ marginBottom: 36 }}>
              {REVIEWS.map((r) => (
                <div className="quote" key={r.name}>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <b>{r.name}</b>
                </div>
              ))}
            </div>
          )}
          <div className="review-cta">
            <div>
              <h2>Tried us already?</h2>
              <p>See ratings and reviews from real customers on Zomato.</p>
            </div>
            <a className="btn btn-flame" href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">
              View on Zomato
            </a>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container visit">
          <div>
            <p className="eyebrow">Come hungry</p>
            <h2 className="section-title">Visit us</h2>
            <ul className="info-list">
              <li><PlaceIcon /><div><small>Address</small>{BUSINESS.address}</div></li>
              <li><ScheduleIcon /><div><small>Hours</small>{BUSINESS.hoursLabel}</div></li>
              <li><CallIcon /><div><small>Call</small>{BUSINESS.phones.map((p) => (<React.Fragment key={p}><a href={`tel:${p}`}>{p}</a> </React.Fragment>))}</div></li>
            </ul>
            <a className="btn btn-flame" href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">Get directions</a>
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
};

export default Home;
