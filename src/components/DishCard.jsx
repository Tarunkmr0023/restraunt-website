import React, { useState } from "react";
import { BUSINESS, waLink } from "../data/business";

const SIZES = [
  ["Quarter", "QuarterPrice"],
  ["Half", "HalfPrice"],
  ["Full", "FullPrice"],
];

const DishCard = ({ dish }) => {
  const [size, setSize] = useState(1);
  const hasSizes = dish.QuarterPrice !== undefined;
  const price = hasSizes ? dish[SIZES[size][1]] : dish.price;
  const label = hasSizes ? `${SIZES[size][0]} ${dish.name}` : dish.name;

  const message = `Hi Chicken Point, I'd like to order: 1 x ${label} (Rs ${price}).`;

  return (
    <article className="dish">
      <div className="dish-img">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        {dish.tag && <span className="badge">{dish.tag}</span>}
      </div>
      <div className="dish-body">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>

        {hasSizes && (
          <div className="sizes">
            {SIZES.map(([name], i) => (
              <button key={name} className={i === size ? "on" : ""} onClick={() => setSize(i)}>
                {name}
              </button>
            ))}
          </div>
        )}

        <div className="price-row">
          <span className="price">&#8377;{price}</span>
          {!hasSizes && <small>per piece</small>}
        </div>

        <div className="dish-actions">
          <a className="btn btn-wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-flame" href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">
            Zomato
          </a>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
