import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.jpeg"

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} className={styles.image} />
        <div>
          <p className={styles.title}>Invex</p>
          <p className={styles.discription}>Inventory of TAI</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/analytics" 
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Analytics
        </NavLink>
        <NavLink 
          to="/news" 
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          News
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
