import styles from "./Home.module.css";

import Elementos from "../../public/video/elementos.mp4";

import { useEffect, useState } from "react";

const url = "http://localhost:5000/api/canais";

const Home = () => {
  const [canais, setCanais] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setCanais(data);
    } catch (error) {
      console.error("Houve algum erro inesperado!");
    }
  }

  console.log(canais);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <main className={styles.container_home}>
        <video src={Elementos} width="60%" controls autoPlay muted loop></video>
        <ul>
          {canais.map((canal) => (
            <li key={canal.id}>
              <iframe
                name="Player"
                src="https://sinalpublico.com/player3/ch.php?canal=agrandeconquista2"
                frameBorder="0"
                height="400"
                scrolling="no"
                width="640"
                allowfullscreen
              ></iframe>
              <h1>{canal.name}</h1>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Home;
