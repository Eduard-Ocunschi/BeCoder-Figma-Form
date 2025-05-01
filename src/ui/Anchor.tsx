import { type ComponentPropsWithoutRef } from "react";
import styles from "./Anchor.module.css";

type AnchorProps = ComponentPropsWithoutRef<"a">;

function Anchor(props: AnchorProps) {
  return <a className={styles.anchor} {...props}></a>;
}

export default Anchor;
