import { Link } from "react-router-dom";
import styles from "./LinkNav.module.css";

const LinkNav = ({ img, alt, url, name }) => {
  return (
    <div className={styles.row_Link}>
      <img src={img} alt={alt} />
      <Link to={url}>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default LinkNav;
