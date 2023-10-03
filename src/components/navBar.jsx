import Cartwidget from "./Cartwidget"
import "./components.css"
import { Link } from "react-router-dom"


export const NavBar = () => {

  return (
    <header>
          <div className="nav-container">
            <nav className="navbar">
            <Link to="/" className="logo"><h1>HERBOX</h1></Link>
              <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/catalogo">Catalogo</Link></li>
                <li><Link className="menu-link" to="/informacion">Informacion</Link></li>
                <li><Link className="menu-link" to="/promos">Promos</Link></li>
              </ul>
              <a className="cartWidget" href="./Cartwidget"> <Cartwidget/> </a>
            </nav>
          </div>
    </header>

  )
}

