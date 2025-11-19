export default function Testimonials() {
  const items = [
    {
      quote:
        'Polly translates ambiguous problems into crisp, user-centered solutions. Our signup funnel finally makes sense.',
      name: 'Casey M.',
      title: 'Head of Product, FintechCo',
    },
    {
      quote:
        'Her collaboration style is unmatched — thoughtful, fast, and pragmatic. She upleveled our design system in weeks.',
      name: 'Jordan P.',
      title: 'Engineering Manager, SaaSly',
    },
    {
      quote:
        'From research to production, Polly brought clarity and polish. Our mobile conversion jumped double digits.',
      name: 'Riley A.',
      title: 'Director of E‑commerce, Shopster',
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Kind words</h2>
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
