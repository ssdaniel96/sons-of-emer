import Link from "next/link";
import styles from "../styles/HomeHighlight.module.scss";

export default function HomeHighlight() {
  return (
    <div className={styles.box}>
      <div className={styles.highlight}>
        <div className={styles.img} />
        <p className={styles.title}>Cifra de César</p>
        <p className={styles.subtitle}>
          Em criptografia, a Cifra de César, também conhecida como cifra de
          troca, código de César ou troca de César, é uma das mais simples e
          conhecidas técnicas de criptografia.
        </p>
      </div>
      <div className={styles.highlight}>
        <div className={styles.img} />
        <p className={styles.title}>Cifra de Vigenère</p>
        <p className={styles.subtitle}>
          A cifra de Vigenère é um método de criptografia que usa uma série de
          diferentes cifras de César baseadas em letras de uma senha. Trata-se
          de uma versão simplificada de uma mais geral cifra de substituição
          polialfabética, inventada por Leon Battista Alberti cerca de 1465.
        </p>
      </div>
      <div className={styles.highlight}>
        <Link href="cercaTrilho" className={styles.link}>
          <div className={styles.img} />
          <p className={styles.title}>Cerca de Trilho</p>
          <p className={styles.subtitle}>
            Descrição do título de destauqe de contéudos com bastante veracidade
          </p>
        </Link>
      </div>
    </div>
  );
}
