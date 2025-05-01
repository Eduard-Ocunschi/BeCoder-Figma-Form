import ContactForm from "../features/contact/ContactForm";
import Header from "../features/header/Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <section className={styles.container_main}>
      <div className={styles.container_left}>
        <Header />
        <ContactForm />
      </div>
      <div className={styles.container_right}>
        <img
          src="../../public/img/form-img.png"
          alt="Image of a fresh salad dish with a fresher oringe juce next to half sliced orange."
          decoding="async"
        ></img>
      </div>
    </section>
  );
}

export default AppLayout;
