import style from "./style.module.css";
import cartaImg from "../../images/Ederson.png";
import github from "../../images/GitHub icon.png";
import linkedin from "../../images/linkedin icon.png";

export function AboutUs() {
  return (
    <div className={style.infoPage}>
      <main className={style.infos}>
        <div className={style.infosTitle}>
          <h1>Sobre nós</h1>
        </div>

        <div className={style.infosAbout}>
          <div className={style.infosText}>
            <p>
              Fiz o uso de bibliotecas como React.js e React Hot Toast com
              base em Javascript, HTML e CSS.
            </p>
            <p>
              O objetivo do projeto é criar um banco dados que pode ser
              atualizado e editado por usuários.
            </p>
            <p>
              Esse banco de dados armazena informações sobre os maiores times do
              futebol brasileiro.
            </p>
            <p>
              Se não encontrou o seu esquadrão favorito, sinta-se à vontade para
              adicioná-lo.
            </p>
            <p>
              {" "}
              Código do projeto:{" "}
              <a
                classname={style.linkStyle}
                style={{ textDecoration: "none", color: "#965083" }}
                href="https://github.com/IgorALopes/historic-soccer-teams"
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui
              </a>
            </p>
          </div>

          <h2 className={style.ourTitle}>Criador</h2>
          <div className={style.ourInfosContainer}>
            <div className={style.ourInfos}>
              <h3>Ederson Paixão</h3>
              <img className={style.ourCromo} src={cartaImg} alt="max-cromo" />
              <div className={style.ourLinks}>
                <a
                  href="https://github.com/edersonpaixao21"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img className={style.img} src={github} alt="giticon" />
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={style.btn}>
                    <img
                      className={style.img}
                      src={linkedin}
                      alt="linkdinicon"
                    />
                  </button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
