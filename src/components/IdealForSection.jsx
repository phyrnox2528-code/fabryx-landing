import {
  FileSpreadsheet,
  MessageCircleMore,
  PackageSearch,
  ClipboardClock,
  Check,
} from 'lucide-react'

import '../styles/ideal-for-section.css'


const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Archivos separados',
  },
  {
    icon: MessageCircleMore,
    title: 'Información por mensajes',
  },
  {
    icon: PackageSearch,
    title: 'Inventario poco claro',
  },
  {
    icon: ClipboardClock,
    title: 'Seguimiento manual',
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

        {/* Problemas principales */}
        <div className="ideal-problems">

          <span className="ideal-label">
            Ideal para
          </span>

          <h2>
            ¿Tu empresa todavía
            <span> trabaja así?</span>
          </h2>

          <div className="ideal-problem-grid">

            {problems.map((problem) => {
              const Icon = problem.icon

              return (
                <article
                  className="ideal-problem-card"
                  key={problem.title}
                >

                  <div className="ideal-problem-icon">
                    <Icon
                      size={21}
                      strokeWidth={2.4}
                    />
                  </div>

                  <h3>
                    {problem.title}
                  </h3>

                </article>
              )
            })}

          </div>


          <p className="ideal-problem-conclusion">
            <strong>
              FABRYX reúne estos procesos en un solo lugar
            </strong>

            <span>
              para que la información deje de estar dispersa.
            </span>
          </p>


          <p className="ideal-tagline">
            Menos archivos sueltos. Más control sobre tu operación.
          </p>

        </div>


        {/* Te resulta familiar */}
        <div className="ideal-current">

          <div className="ideal-current-text">

            <span>
              ¿Te resulta familiar?
            </span>

            <h2>
              Si tu operación depende de herramientas separadas,
              <strong> FABRYX puede ayudarte a organizarla.</strong>
            </h2>

            <p>
              FABRYX busca concentrar la información operativa para reducir
              la dependencia de procesos manuales y facilitar las consultas
              del día a día.
            </p>

          </div>


          <div className="ideal-checklist">

            {currentProblems.map((problem) => (
              <div
                className="ideal-check"
                key={problem}
              >

                <div className="ideal-check-icon">
                  <Check
                    size={16}
                    strokeWidth={3}
                  />
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