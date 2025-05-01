import styles from "./Input.module.css";
import { type ComponentPropsWithoutRef } from "react";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
  el: "input";
} & ComponentPropsWithoutRef<"input">;

type TextareaFieldProps = {
  label: string;
  id: string;
  el: "textarea";
} & ComponentPropsWithoutRef<"textarea">;

function Input(props: InputFieldProps | TextareaFieldProps) {
  return (
    <div className={styles.input_container}>
      <label className={styles.input_label} htmlFor={props.id}>
        {props.label}
      </label>
      {props.el === "textarea" ? (
        <textarea className={styles.input} {...props} />
      ) : (
        <input className={styles.input} {...props} />
      )}
    </div>
  );
}

export default Input;
