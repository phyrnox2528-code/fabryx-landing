import {
  Factory,
  PackageSearch,
  ClipboardList,
  Boxes,
  Workflow,
  Check,
} from 'lucide-react'

import '../styles/ideal-for-section.css'

const businessTypes = [
  {
    icon: Factory,
    title: 'Negocios de producción',
    description:
      'Empresas que fabrican, transforman o procesan productos y necesitan mayor control sobre su operación.',
  },
  {
    icon: PackageSearch,
    title: 'Negocios con inventario',
    description:
      'Operaciones que manejan materia prima, producto terminado y movimientos internos.',
  },
  {
    icon: ClipboardList,
    title: 'Negocios con órdenes',
    description:
      'Empresas que necesitan organizar pedidos, órdenes de trabajo o actividades de producción.',
  },
  {
    icon: Boxes,
    title: 'Procesos con materiales',
    description:
      'Operaciones donde es importante conocer qué materiales existen, cuánto se utiliza y qué hace falta.',
  },
  {
    icon: Workflow,
    title: 'Operaciones con varias áreas',
    description:
      'Negocios donde diferentes departamentos necesitan consultar y actualizar información relacionada.',
  },
]

const currentProblems = [
  'Uso constante de Excel para controlar la operación',
  'Información repartida entre diferentes archivos',
  'Seguimiento mediante grupos de WhatsApp',
  'Inventarios difíciles de consultar',
  'Órdenes que dependen de procesos manuales',
  'Información que depende demasiado de una sola persona',
]

function IdealForSection() {
  return (
    <section
      id="ideal-para"
      className="ideal-section"
    >
      <div className="ideal-container">

        {/* Encabezado */}
        <div className="ideal-heading">

          <span className="ideal-label">
            Ideal para
          </span>

          <h2>
            FABRYX puede ayudarte si tu operación
            <span> necesita más orden</span>
          </h2>

          <p>
            La plataforma está pensada para negocios que necesitan controlar
            materiales, inventario, órdenes y procesos internos de una forma
            más clara.
          </p>

        </div>

        {/* Tipos de negocio */}
        <div className="ideal-grid">

          {businessTypes.map((business) => {
            const Icon = business.icon

            return (
              <article
                className="ideal-card"
                key={business.title}
              >

                <div className="ideal-icon">
                  <Icon size={24} strokeWidth={2.4} />
                </div>

                <h3>
                  {business.title}
                </h3>

                <p>
                  {business.description}
                </p>

              </article>
            )
          })}

        </div>

        {/* Problemas actuales */}
        <div className="ideal-current">

          <div className="ideal-current-text">

            <span>
              ¿Te resulta familiar?
            </span>

            <h3>
              Especialmente útil si actualmente dependes de herramientas
              separadas para controlar tu negocio.
            </h3>

            <p>
              FABRYX busca concentrar la información operativa para reducir la
              dependencia de procesos manuales y facilitar las consultas del
              día a día.
            </p>

          </div>

          <div className="ideal-checklist">

            {currentProblems.map((problem) => (
              <div
                className="ideal-check"
                key={problem}
              >

                <div>
                  <Check size={16} strokeWidth={3} />
                </div>

                <span>
                  {problem}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default IdealForSection