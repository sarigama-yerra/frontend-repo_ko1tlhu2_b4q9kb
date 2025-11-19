import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-8 border-t border-slate-200 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Polly — All rights reserved.
      </footer>
    </div>
  )
}

export default App
