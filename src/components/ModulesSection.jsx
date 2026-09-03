import {
  Boxes,
  CalendarDays,
  ClipboardList,
  WalletCards,
  Route,
} from 'lucide-react'

import '../styles/modules-section.css'

const modules = [
  {
    icon: Boxes,
    title: 'Inventario',
    description:
      'Organiza materiales, existencias y movimientos de acuerdo con cada etapa de la operación.',
    items: [
      'Materia prima',
      'Producto terminado',
      'Material pigmentado',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Programación',
    description:
      'Organiza órdenes y actividades de producción para tener mayor claridad sobre el trabajo pendiente.',
    items: [
      'Planeación de órdenes',
      'Seguimiento de actividades',
      'Control de avances',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Órdenes',
    description:
      'Centraliza la información necesaria para consultar y dar seguimiento a las órdenes del negocio.',
    items: [
      'Información de pedidos',
      'Detalles de producción',
      'Seguimiento interno',
    ],
  },
  {
    icon: WalletCards,
    title: 'Finanzas y Tesorería',
    description:
      'Mantén organizada la información financiera relacionada con la operación interna.',
    items: [
      'Movimientos',
      'Saldos',
      'Consulta de información',
    ],
  },
  {
    icon: Route,
    title: 'Seguimiento',
    description:
      'Obtén una visión más clara del avance de diferentes procesos dentro de la operación.',
    items: [
      'Estado de procesos',
      'Trazabilidad',
      'Consulta de avances',
    ],
  },
]

function ModulesSection() {
  return (
    <section
      id="modulos"
      className="modules-section"
    >
      <div className="modules-container">

        {/* Encabezado */}
        <div className="modules-heading">

          <span className="modules-label">
            Módulos
          </span>

          <h2>
            Diferentes áreas.
            <span> Un mismo sistema.</span>
          </h2>

          <p>
            Explora los principales módulos de FABRYX y descubre cómo ayudan a
            organizar diferentes áreas de la operación.
          </p>

        </div>


        {/* Tarjetas */}
        <div className="modules-grid">

          {modules.map((module) => {
            const Icon = module.icon

            return (
              <article
                className="module-card"
                key={module.title}
                tabIndex="0"
              >

                {/* Vista normal */}
                <div className="module-card-front">

                  <div className="module-icon">
                    <Icon
                      size={46}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3>
                    {module.title}
                  </h3>

                  <span className="module-more">
                    Ver información
                  </span>

                </div>


                {/* Información al pasar el cursor */}
                <div className="module-card-overlay">

                  <h3>
                    {module.title}
                  </h3>

                  <p>
                    {module.description}
                  </p>

                  <ul>
                    {module.items.map((item) => (
                      <li key={item}>
                        <span></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ModulesSection