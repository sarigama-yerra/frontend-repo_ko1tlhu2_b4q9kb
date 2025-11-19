import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-8 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Polina Makkurina — Field of Transformation.
      </footer>
    </div>
  )
}

export default App
