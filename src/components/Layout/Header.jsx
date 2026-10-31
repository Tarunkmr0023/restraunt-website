import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { BUSINESS } from "../../data/business";

const links = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/about", "Our Story"],
  ["/contact", "Find Us"],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const cls = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" />
          <span>Chicken <b>Point</b></span>
        </Link>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={open ? "nav open" : "nav"} onClick={() => setOpen(false)}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={cls}>
              {label}
            </NavLink>
          ))}
          <a className="btn btn-flame btn-sm" href={BUSINESS.zomato} target="_blank" rel="noopener noreferrer">
            Order on Zomato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
