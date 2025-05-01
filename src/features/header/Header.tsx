import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hero_title}>
        Let's eat healthy <br /> food and <span>stay fit.</span>
      </h1>
      <p className={styles.hero_text}>
        <span>Send what you eat, and get</span>
        <span> your fitness plan.</span>
      </p>
    </header>
  );
}

export default Header;
