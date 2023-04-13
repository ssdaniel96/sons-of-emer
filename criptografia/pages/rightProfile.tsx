import styles from "../styles/LeftProfile.module.scss";

export default function RightProfile(props) {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <p className={styles.content_name}>{props.name}</p>
        <p className={styles.content_curse}>{props.curse}</p>
      </div>
      <div className={styles.image}>
        <img src={props.img} className={styles.image_content}></img>
      </div>
    </div>
  );
}
