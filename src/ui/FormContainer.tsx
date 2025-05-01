import { type ComponentPropsWithRef } from "react";
import styles from "./FormContainer.module.css";

type FormProps = {} & ComponentPropsWithRef<"form">;

function FormContainer({ ...props }: FormProps) {
  return (
    <form className={styles.form} {...props}>
      {props.children}
    </form>
  );
}

export default FormContainer;
