import style from "./style.module.css";
import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../Searchbar";

export function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to={"/home"}>
          <img src={logoImg} alt="siteLogo" className={style.img} />
        </Link>
        <SearchBar />
        <div className={style.links}>
          <Link to={"/home"}>
            <p>Home</p>
          </Link>
          <Link to={`/add-cromo`}>
            <p>Cadastrar Time</p>
          </Link>
          <Link to={`/about-us`}>
            <p>Sobre</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
