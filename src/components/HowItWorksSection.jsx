import {
  FilePlus2,
  ClipboardPlus,
  PackageSearch,
  CalendarClock,
  UserRoundCheck,
  ReceiptText,
  BadgeDollarSign,
  BarChart3,
} from 'lucide-react'

import '../styles/how-it-works-section.css'

const steps = [
  {
    number: '01',
    icon: FilePlus2,
    title: 'Alta de información esencial',
    description:
      'Registra la información necesaria para comenzar a trabajar.',
  },
  {
    number: '02',
    icon: ClipboardPlus,
    title: 'Levantar órdenes',
    description:
      'Captura las órdenes y los datos necesarios.',
  },
  {
    number: '03',
    icon: PackageSearch,
    title: 'Explosión de material',
    description:
      'Consulta y calcula los materiales necesarios para cada orden.',
  },
  {
    number: '04',
    icon: CalendarClock,
    title: 'Programación de inyección',
    description:
      'Organiza las órdenes de acuerdo con la producción.',
  },
  {
    number: '05',
    icon: UserRoundCheck,
    title: 'Asignación de trabajo',
    description:
      'Asigna las actividades entre las áreas de operación.',
  },
  {
    number: '06',
    icon: ReceiptText,
    title: 'Notas contables',
    description:
      'Registra y consulta información relacionada con movimientos contables.',
  },
  {
    number: '07',
    icon: BadgeDollarSign,
    title: 'Nómina',
    description:
      'Organiza los pagos del personal para mantener un mejor control.',
  },
  {
    number: '08',
    icon: BarChart3,
    title: 'Reportes',
    description:
      'Consulta información resumida para revisar resultados y dar seguimiento.',
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
            De la información inicial
            <span> al seguimiento final</span>
          </h2>

          <p>
            FABRYX conecta diferentes etapas de la operación para mantener
            la información organizada durante todo el proceso.
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
                    Paso {step.number}
                  </span>

                  <div className="how-icon">
                    <Icon
                      size={25}
                      strokeWidth={2.3}
                    />
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

       

      </div>
    </section>
  )
}

export default HowItWorksSection