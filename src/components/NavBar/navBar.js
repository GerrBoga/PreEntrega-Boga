import Cartwidget from "./Cartwidget"
import "../components.css"


export const NavBar = () => {

  return (
    <header>
          <div className="nav-container">
            <nav className="navbar">
              <h1 href="/#" className="logo-nav"> <a href="./inicio">Herbox</a> </h1>
              <h2 className="Promos"> <a href="./promos">Promos.</a> </h2>
              <h2 className="sobreMi"> <a href="./informacion">Informacion.</a> </h2>
              <h2 className="Catalogo"> <a href="./catalogo">Catalogo.</a> </h2>
              <a className="cartWidget" href="./Cartwidget"> <Cartwidget/> </a>
            </nav>
          </div>
    </header>

  )
}

