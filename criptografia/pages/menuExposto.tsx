import Link from "next/link";
import styles from "../styles/MenuExposto.module.scss";


export default function MenuExposto() {
  return (
  <nav className={styles.menuExposto}>
    <Link href="cifraCesar" className={styles.link}>Cifra de César</Link>
    <Link href="cifraVigenere" className={styles.link}>Cifra de Vigenère</Link>
    <Link href="cercaTrilho" className={styles.link}>Cerca de Trilho</Link>
    <Link href="cercaTrilho" className={styles.link}>Sobre Nós</Link>

  </nav>
  )
}
