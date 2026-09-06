import {
  Boxes,
  ClipboardCheck,
  Layers3,
  SearchCheck,
  Workflow,
} from 'lucide-react'

import '../styles/solution-section.css'

const benefits = [
  {
    icon: Boxes,
    title: 'Información centralizada',
    description:
      'Consulta materiales, procesos, movimientos, órdenes e inventario desde un mismo lugar.',
  },
  {
    icon: SearchCheck,
    title: 'Mayor claridad',
    description:
      'Encuentra la información que necesitas sin depender de múltiples archivos o conversaciones.',
  },
  {
    icon: ClipboardCheck,
    title: 'Mejor seguimiento',
    description:
      'Mantén un registro más claro de órdenes, movimientos y avances en procesos de producción.',
  },
  {
    icon: Workflow,
    title: 'Procesos más ordenados',
    description:
      'Organiza diferentes áreas del negocio dentro de módulos separados pero conectados.',
  },
]

function SolutionSection() {
  return (
    <section id="solucion" className="solution-section">
      <div className="solution-container">

        {/* Información principal */}
        <div className="solution-info">

          <span className="solution-label">
            La solución
          </span>

          <h2>
            Una sola plataforma para tener una visión más clara de tu operación
          </h2>

          <p className="solution-main-text">
            FABRYX centraliza la información operativa de tu negocio para que
            puedas consultar inventario, materiales, órdenes y procesos desde
            un mismo lugar.
          </p>

          <p className="solution-secondary-text">
            "Cada vista está pensada está pensada para separar la información según el área
            de trabajo, evitando mezclar procesos y facilitando las consultas
            del día a día.
          </p>


        </div>

        {/* Beneficios */}
        <div className="solution-benefits">

          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                className="solution-card"
                key={benefit.title}
              >

                <div className="solution-card-icon">
                  <Icon size={23} strokeWidth={2.4} />
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default SolutionSection