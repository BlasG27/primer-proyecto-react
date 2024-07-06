import "./main.css";

function Header() {
    return (
        <header>
            <nav>
                <ul className="navBar">
                    <li className="navbar__item"><a href="https://www.youtube.com/">Inicio</a></li>
                    <li className="navbar__item"><a href="">Productos</a></li>
                    <li className="navbar__item"><a href="">Sobre Nosotros</a></li>
                    <li className="navbar__item"><a href="">Contactos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;