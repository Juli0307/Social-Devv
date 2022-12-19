import styles from "./Header.module.css";
import sociallogo from "../assets/social-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={sociallogo} />
    </header>
  );
}
