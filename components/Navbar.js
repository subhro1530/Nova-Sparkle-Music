import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Music App</div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/search">Search</Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
}

export default Navbar;
