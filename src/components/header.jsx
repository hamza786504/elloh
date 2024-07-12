import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',            // default
      animateClass: 'animate__animated', // default
      offset: 0,                 // default
      mobile: true,              // default
      live: true                 // default
    });
    wow.init();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav id="navigation" className={`wow animate__animated animate__fadeInUp ${scrolled ? "bg-black" : ""}`}>
        <div className="wrapper">
          <Link
            id="nav-logo"
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img style={{width: "60px" , height: "60px" , maxHeight: "60px"}} src="./images/logo.webp" alt="logo" />
            
          </Link>
          <div className={`menu ${menu ? "display expanded" : ""}`}>
            <ul className="menu-links">
              <li>
                <Link to="/" className={scrolled ? "text-white" : ""}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={scrolled ? "text-white" : ""}>About</Link>
              </li>
              <li>
                <Link to="/contact" className={scrolled ? "text-white" : ""}>Contact</Link>
              </li>
            </ul>
            <button className={`questionare ${scrolled ? "text-white border-white" : "text-black"}`}>Get Started</button>
          </div>
          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            className="open-menu"
            onClick={() => { setMenu(!menu) }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20H30"
                stroke={`${scrolled ? "#ffffff" : "#000000"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H30"
                stroke={`${scrolled ? "#ffffff" : "#000000"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28L30 28"
                stroke={`${scrolled ? "#ffffff" : "#000000"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {menu ? (
            <button
            aria-expanded="true"
            aria-label="Fechar menu"
            onClick={() => { 
              setMenu(!menu); 
            }}
            className={`close-menu ${menu && "display expanded"}`}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L10 30M10 10L30 30"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          ) : ""}
        </div>
      </nav>
    </>
  );
}

export default Header;
