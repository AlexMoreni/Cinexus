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
      <div className={styles.container_list_channels}>
        <Card img={Globo} alt="Globo" name="Globo" />
        <Card img={SBT} alt="SBT" name="SBT" />
        <Card img={Viva} alt="Viva" name="Viva" />
        <Card
          img={Discovery}
          alt="Discovery channel"
          name="Discovery channel"
        />
        <Card img={Animal} alt="Animal Planet" name="Animal Planet" />
        <Card img={Telecine} alt="Telecine Premium" name="Telecine Premium" />
        <Card img={ESPN} alt="ESPN" name="ESPN" />
        <Card img={Combate} alt="Combate" name="Combate" />
        <Card img={Cartoon} alt="Cartoon" name="Cartoon" />
        <Card img={Disney} alt="Disney" name="Disney" />
      </div>
    </section>
  );
};

export default Channel;
