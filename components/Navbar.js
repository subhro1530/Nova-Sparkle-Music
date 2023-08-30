import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css"; // Import the styles from Home.module.css
import Link from "next/link";
import Image from "next/image";

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
        <Image src="full.png" alt="Your Logo" className={styles.logo} />{" "}
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
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/tracks">Tracks</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <ul className={styles.socialLinks}>
          <li>
            <Link href="#">
              <i class="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
