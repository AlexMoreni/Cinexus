import LinkNav from "../LinkNav";

import photoProfile from "../../../public/photo.png";
import home from "../../../public/home.png";
import channel from "../../../public/channel.png";
import movie from "../../../public/movie.png";

import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <div className={styles.profile}>
        <Link to="/">
          <h1>Cinexus</h1>
        </Link>
        <img src={photoProfile} alt="photo-profile" />
        <h3>Name</h3>
        <Link to="/admin">
          <span>Painel Admin</span>
        </Link>
      </div>
      <nav className={styles.container_Links}>
        <span>
          <LinkNav img={home} alt="" url="/" name="Home Page" />
        </span>
        <span>
          <LinkNav img={channel} alt="" url="/channels" name="Canais TV" />
        </span>
        <span>
          <LinkNav img={movie} alt="" url="/movies" name="Filmes" />
        </span>
      </nav>
    </aside>
  );
};

export default Navbar;
