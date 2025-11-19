export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About me</h2>
            <p className="mt-4 text-slate-700">
              I’m a content strategist & writer who help to grow and increase my client's brands awareness. My route through journalism, teaching, freelance copywriting, and HR/content management in a large network company taught me to hear the real story behind any project and turn it into a clear content system. With 6+ years of freelance practice and 580+ client projects, I now build strategies that feel alive, human and emotionally honest. Feel free to connect with me 🤗.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {[ 
                { title: 'Mission', desc: 'To be a calm field of transformation where honesty becomes strength and everything can be turned into light.' },
                { title: 'Values', desc: 'Depth, acceptance, safety, clarity. Slow typography, warm colors, and enough space to breathe.' },
                { title: 'How I work', desc: 'Listen deeply → reflect essence → offer gentle structure. We move with respect for pace and nervous system.' },
                { title: 'Background', desc: '28 · Saint Petersburg · From Nyandoma · BA in Social Work & Pedagogy · English specialization.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
