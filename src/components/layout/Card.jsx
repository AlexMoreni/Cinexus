import styles from "./Card.module.css";

const Card = ({ img, alt, name }) => {
  return (
    <div className={styles.container_card}>
      <img src={img} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
