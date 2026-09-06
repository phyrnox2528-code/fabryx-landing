import {
  useEffect,
  useState,
} from 'react'

import { Menu } from 'lucide-react'

import '../styles/navbar.css'


const navItems = [
  {
    id: 'inicio',
    label: 'Inicio',
  },
  {
    id: 'ideal-para',
    label: 'Ideal para',
  },
  {
    id: 'solucion',
    label: 'Solución',
  },
  {
    id: 'modulos',
    label: 'Módulos',
  },
  {
    id: 'como-funciona',
    label: 'Cómo funciona',
  },
  {
    id: 'contacto',
    label: 'Contacto',
  },
]


function Navbar() {

  const [activeSection, setActiveSection] = useState('inicio')


  useEffect(() => {

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)


    const observer = new IntersectionObserver(
      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )


        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          )
        }

      },
      {
        root: null,

        rootMargin:
          '-25% 0px -55% 0px',

        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
        ],
      }
    )


    sections.forEach((section) => {
      observer.observe(section)
    })


    return () => {
      observer.disconnect()
    }

  }, [])


  return (
    <header className="navbar">

      <nav className="navbar__inner">

        {/* Logo */}
        <div>

          <a
            href="#inicio"
            className="navbar__brand"
          >
            FABRYX
          </a>

        </div>


        {/* Navegación */}
        <div className="navbar__links">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? 'navbar__link navbar__link--active'
                  : 'navbar__link'
              }
              aria-current={
                activeSection === item.id
                  ? 'page'
                  : undefined
              }
            >
              {item.label}
            </a>

          ))}

        </div>


        {/* Botón demo */}
        <div className="navbar__cta-wrapper">

          <a
            href="#contacto"
            className="navbar__cta"
          >
            Solicitar demo
          </a>

        </div>


        {/* Botón móvil */}
        <button
          type="button"
          className="navbar__menu-button"
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>

      </nav>

    </header>
  )
}


export default Navbar