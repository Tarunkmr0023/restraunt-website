import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import DishCard from "../components/DishCard";
import { CATEGORIES, MenuList, RotiMenuList } from "../data/data";
import { BUSINESS } from "../data/business";

const allItems = [...MenuList, ...RotiMenuList];

const Menu = () => {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? allItems : allItems.filter((d) => d.category === cat);

  return (
    <Layout>
      <div className="page-head-wrap">
        <div className="container page-head">
          <h1>The Menu</h1>
          <p>Choose Quarter, Half or Full, then order on WhatsApp or Zomato.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          <div className="note">
            <span>Free home delivery up to 1 km, minimum order &#8377;300</span>
            <a href={`tel:${BUSINESS.primaryPhone}`}>Call {BUSINESS.primaryPhone}</a>
          </div>

          <div className="tabs">
            {CATEGORIES.map((c) => (
              <button key={c} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>

          <div className="grid grid-3">
            {items.map((d) => <DishCard key={d.name} dish={d} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
