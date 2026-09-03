import {
  Search,
  Boxes,
  ClipboardList,
  Activity,
  LayoutDashboard,
} from 'lucide-react'

import '../styles/how-it-works-section.css'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Consulta la información',
    description:
      'Busca materiales, productos, órdenes y datos necesarios desde una misma plataforma.',
  },
  {
    number: '02',
    icon: Boxes,
    title: 'Revisa existencias',
    description:
      'Consulta qué materiales o productos están disponibles antes de continuar con la operación.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Relaciona órdenes y procesos',
    description:
      'Organiza la información necesaria para cada orden y los procesos relacionados con ella.',
  },
  {
    number: '04',
    icon: Activity,
    title: 'Registra movimientos',
    description:
      'Mantén un seguimiento más claro de movimientos, avances y cambios dentro de la operación.',
  },
  {
    number: '05',
    icon: LayoutDashboard,
    title: 'Consulta todo desde un solo lugar',
    description:
      'Obtén una visión más organizada del negocio sin depender de múltiples archivos separados.',
  },
]

function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="how-section"
    >
      <div className="how-container">

        {/* Encabezado */}
        <div className="how-heading">

          <span className="how-label">
            Cómo funciona
          </span>

          <h2>
            Una operación más clara
            <span> paso a paso</span>
          </h2>

          <p>
            FABRYX ayuda a organizar la información diaria para que consultar,
            registrar y dar seguimiento a los procesos sea más sencillo.
          </p>

        </div>

        {/* Pasos */}
        <div className="how-steps">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                className="how-step"
                key={step.number}
              >

                <div className="how-step-top">

                  <span className="how-number">
                    {step.number}
                  </span>

                  <div className="how-icon">
                    <Icon size={23} strokeWidth={2.4} />
                  </div>

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </article>
            )
          })}

        </div>

        {/* Mensaje final */}
        <div className="how-message">

          <span>
            De la consulta al seguimiento
          </span>

          <strong>
            Toda la información dentro de una misma plataforma.
          </strong>

        </div>

      </div>
    </section>
  )
}

export default HowItWorksSection