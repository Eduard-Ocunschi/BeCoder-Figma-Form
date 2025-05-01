import styles from "./Checkbox.module.css";
import { type ComponentPropsWithoutRef } from "react";

type CheckboxProps = {
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Checkbox({ children, id, ...props }: CheckboxProps) {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        {...props}
      ></input>
      <label className={styles.label_checkbox} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
