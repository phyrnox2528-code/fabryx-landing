import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SolutionSection from './components/SolutionSection'
import ModulesSection from './components/ModulesSection'
import HowItWorksSection from './components/HowItWorksSection'
import IdealForSection from './components/IdealForSection'
import ProjectStatusSection from './components/ProjectStatusSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <IdealForSection />

        <SolutionSection />

        <ModulesSection />

        <HowItWorksSection />

        <ProjectStatusSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App