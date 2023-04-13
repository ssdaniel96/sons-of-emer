import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";
import axios from "axios";

export function execute(event) {
  event.preventDefault();
  const key = event.target.key.value;
  const message = event.target.message.value;
  const saida = event.target.saida.value;
  const option = event.target.option.value;

  if (option == 1) {
    axios
      .get(`http://localhost:8000/cipher-of-caesar/encrypt/${message}/${key}`)
      .then((data) => {
        console.log(data)
        const field = document.getElementById("saida");
        field.value = data.data.value;
        const campo = document.getElementById("message");
        campo.value = "";
      });
  } else {
    axios
      .get(`http://localhost:8000/cipher-of-caesar/decrypt/${saida}/${key}`)
      .then((data) => {
        const field = document.getElementById("message");
        field.value = data.data.value;
        const campo = document.getElementById("saida");
        campo.value = "";
      });
  }
}

export default function cifraCesar() {
  return (
    <>
      <Header content="Criptografia Cifra de César" />
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
                  type="text"
                  id="key"
                  name="key"
                  placeholder="Senha"
                  pattern="[A-Za-z0-9\d ]+"
                  title="Permitido apenas letras, números e espaços em branco"
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
            <label className={styles.checkbox_option}>Criptografar</label>
            <input
              type="radio"
              id="cript-option3"
              value="1"
              name="option"
              checked
            />
            <label className={styles.checkbox_option}>Descriptografar</label>
            <input type="radio" id="decrypt-option3" value="2" name="option" />
          </fieldset>

          <button type="submit" className={styles.button}>
            Executar
          </button>
        </form>
      </div>
    </>
  );
}
