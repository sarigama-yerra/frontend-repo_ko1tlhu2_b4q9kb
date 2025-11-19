import { ArrowRight, Sparkles, BookOpen, Gamepad2, Palette } from 'lucide-react'

export default function Hero() {
  const actions = [
    { label: 'Book a session', href: '#contact' },
    { label: 'Request copywriting', href: '#services' },
    { label: 'Commission a painting', href: '#art' },
  ]

  const directions = [
    {
      icon: BookOpen,
      title: 'Words',
      desc: 'Soulful, strategic copy: funnels, launches, blogs, and brand stories that feel like home.',
    },
    {
      icon: Gamepad2,
      title: 'Games',
      desc: 'Transformational games and sessions – gentle facilitation that reveals essence and next steps.',
    },
    {
      icon: Palette,
      title: 'Art',
      desc: 'Paintings and wearable art as talismans of light, created for your state and request.',
    },
  ]

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="absolute -z-10 left-1/2 top-[-12rem] h-[36rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-200/60 via-amber-200/50 to-blue-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-medium ring-1 ring-rose-200">
              <Sparkles size={14} /> Polina Makkurina · Saint Petersburg
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Everything can be turned into light.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl">
              Creative practitioner at the intersection of deep copywriting, content strategy, transformational games and art therapy. A calm field of transformation where you can see your true essence. True strength is in acceptance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {actions.map((a) => (
                <a key={a.label} href={a.href} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
                  {a.label} <ArrowRight size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-tr from-rose-200 via-amber-200 to-blue-200 p-1 shadow-[0_10px_40px_rgba(2,6,23,0.08)]">
              <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-rose-400 to-amber-500 mb-4" />
                  <p className="text-slate-700 text-sm">28 · From Nyandoma · Based in Saint Petersburg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {directions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                <Icon size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-rose-50 ring-1 ring-rose-200 text-rose-900">
          <p className="text-sm">
            “I call myself a field of transformation: a space of trust, depth and honesty. We meet as we are, and from this honesty — light grows.”
          </p>
        </div>
      </div>
    </section>
  )
}
