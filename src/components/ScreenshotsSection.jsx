import {
  Boxes,
  Palette,
  CalendarDays,
  Maximize2,
} from 'lucide-react'

import '../styles/screenshots-section.css'

const screenshots = [
  {
    icon: Boxes,
    title: 'Inventario',
    description:
      'Consulta materiales, existencias, movimientos y productos desde una interfaz clara y organizada.',
    image: null,
  },
  {
    icon: Palette,
    title: 'Material pigmentado',
    description:
      'Relaciona colores, órdenes y cantidades necesarias dentro del proceso de pigmentación.',
    image: null,
  },
  {
    icon: CalendarDays,
    title: 'Programación',
    description:
      'Consulta y organiza órdenes, avances y actividades relacionadas con la producción.',
    image: null,
  },
]

function ScreenshotsSection() {
  return (
    <section className="screenshots-section">
      <div className="screenshots-container">

        {/* Encabezado */}
        <div className="screenshots-heading">

          <span className="screenshots-label">
            Conoce FABRYX
          </span>

          <h2>
            Una interfaz diseñada para
            <span> trabajar todos los días</span>
          </h2>

          <p>
            FABRYX organiza cada área dentro de módulos claros para que la
            información sea fácil de consultar y utilizar durante la operación.
          </p>

        </div>

        {/* Capturas */}
        <div className="screenshots-list">

          {screenshots.map((screenshot, index) => {
            const Icon = screenshot.icon

            return (
              <article
                className={`screenshot-item ${
                  index % 2 !== 0 ? 'screenshot-reverse' : ''
                }`}
                key={screenshot.title}
              >

                {/* Información */}
                <div className="screenshot-info">

                  <div className="screenshot-icon">
                    <Icon size={24} strokeWidth={2.4} />
                  </div>

                  <span className="screenshot-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {screenshot.title}
                  </h3>

                  <p>
                    {screenshot.description}
                  </p>

                </div>

                {/* Ventana */}
                <div className="screenshot-preview">

                  <div className="screenshot-browser">

                    {/* Barra superior */}
                    <div className="screenshot-browser-top">

                      <div className="screenshot-browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="screenshot-browser-title">
                        FABRYX / {screenshot.title}
                      </div>

                      <Maximize2
                        size={16}
                        strokeWidth={2.2}
                      />

                    </div>

                    {/* Imagen / Placeholder */}
                    <div className="screenshot-browser-content">

                      {screenshot.image ? (
                        <img
                          src={screenshot.image}
                          alt={`Pantalla de ${screenshot.title} en FABRYX`}
                        />
                      ) : (
                        <div className="screenshot-placeholder">

                          <Icon
                            size={38}
                            strokeWidth={2}
                          />

                          <strong>
                            Captura de {screenshot.title}
                          </strong>

                          <p>
                            Aquí colocaremos una pantalla real del sistema.
                          </p>

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ScreenshotsSection