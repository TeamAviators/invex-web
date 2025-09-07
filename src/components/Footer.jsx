import GithubIconButton from "./icon_buttons/GithubIconButton";
import InstaIconButton from "./icon_buttons/InstaIconButton";
import LinkedinIconButton from "./icon_buttons/LinkedinIconButton";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Team Aviators International.
        All rights reserved.
      </p>
      <p className={styles.quote}>
        Innovating Today, Flying Tomorrow |
        Built with ❤️ for Aerospace Excellence
      </p>
      <div className={styles.iconContainer}>
        <GithubIconButton />
        <InstaIconButton />
        <LinkedinIconButton />
      </div>
    </div>
  );
}

export default Footer;
