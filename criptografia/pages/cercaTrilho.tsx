import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";

export default function cercaTrilho() {
  return (
    <>
      <Header content="Cerca de Trilho" />
      <div className={styles.box}>
        <form action="/api/form" method="post">
          <div className={styles.field}>
            <div className={styles.fieldItem}>
              <div className={styles.fieldTitle}>Mensagem</div>
              <textarea
                className={styles.fieldContent}
                id="message"
                name="message"
                placeholder="Mensagem"
                rows={5}
              />
            </div>
            <div>
              <div className={styles.fieldTitle}>Senha</div>
              <input
                className={styles.fieldContent}
                type="text"
                id="key"
                name="key"
                placeholder="Senha"
                maxLength={7}
                pattern="([0-9]{7})"
              />
            </div>
            <div>
              <div className={styles.fieldTitle}>Saida</div>
              <textarea
                className={styles.fieldContent}
                id="saida"
                name="saida"
                placeholder="criptografado"
                rows={5}
              />
            </div>
          </div>
          <div className={styles.iteracao}>
            <h3>Iterações</h3>
            <input
              className={styles.iteracaoField}
              type="number"
              min={1}
              id="iterations"
              name="iterations"
            />
          </div>
          <button className={styles.button}>Criptografar</button>
        </form>
      </div>
    </>
  );
}
