import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"; // Import the styles from Home.module.css

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <nav className={`${styles.navbar} ${navbarActive ? styles.active : ""}`}>
      <div className={styles.navbarLeft}>
        <img src="full.png" alt="Your Logo" className={styles.logo} />{" "}
        {/* Replace with your logo image path */}
      </div>
      <div className={styles.navbarToggle} onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </div>
      <div
        className={`${styles.navbarMiddle} ${
          navbarActive ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.navbarLinks} ${
            navbarActive ? styles.active : ""
          }`}
        >
          <li className={styles.navLink}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navLink}>
            <a href="/about">About</a>
          </li>
          <li className={styles.navLink}>
            <a href="/tracks">Tracks</a>
          </li>
          <li className={styles.navLink}>
            <a href="/contact">Contact</a>
          </li>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
