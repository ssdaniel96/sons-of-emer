import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";


export function execute(event){
  event.prevent
  const key = event.target.key.value;


}

export default function cercaTrilho() {
  return (
    <>
      <Header content="Criptografia Cerca de Trilho"/>
      <div className={styles.box}>
        <form onSubmit={execute} method="post">
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
          <fieldset>
            <legend>Escolha sua opção</legend>
            <labeL>Criptografar</labeL>
            <input id='cript-option' value="1" name='option'></input>
            <labeL>Descriptografar</labeL>
            <input id='decrypt-option' value="2" name='option'></input>
          </fieldset>

          <button type="submit" className={styles.button}>Criptografar</button>
        </form>
      </div>
    </>
  );
}
