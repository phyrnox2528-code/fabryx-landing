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
      'Consulta materiales, producto terminado, movimientos y órdenes desde una misma plataforma.',
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
      'Mantén un registro más claro de órdenes, movimientos y avances dentro de la operación.',
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
            Cada módulo está pensado para separar la información según el área
            de trabajo, evitando mezclar procesos y facilitando las consultas
            del día a día.
          </p>

          <div className="solution-highlight">

            <div className="solution-highlight-icon">
              <Layers3 size={23} strokeWidth={2.5} />
            </div>

            <div>
              <h3>
                Un sistema modular
              </h3>

              <p>
                Puedes trabajar diferentes áreas de la operación sin perder
                una estructura clara y organizada.
              </p>
            </div>

          </div>

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