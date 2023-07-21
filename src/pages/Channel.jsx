import styles from "./Channel.module.css";

import Card from "../components/layout/Card";

//Imgs
import Globo from "../../public/video player/Channels/img/Globo.jpeg";
import SBT from "../../public/video player/Channels/img/SBT.png";
import Viva from "../../public/video player/Channels/img/Viva.jpg";
import Discovery from "../../public/video player/Channels/img/Discovery-Channel.jpg";
import Animal from "../../public/video player/Channels/img/Animal-Planet.png";
import Telecine from "../../public/video player/Channels/img/Telecine.jpg";
import ESPN from "../../public/video player/Channels/img/ESPN.png";
import Combate from "../../public/video player/Channels/img/Combate.png";
import Cartoon from "../../public/video player/Channels/img/Cartoon.png";
import Disney from "../../public/video player/Channels/img/Disney.jfif";

const Channel = () => {
  return (
    <section className={styles.container_channels}>
      <h1>Canais</h1>
      <div className={styles.container_list_channels}>
        <a href="https://cinexus-bobosp.netlify.app">
          <Card img={Globo} alt="Globo" name="Globo" />
        </a>
        <a href="https://cinexus-sbt.netlify.app">
          <Card img={SBT} alt="SBT" name="SBT" />
        </a>
        <a href="https://cinexus-viva.netlify.app">
          <Card img={Viva} alt="Viva" name="Viva" />
        </a>
        <a href="https://cinexus-discovery.netlify.app">
          <Card
            img={Discovery}
            alt="Discovery channel"
            name="Discovery channel"
          />
        </a>
        <a href="https://cinexus-animal-planet.netlify.app">
          <Card img={Animal} alt="Animal Planet" name="Animal Planet" />
        </a>
        <a href="https://cinexus-telecinepr.netlify.app">
          <Card img={Telecine} alt="Telecine Premium" name="Telecine Premium" />
        </a>
        <a href="https://cinexus-espn.netlify.app">
          <Card img={ESPN} alt="ESPN" name="ESPN" />
        </a>
        <a href="https://cinexus-combate.netlify.app">
          <Card img={Combate} alt="Combate" name="Combate" />
        </a>
        <a href="https://cinexus-cartoon.netlify.app">
          <Card img={Cartoon} alt="Cartoon" name="Cartoon" />
        </a>
        <a href="https://cinexus-disney.netlify.app">
          <Card img={Disney} alt="Disney" name="Disney" />
        </a>
      </div>
    </section>
  );
};

export default Channel;
