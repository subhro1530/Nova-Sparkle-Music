import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import MusicSearch from "../components/MusicSearch";

function Home() {
  const [showLetters, setShowLetters] = useState([]);

  useEffect(() => {
    const heading = document.getElementById("typewriter-heading");
    const letters = heading.querySelectorAll("span");

    letters.forEach((letter, index) => {
      setTimeout(() => {
        setShowLetters((prevShowLetters) => [...prevShowLetters, index]);
      }, 100 * index);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nova Sparkle Music</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 id="typewriter-heading" className={styles.typewriterHeading}>
            <span
              style={{ display: showLetters.includes(0) ? "inline" : "none" }}
            >
              D
            </span>
            <span
              style={{ display: showLetters.includes(1) ? "inline" : "none" }}
            >
              i
            </span>
            <span
              style={{ display: showLetters.includes(2) ? "inline" : "none" }}
            >
              s
            </span>
            <span
              style={{ display: showLetters.includes(3) ? "inline" : "none" }}
            >
              c
            </span>
            <span
              style={{ display: showLetters.includes(4) ? "inline" : "none" }}
            >
              o
            </span>
            <span
              style={{ display: showLetters.includes(5) ? "inline" : "none" }}
            >
              v
            </span>
            <span
              style={{ display: showLetters.includes(6) ? "inline" : "none" }}
            >
              e
            </span>
            <span
              style={{ display: showLetters.includes(7) ? "inline" : "none" }}
            >
              r
            </span>
            <span
              style={{ display: showLetters.includes(8) ? "inline" : "none" }}
            >
              {" "}
            </span>
            <span
              style={{ display: showLetters.includes(9) ? "inline" : "none" }}
            >
              y
            </span>
            <span
              style={{ display: showLetters.includes(10) ? "inline" : "none" }}
            >
              o
            </span>
            <span
              style={{ display: showLetters.includes(11) ? "inline" : "none" }}
            >
              u
            </span>
            <span
              style={{ display: showLetters.includes(12) ? "inline" : "none" }}
            >
              r
            </span>
            <span
              style={{ display: showLetters.includes(13) ? "inline" : "none" }}
            >
              {" "}
            </span>
            <span
              style={{ display: showLetters.includes(14) ? "inline" : "none" }}
            >
              f
            </span>
            <span
              style={{ display: showLetters.includes(15) ? "inline" : "none" }}
            >
              a
            </span>
            <span
              style={{ display: showLetters.includes(16) ? "inline" : "none" }}
            >
              v
            </span>
            <span
              style={{ display: showLetters.includes(17) ? "inline" : "none" }}
            >
              o
            </span>
            <span
              style={{ display: showLetters.includes(18) ? "inline" : "none" }}
            >
              u
            </span>
            <span
              style={{ display: showLetters.includes(19) ? "inline" : "none" }}
            >
              r
            </span>
            <span
              style={{ display: showLetters.includes(20) ? "inline" : "none" }}
            >
              i
            </span>
            <span
              style={{ display: showLetters.includes(21) ? "inline" : "none" }}
            >
              t
            </span>
            <span
              style={{ display: showLetters.includes(22) ? "inline" : "none" }}
            >
              e
            </span>
            <span
              style={{ display: showLetters.includes(23) ? "inline" : "none" }}
            >
              {" "}
            </span>
            <span
              style={{ display: showLetters.includes(24) ? "inline" : "none" }}
            >
              m
            </span>
            <span
              style={{ display: showLetters.includes(25) ? "inline" : "none" }}
            >
              u
            </span>
            <span
              style={{ display: showLetters.includes(26) ? "inline" : "none" }}
            >
              s
            </span>
            <span
              style={{ display: showLetters.includes(27) ? "inline" : "none" }}
            >
              i
            </span>
            <span
              style={{ display: showLetters.includes(28) ? "inline" : "none" }}
            >
              c
            </span>
            <span
              style={{ display: showLetters.includes(29) ? "inline" : "none" }}
            >
              .
            </span>
            <span
              style={{ display: showLetters.includes(30) ? "inline" : "none" }}
            >
              .
            </span>
            <span
              style={{ display: showLetters.includes(31) ? "inline" : "none" }}
            >
              .
            </span>
          </h1>
          <p>Search, listen, and enjoy.</p>
        </div>
      </section>
      <MusicSearch/>
      {/* Rest of your content */}
    </div>
  );
}

export default Home;
