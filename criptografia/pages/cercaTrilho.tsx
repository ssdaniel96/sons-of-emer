import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";

export default function cercaTrilho() {
  return (
    <>
      <Header content="Criptografia Cerca de Trilho"/>
      <div className={styles.box}>
        <form action="/api/form" method="post">
          <div className={styles.content}>
            <div className={styles.fieldMessage}>
              <div className={styles.fieldMessage_title}>Mensagem</div>
              <textarea
                className={styles.fieldMessage_content}
                id="message"
                name="message"
                placeholder="Mensagem"
                rows={5}
              />
            </div>
            <div className={styles.middle}>
              <div className={styles.fieldPassword}>
                <div className={styles.fieldPassword_title}>Senha</div>
                <input
                  className={styles.fieldPassword_content}
                  type="number"
                  id="key"
                  name="key"
                  placeholder="Senha"
                  maxLength={7}
                  pattern="([0-9]{7})"
                />
              </div>
              <div className={styles.iteracao}>
                <div className={styles.iteracao_title}>Iterações</div>
                <input
                  className={styles.iteracao_content}
                  type="number"
                  min={1}
                  id="iterations"
                  name="iterations"
                />
              </div>
            </div>
            <div className={styles.fieldSaida}>
              <div className={styles.fieldSaida_title}>Criptografia</div>
              <textarea
                className={styles.fieldSaida_content}
                id="saida"
                name="saida"
                placeholder="criptografado"
                rows={5}
              />
            </div>
          </div>

          <button className={styles.button}>Criptografar</button>
        </form>
      </div>
    </>
  );
}
