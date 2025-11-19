import { useState } from 'react'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold text-slate-900 tracking-tight text-lg">Polly</a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <div className="w-px h-5 bg-slate-300" />
          <a href="mailto:polly@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">
            <Linkedin size={18} />
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 text-slate-700">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 text-slate-700">
              <a href="mailto:polly@example.com" className="inline-flex items-center gap-2"><Mail size={16}/> Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
