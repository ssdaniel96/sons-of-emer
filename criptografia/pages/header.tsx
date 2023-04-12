import Link from "next/link";
import styles from "../styles/Header.module.scss";
export default function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header_title}>{props.content}</h1>
        <Link href="./" className={styles.header_home}>
          <img className={styles.header_img} src="/casa.png" alt="Home"/>
        </Link>
      </div>
    </>
  );
}
