import {
  BadgeCheck,
  Wrench,
  MessageSquareText,
  ArrowRight,
} from 'lucide-react'

import '../styles/project-status-section.css'

const statusItems = [
  {
    icon: BadgeCheck,
    title: 'Módulos en funcionamiento',
    description:
      'FABRYX ya cuenta con áreas desarrolladas para el control de inventario, materiales, órdenes y otros procesos internos.',
  },
  {
    icon: Wrench,
    title: 'Desarrollo continuo',
    description:
      'La plataforma continúa creciendo con nuevas funciones y mejoras de acuerdo con las necesidades reales de operación.',
  },
  {
    icon: MessageSquareText,
    title: 'Validación con negocios',
    description:
      'Buscamos conocer procesos reales para identificar oportunidades de mejora y adaptar la solución cuando sea necesario.',
  },
]

function ProjectStatusSection() {
  return (
    <section className="status-section">
      <div className="status-container">

        <div className="status-box">

          {/* Información principal */}
          <div className="status-info">

            <span className="status-label">
              Estado actual
            </span>

            <h2>
              FABRYX continúa creciendo junto con
              <span> necesidades reales de operación</span>
            </h2>

            <p>
              Actualmente FABRYX se encuentra en etapa de desarrollo y
              validación, con módulos funcionales enfocados en mejorar el
              control interno de negocios que manejan inventario, producción,
              materiales y órdenes.
            </p>

            <p>
              Estamos buscando empresas interesadas en conocer la plataforma,
              revisar una demostración y conversar sobre los procesos que
              necesitan controlar mejor.
            </p>

            <a href="#contacto">
              Solicitar una demostración
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>

          </div>

          {/* Tarjetas */}
          <div className="status-items">

            {statusItems.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="status-item"
                  key={item.title}
                >

                  <div className="status-icon">
                    <Icon size={22} strokeWidth={2.4} />
                  </div>

                  <div>
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>
                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectStatusSection