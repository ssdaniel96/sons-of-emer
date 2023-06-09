import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";
import axios from "axios";

export function execute(event) {
  event.preventDefault();
  const key = event.target.key.value;
  const message = event.target.message.value;
  const itaration = event.target.iterations.value;
  const saida = event.target.saida.value;
  const option = event.target.option.value;

  if (option == 1) {
    axios
      .get(
        `http://localhost:8000/trail-fence/encrypt/${message}/${key}/${itaration}`
      )
      .then((data) => {
        const field = document.getElementById("saida");
        field.value = data.data.value;
        const campo = document.getElementById("message");
        campo.value = "";
      });
  } else {
    axios
      .get(
        `http://localhost:8000/trail-fence/decrypt/${saida}/${key}/${itaration}`
      )
      .then((data) => {
        const field = document.getElementById("message");
        field.value = data.data.value;
        const campo = document.getElementById("saida");
        campo.value = "";
      });
  }
}

export default function cercaTrilho() {
  return (
    <>
      <Header content="Criptografia Cerca de Trilho" />
      <div className={styles.box}>
        <form onSubmit={execute} method="post">
          <div className={styles.content}>
            <div className={styles.fieldMessage}>
              <div className={styles.fieldMessage_title}>Mensagem</div>
              <input
                className={styles.fieldMessage_content}
                id="message"
                name="message"
                placeholder="Mensagem"
                pattern="[A-Za-z0-9\d ]+"
                title="Permitido apenas letras, números e espaços em branco"
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
              <input
                className={styles.fieldSaida_content}
                id="saida"
                name="saida"
                placeholder="criptografado"
              />
            </div>
          </div>
          <fieldset className={styles.checkbox}>
            <legend className={styles.checkbox_title}>Escolha sua opção</legend>
            <div>
              <label className={styles.checkbox_option}>Criptografar</label>
              <input
                type="radio"
                id="cript-option3"
                value="1"
                name="option"
                checked
              />
            </div>
            <div>
              <label className={styles.checkbox_option}>Descriptografar</label>
              <input
                type="radio"
                id="decrypt-option3"
                value="2"
                name="option"
              />
            </div>
          </fieldset>

          <button type="submit" className={styles.button}>
            Executar
          </button>
        </form>
      </div>
    </>
  );
}
