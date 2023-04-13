import styles from "../styles/LeftProfile.module.scss";

export default function LeftProfile(props) {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img src={props.img} className={styles.image_content}></img>
      </div>
      <div className={styles.content}>
          <p className={styles.content_name}>{props.name}</p>
          <p className={styles.content_curse}>{props.curse}</p>
      </div>
    </div>
  )
}