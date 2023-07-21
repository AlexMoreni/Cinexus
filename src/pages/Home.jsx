import styles from "./Home.module.css";

import Card from "../components/layout/Card";

//Canais de TV
import Globo from "../../public/video player/Channels/img/Globo.jpeg";
import Animal from "../../public/video player/Channels/img/Animal-Planet.png";
import Combate from "../../public/video player/Channels/img/Combate.png";
import Disney from "../../public/video player/Channels/img/Disney.jfif";

//Filmes
import Velozes from "../../public/video player/Movies/img/velozes.jpg";
import ToyStory from "../../public/video player/Movies/img/toy-story.jpg";
import Piratas from "../../public/video player/Movies/img/piratas.jfif";
import GodzKong from "../../public/video player/Movies/img/godz-kong.jfif";

const Home = () => {
  return (
    <section>
      <main className={styles.container_home}>
        <div className={styles.container_textHome}>
          <h1>Cinexus</h1>
          <p>Conectando você ao universo cinematográfico</p>
        </div>
        <div className={styles.box_content}>
          <h2>Canais TV</h2>
          <div className={styles.container_listHome}>
            <a href="https://cinexus-bobosp.netlify.app">
              <Card img={Globo} alt="Globo" name="Globo" />
            </a>
            <a href="https://cinexus-combate.netlify.app">
              <Card img={Combate} alt="Combate" name="Combate" />
            </a>
            <a href="https://cinexus-disney.netlify.app">
              <Card img={Disney} alt="Disney" name="Disney" />
            </a>
            <a href="https://cinexus-animal-planet.netlify.app">
              <Card img={Animal} alt="Animal Planet" name="Animal Planet" />
            </a>
          </div>
        </div>
        <div className={styles.box_content}>
          <h2>Filmes</h2>
          <div className={styles.container_listHome}>
            <a href="https://cinexus-vlefur.netlify.app">
              <Card
                img={Velozes}
                alt="Velozes e furiosos 10"
                name="Velozes e furiosos 10"
              />
            </a>
            <a href="https://cinexus-toystory4.netlify.app">
              <Card img={ToyStory} alt="Toy Story 4" name="Toy Story 4" />
            </a>
            <a href="https://cinexus-kdzvskng.netlify.app">
              <Card img={GodzKong} alt="GodzKong" name="Godzilla vs Kong" />
            </a>
            <a href="https://cinexus-piratas-caribe.netlify.app">
              <Card
                img={Piratas}
                alt="Piratas do Caribe"
                name="Piratas do Caribe"
              />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
