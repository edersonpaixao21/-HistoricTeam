import { Card } from "../../components/Card";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import addBtnImg from "../../images/Add-Button.png";
import logoImg from "../../images/logo.png";

export function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/TheBestSoccerTeams"
        );

        setCards([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCards();
  }, []);

  return (
    <>
      <header className={style.headerHome}>
        <img src={logoImg} alt="logo" />
      </header>
      <main className={style.cards}>
        <Link to={"/add-cromo"}>
          <img className={style.addBtn} src={addBtnImg} alt="Add button" />
        </Link>
        {cards
          .slice(0)
          .reverse()
          .map((currentCard) => {
            return (
              <>
                <Link to={`/info-cromo/${currentCard._id}`}>
                  <Card
                    team={currentCard.team}
                    year={currentCard.year}
                    team_logo={currentCard.team_logo}
                  />
                </Link>
              </>
            );
          })}
      </main>
    </>
  );
}
