import {
  Boxes,
  PackageCheck,
  Palette,
  ArrowRight,
} from 'lucide-react'

import '../styles/inventory-section.css'

const inventoryTypes = [
  {
    icon: Boxes,
    title: 'Materia prima',
    description:
      'Consulta materiales disponibles, existencias y movimientos utilizados dentro de la operación.',
  },
  {
    icon: PackageCheck,
    title: 'Producto terminado',
    description:
      'Organiza productos terminados por modelo, color, código, talla y otras características.',
  },
  {
    icon: Palette,
    title: 'Material pigmentado',
    description:
      'Relaciona colores, órdenes y cantidades para tener mayor claridad sobre el material por procesar.',
  },
]

function InventorySection() {
  return (
    <section className="inventory-section">
      <div className="inventory-container">

        {/* Encabezado */}
        <div className="inventory-heading">

          <span className="inventory-label">
            Inventario
          </span>

          <h2>
            Inventario pensado para
            <span> procesos de producción</span>
          </h2>

          <p>
            FABRYX permite separar la información según el tipo de material o
            producto, evitando mezclar procesos que necesitan controles
            diferentes.
          </p>

        </div>

        {/* Contenido principal */}
        <div className="inventory-main">

          {/* Texto */}
          <div className="inventory-info">

            <span className="inventory-small-label">
              Control más claro
            </span>

            <h3>
              No todo el inventario funciona de la misma manera
            </h3>

            <p>
              La materia prima, el producto terminado y los materiales
              relacionados con producción tienen necesidades distintas.
            </p>

            <p>
              FABRYX separa cada tipo de inventario para que consultar
              existencias, registrar movimientos y revisar información sea
              más sencillo.
            </p>

            <a href="#contacto">
              Conocer la solución
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>

          </div>

          {/* Captura */}
          <div className="inventory-preview">

            <div className="inventory-browser">

              <div className="inventory-browser-top">
                <div className="inventory-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>
                  FABRYX / Inventario
                </p>
              </div>

              <div className="inventory-browser-content">

                <div className="inventory-placeholder">

                  <Boxes size={36} strokeWidth={2} />

                  <strong>
                    Captura real de Inventario
                  </strong>

                  <p>
                    Aquí colocaremos una pantalla real del módulo de FABRYX.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Tipos de inventario */}
        <div className="inventory-types">

          {inventoryTypes.map((item) => {
            const Icon = item.icon

            return (
              <article
                className="inventory-type-card"
                key={item.title}
              >

                <div className="inventory-type-icon">
                  <Icon size={24} strokeWidth={2.4} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default InventorySection