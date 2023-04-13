import styles from "../styles/CercaTrilho.module.scss";
import Header from "./header";
import axios from "axios"


export function execute(event){
  event.preventDefault()
  const key = event.target.key.value;
  const message = event.target.message.value
  const saida = event.target.saida.value
  const option = event.target.option.value

  if (option == 1){
    axios.get(`http://localhost:8000/cipher-vigenere/encrypt/${message}/${key}`).then(data => {
      const field = document.getElementById('saida')
      field.value = data.data.value
    })
  } else {
    axios.get(`http://localhost:8000/cipher-vigenere/decrypt/${saida}/${key}`).then(data => {
      const field = document.getElementById('message')
      field.value = data.data.value
    })
  }


}


export default function cifraVigenere() {
  return (
    <>
      <Header content="Criptografia Cifra de Vigenère" />
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
                  type="text"
                  id="key"
                  name="key"
                  placeholder="Senha"
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
            <label>Criptografar</label>
            <input type="radio" id="cript-option" value="1" name="option" checked/>
            <label>Descriptografar</label>
            <input type="radio" id="decrypt-option" value="2" name="option"/>
          </fieldset>
          <button type="submit" className={styles.button}>Executar</button>
        </form>
      </div>
    </>
  );
}
