import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute -z-10 left-1/2 top-[-10rem] h-[30rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-200/60 to-indigo-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-200">
              <Sparkles size={14} /> Hi, I’m Polly
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              I design and build thoughtful digital products.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl">
              Product designer and front‑end developer with a knack for turning complex problems into clear, friendly experiences.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
                Let’s work together <ArrowRight size={16} />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold ring-1 ring-slate-200 hover:bg-slate-50">
                See my work
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-tr from-indigo-200 via-blue-200 to-cyan-200 p-1 shadow-[0_10px_40px_rgba(2,6,23,0.08)]">
              <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-400 to-blue-500 mb-4" />
                  <p className="text-slate-700 text-sm">Based in Anywhere • Available for freelance and full‑time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
