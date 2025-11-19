export default function Testimonials() {
  const items = [
    {
      quote:
        'Polina holds space with warmth and clarity. I came for copy and left with a clear direction for my brand and a lighter heart.',
      name: 'Alina S.',
      title: 'Founder, wellness studio',
    },
    {
      quote:
        'Her words feel like home. The launch felt ethical, spacious, and still delivered numbers beyond our plan.',
      name: 'Dmitry K.',
      title: 'Producer, online school',
    },
    {
      quote:
        'The session gave me a quiet confidence and a simple structure to act. I finally started writing again.',
      name: 'Maria T.',
      title: 'Coach & facilitator',
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Client words</h2>
        <blockquote className="mt-4 p-5 rounded-xl bg-rose-50 ring-1 ring-rose-200 text-rose-900">
          <p className="text-sm">“Everything can be turned into light. True strength is in acceptance.” — Polina</p>
        </blockquote>
        <ul className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <li key={t.name} className="p-6 rounded-xl ring-1 ring-slate-200 bg-white">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-600">{t.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
