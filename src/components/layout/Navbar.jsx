import photoProfile from "../../../public/photo.png";
import LinkNav from "../LinkNav";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <div className={styles.profile}>
        <h1>Cinexus</h1>
        <img src={photoProfile} alt="photo-profile" />
        <h3>Name</h3>
        <span>
          <LinkNav url="/admin" name="Painel admin" />
        </span>
      </div>
      <nav className={styles.container_Links}>
        <span>
          <LinkNav img="s" alt="" url="/" name="Home Page" />
        </span>
        <span>
          <LinkNav img="s" alt="" url="/channels" name="Canais TV" />
        </span>
        <span>
          <LinkNav img="s" alt="" url="/movies" name="Filmes" />
        </span>
      </nav>
    </aside>
  );
};

export default Navbar;
