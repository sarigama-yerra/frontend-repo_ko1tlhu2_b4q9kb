import { BookOpen, Gamepad2, Palette } from 'lucide-react'

function Service({ icon: Icon, title, desc, items }) {
  return (
    <li className="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-700"><Icon size={18}/></div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
      {items?.length ? (
        <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
          {items.map((i) => (<li key={i}>{i}</li>))}
        </ul>
      ) : null}
    </li>
  )
}

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Copywriting & Content',
      desc: 'Funnels, launches, websites, soulful content for experts and brands. Strategy + text that breathes.',
      items: ['Sales funnels & launch sequences', 'Websites and longreads', 'Blogs and personal brands', 'Editorial direction'],
    },
    {
      icon: Gamepad2,
      title: 'Transformational Games & Sessions',
      desc: 'Gentle facilitation with questions and cards. We reflect your state and find steps that feel true.',
      items: ['Individual and group sessions', 'Integration notes after', 'Online or in a cozy studio'],
    },
    {
      icon: Palette,
      title: 'Art & Paintings',
      desc: 'Paintings and clothing art made for your request — talismans of light for your inner home.',
      items: ['Custom canvases', 'Wearable art', 'Future Art Center vision'],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        <ul className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Service key={s.title} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
