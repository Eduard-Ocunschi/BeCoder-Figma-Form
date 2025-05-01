import { type ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button">;

function Button(props: ButtonProps) {
  return <button className={styles.btn} {...props}></button>;
}

export default Button;
