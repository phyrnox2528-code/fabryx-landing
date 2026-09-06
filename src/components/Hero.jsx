import { ArrowRight } from 'lucide-react'

import '../styles/hero.css'

function Hero() {
    return (
        <section
            id="inicio"
            className="hero"
        >
            <div className="hero__background">
                <img
                    src="/images/hero-fabryx.jpg"
                    alt=""
                />

                <div className="hero__image-blue"></div>
                <div className="hero__image-fade"></div>
            </div>

            <div className="hero__inner">
                <div className="hero__content">
                   
                    <h1>
                        Controla inventario, producción y órdenes desde{' '}
                        <span>un solo lugar</span>
                    </h1>

                    <p className="hero__description">
                        FABRYX ayuda a negocios de producción a organizar materiales,
                        producto terminado, movimientos, órdenes y seguimiento interno
                        desde una plataforma clara y centralizada.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="#contacto"
                            className="hero__primary"
                        >
                            Solicitar demo
                            <ArrowRight
                                size={18}
                                strokeWidth={2.5}
                            />
                        </a>

                        <a
                            href="#modulos"
                            className="hero__secondary"
                        >
                            Ver módulos
                        </a>
                    </div>

                </div>

                <div
                    className="hero__visual"
                    aria-hidden="true"
                ></div>
            </div>
        </section>
    )
}

export default Hero