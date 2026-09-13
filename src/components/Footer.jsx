import {
  Mail,
  ArrowUp,
} from 'lucide-react'

import '../styles/footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* Parte principal */}
      <div className="footer-container">

        <div className="footer-main">

          {/* Marca */}
          <div className="footer-brand">

            <a
              href="#inicio"
              className="footer-logo"
            >
              FABRYX
            </a>

            <p>
              Plataforma web modular para negocios que necesitan organizar
              inventario, producción, órdenes y procesos internos desde un
              solo lugar.
            </p>

          </div>

          {/* Navegación */}
          <div className="footer-column">

            <h3>
              Navegación
            </h3>

            <nav>
              <a href="#inicio">
                Inicio
              </a>

              <a href="#solucion">
                Solución
              </a>

              <a href="#modulos">
                Módulos
              </a>

              <a href="#contacto">
                Contacto
              </a>
            </nav>

          </div>

          {/* Solución */}
          <div className="footer-column">

            <h3>
              FABRYX
            </h3>

            <div className="footer-list">
              <span>
                Inventario
              </span>

              <span>
                Producción
              </span>

              <span>
                Órdenes
              </span>

              <span>
                Seguimiento operativo
              </span>
            </div>

          </div>

          {/* Contacto */}
          <div className="footer-column">

            <h3>
              Contacto
            </h3>

            <div className="footer-contact">

              <a href="mailto:admin@fabryx.net" aria-label="Enviar correo a admin@fabryx.net">

                <Mail
                  size={17}
                  strokeWidth={2.3}
                />

                admin@fabryx.net

              </a>

            </div>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="footer-bottom">

          <p>
            © {currentYear} FABRYX. Todos los derechos reservados.
          </p>

          <p>
            Control, orden y claridad para tu operación.
          </p>

          <a
            href="#inicio"
            className="footer-top"
            aria-label="Volver al inicio"
          >
            <ArrowUp
              size={18}
              strokeWidth={2.5}
            />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer