import {
    FileSpreadsheet,
    MessageCircleMore,
    PackageSearch,
    ClipboardClock,
} from 'lucide-react'

import '../styles/problem-section.css'

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

function ProblemSection() {
    return (
        <section
            id="problema"
            className="problem-section"
        >
            <div className="problem-container">

                <div className="problem-heading">
                    <h2>
                        ¿Tu empresa todavía
                        <span> trabaja así?</span>
                    </h2>
                </div>

                <div className="problem-grid">

                    {problems.map((problem) => {
                        const Icon = problem.icon

                        return (
                            <article
                                className="problem-card"
                                key={problem.title}
                            >
                                <div className="problem-icon">
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

                <p className="problem-conclusion">
                    <strong>
                        FABRYX reúne estos procesos en un solo lugar
                    </strong>

                    <span>
                        para que la información deje de estar dispersa.
                    </span>
                </p>

                <p className="problem-tagline">
                    Menos archivos sueltos. Más control sobre tu operación.
                </p>

            </div>
        </section>
    )
}

export default ProblemSection