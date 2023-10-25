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
                <li><Link className="menu-link" to="Catalogo">Catalogo</Link></li>
                <li><Link className="menu-link" to="Informacion">Informacion</Link></li>
                <li><Link className="menu-link" to="Promos">Promos</Link></li>
                <li><Link className="menu-link" to="/productos/Auto">Autos</Link></li>
                <li><Link className="menu-link" to="/productos/Camioneta">Camionetas</Link></li>
                <li><Link className="menu-link" to="Carrito"><Cartwidget/></Link></li>
              </ul>
            </nav>
          </div>
    </header>

  )
}

