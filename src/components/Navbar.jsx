import { Menu } from 'lucide-react'
import "../styles/navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar__inner">

                <div>
                    <span className="navbar__brand">
                        FABRYX
                    </span>
                </div>

                <div className="navbar__links">

                    <a
                        href="#inicio"
                        className="navbar__link"
                    >
                        Inicio
                    </a>

                    <a
                        href="#solucion"
                        className="navbar__link"
                    >
                        Solución
                    </a>

                    <a
                        href="#modulos"
                        className="navbar__link"
                    >
                        Módulos
                    </a>

                    <a
                        href="#como-funciona"
                        className="navbar__link"
                    >
                        Cómo funciona
                    </a>

                    <a
                        href="#ideal-para"
                        className="navbar__link"
                    >
                        Ideal para
                    </a>

                    <a
                        href="#contacto"
                        className="navbar__link"
                    >
                        Contacto
                    </a>

                </div>

                <div className="navbar__cta-wrapper">

                    <a
                        href="#contacto"
                        className="navbar__cta"
                    >
                        Solicitar demo
                    </a>

                </div>

                <button
                    type="button"
                    className="navbar__menu-button"
                    aria-label="Abrir menú"
                >
                    <Menu size={24} />
                </button>

            </nav>
        </header>
    )
}

export default Navbar