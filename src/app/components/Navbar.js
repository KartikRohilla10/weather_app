// components/Navbar.js
import Link from "next/link";
import styles from "./Nav.module.css";

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
            <b style={{ color: "white" }}>Whats Weather !</b>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/services" passHref>
            Services
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    {/* <footer className={styles.footer}>Designed by [Your Name]</footer> */}
  </div>
);

export default Navbar;
