import React, { useState } from "react";
import Logo from "../imgs/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="header-box">
        <header className="container">
          <Link to={"/"}>
            <div className="logo-box">
              <img src={Logo} alt="" />
              <span>Blackhero</span>
            </div>
          </Link>
          <nav className={nav ? "active-nav" : ""}>
            <ul>
              <li onClick={() => setNav(!nav)}>
                <Link to={"/movie"}>Filmlar</Link>
              </li>
              <li onClick={() => setNav(!nav)}>
                <Link to={"/tv"}>TV Shows</Link>
              </li>
              <li onClick={() => setNav(!nav)} className="suggest">
                <Link to={"/suggest"}>
                  Bizga qo'shilish
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </li>
            </ul>
            <div onClick={() => setNav(!nav)} className="close">
              <i class="bx bx-x"></i>
            </div>
          </nav>
          <div onClick={() => setNav(!nav)} className="menu ">
            <i class="bx bx-menu"></i>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
