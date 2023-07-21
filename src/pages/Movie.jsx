import styles from "./Movie.module.css";
import Card from "../components/layout/Card";

//imgs
import Velozes from "../../public/video player/Movies/img/velozes.jpg";
import John from "../../public/video player/Movies/img/john.jfif";
import DrMatar from "../../public/video player/Movies/img/duro-de-matar.jfif";
import ToyStory from "../../public/video player/Movies/img/toy-story.jpg";
import Moana from "../../public/video player/Movies/img/moana.jpg";
import Smurf from "../../public/video player/Movies/img/smurf.jfif";
import GodzKong from "../../public/video player/Movies/img/godz-kong.jfif";
import Piratas from "../../public/video player/Movies/img/piratas.jfif";

const Movie = () => {
  return (
    <section className={styles.container_movies}>
      <h1>Filmes</h1>
      <div className={styles.container_list_movies}>
        <a href="https://cinexus-vlefur.netlify.app">
          <Card
            img={Velozes}
            alt="Velozes e furiosos 10"
            name="Velozes e furiosos 10"
          />
        </a>
        <a href="https://cinexus-johnwick.netlify.app">
          <Card img={John} alt="John Wick" name="John Wick" />
        </a>
        <a href="https://cinexus-ddmatar.netlify.app">
          <Card img={DrMatar} alt="Duro de matar" name="Duro de matar" />
        </a>
        <a href="https://cinexus-toystory4.netlify.app">
          <Card img={ToyStory} alt="Toy Story 4" name="Toy Story 4" />
        </a>
        <a href="https://cinexus-moana.netlify.app">
          <Card img={Moana} alt="Moana" name="Moana" />
        </a>
        <a href="https://cinexus-smurf.netlify.app">
          <Card img={Smurf} alt="Smurf" name="Smurf" />
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
    </section>
  );
};

export default Movie;
