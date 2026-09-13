import { useState } from 'react'

import {
  MessageCircle,
  Send,
  Building2,
  User,
  Phone,
  BriefcaseBusiness,
  ClipboardPenLine,
  ChevronDown,
} from 'lucide-react'

import '../styles/contact-section.css'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    industry: '',
    message: '',
  })


  // Nombre: solamente letras y espacios
  const handleNameChange = (event) => {
    const value = event.target.value

    const cleanValue = value.replace(
      /[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g,
      '',
    )

    setFormData({
      ...formData,
      name: cleanValue,
    })
  }


  // WhatsApp:
  // + seguido de máximo 12 números
  // o máximo 10 números sin +
  const handlePhoneChange = (event) => {
    let value = event.target.value

    if (value.startsWith('+')) {
      const numbers = value
        .slice(1)
        .replace(/\D/g, '')
        .slice(0, 12)

      value = `+${numbers}`
    } else {
      value = value
        .replace(/\D/g, '')
        .slice(0, 10)
    }

    setFormData({
      ...formData,
      phone: value,
    })
  }


  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)
  }


  return (
    <section
      id="contacto"
      className="contact-section"
    >
      <div className="contact-container">

        {/* Encabezado */}
        <div className="contact-heading">

          <span className="contact-label">
            Contacto
          </span>

          <h2>
            ¿Quieres mejorar el control interno de
            <span> tu negocio?</span>
          </h2>

          <p>
            Cuéntanos cómo manejas actualmente tu inventario, producción,
            órdenes o movimientos internos y revisemos si FABRYX puede ayudarte.
          </p>

        </div>


        <div className="contact-grid">

          {/* Información */}
          <div className="contact-info">

            <span className="contact-small-label">
              Hablemos de tu operación
            </span>

            <h3>
              Conoce FABRYX y revisemos qué necesita tu negocio
            </h3>

            <p>
              Podemos mostrarte una demostración, conocer tus procesos actuales
              y revisar qué áreas necesitas controlar mejor.
            </p>


            <div className="contact-benefits">

              <div className="contact-benefit">
                <div>
                  <MessageCircle size={20} strokeWidth={2.4} />
                </div>

                <span>
                  Conversación directa sobre tus necesidades
                </span>
              </div>


              <div className="contact-benefit">
                <div>
                  <Building2 size={20} strokeWidth={2.4} />
                </div>

                <span>
                  Revisión de procesos reales de tu negocio
                </span>
              </div>


              <div className="contact-benefit">
                <div>
                  <ClipboardPenLine size={20} strokeWidth={2.4} />
                </div>

                <span>
                  Demo y propuesta según lo que necesites controlar
                </span>
              </div>

            </div>


            {/* WhatsApp directo */}
            <div className="contact-whatsapp">

              <div className="contact-whatsapp-icon">
                <MessageCircle size={24} strokeWidth={2.4} />
              </div>

              <div>
                <span>
                  ¿Prefieres hablar directamente?
                </span>

                <strong>
                  Contáctanos por WhatsApp
                </strong>
              </div>

              <a
                href="https://wa.me/524761012619?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20Fabryx"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-button"
              >
                Escribir
              </a>
            </div>

          </div>


          {/* Formulario */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-header">
              <h3>
                Solicitar información
              </h3>

              <p>
                Déjanos tus datos y cuéntanos qué necesitas controlar mejor.
              </p>
            </div>


            <div className="contact-fields">

              {/* Nombre */}
              <div className="contact-field">

                <label htmlFor="name">
                  Nombre
                </label>

                <div className="contact-input-wrapper">

                  <User size={18} />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    maxLength={60}
                    required
                  />

                </div>

              </div>


              {/* Negocio */}
              <div className="contact-field">

                <label htmlFor="business">
                  Negocio
                </label>

                <div className="contact-input-wrapper">

                  <Building2 size={18} />

                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Nombre de tu negocio"
                    maxLength={80}
                    required
                  />

                </div>

              </div>


              {/* WhatsApp */}
              <div className="contact-field">

                <label htmlFor="phone">
                  WhatsApp
                </label>

                <div className="contact-input-wrapper">

                  <Phone size={18} />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Número de teléfono"
                    pattern="^\+\d{12}$|^\d{10}$"
                    title="Ingresa 10 números o + seguido de 12 números"
                    required
                  />

                </div>


              </div>


              {/* Giro del negocio */}
              <div className="contact-field">

                <label htmlFor="industry">
                  Giro del negocio
                </label>

                <div className="contact-input-wrapper contact-select-wrapper">

                  <BriefcaseBusiness size={18} />

                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Selecciona una opción
                    </option>

                    <option value="manufactura">
                      Manufactura / Producción
                    </option>

                    <option value="calzado">
                      Calzado
                    </option>

                    <option value="plasticos">
                      Plásticos y materiales
                    </option>

                    <option value="almacen">
                      Almacén / Distribución
                    </option>

                    <option value="comercial">
                      Comercio
                    </option>

                    <option value="servicios">
                      Servicios
                    </option>

                    <option value="otro">
                      Otro
                    </option>
                  </select>

                  <ChevronDown
                    className="contact-select-arrow"
                    size={17}
                  />

                </div>

              </div>


              {/* Mensaje */}
              <div className="contact-field contact-field-full">

                <label htmlFor="message">
                  ¿Qué quieres controlar mejor?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente cómo manejas actualmente tu operación..."
                  maxLength={600}
                  required
                ></textarea>

              </div>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Solicitar información

              <Send size={18} strokeWidth={2.4} />
            </button>


            <p className="contact-form-note">
              Nos pondremos en contacto contigo para conocer mejor tu operación.
            </p>

          </form>

        </div>

      </div>
    </section>
  )
}

export default ContactSection