function ProjectCard({ project }) {
  return (
    <li className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-gradient-to-tr from-rose-100 via-amber-100 to-blue-100" />
      <div className="p-5">
        <div className="text-xs font-medium text-rose-700 bg-rose-50 ring-1 ring-rose-200 inline-flex px-2 py-0.5 rounded">
          {project.tag}
        </div>
        <h3 className="mt-3 font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-700">{project.summary}</p>
        {project.metrics && (
          <ul className="mt-4 text-sm text-slate-700 space-y-1">
            {project.metrics.map((m) => (
              <li key={m}>• {m}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Projects() {
  const featured = {
    tag: 'Featured case',
    title: 'Historian of fashion A. Vasiliev — online club launch',
    summary:
      'Designed a sales funnel and wrote all texts for an online club. Outcome: +218 people on recurring payments.',
    metrics: ['Full funnel copy', '+218 recurring members', 'Tone: respectful, cultured, clear'],
  }

  const mini = [
    {
      tag: 'Launch copy',
      title: '“Lunar Calendar” marathon',
      summary: 'Sales texts for a limited run. All 50 planners sold in 2 weeks.',
      metrics: ['50/50 sold in 14 days', 'Warm, lunar tone', 'Landing + emails'],
    },
    {
      tag: 'Automation',
      title: 'Lesov Online School',
      summary: 'Funnel copy for an automated sequence. +240 Telegram subscribers and ~35% sales increase.',
      metrics: ['+240 Telegram', '~35% avg sales increase', 'Evergreen + autoresponder'],
    },
    {
      tag: 'SMM & sales',
      title: 'IT startup MyBotan',
      summary: 'In 3 months: 2.6k+ Instagram followers and 298 orders, including known clients.',
      metrics: ['2.6k+ followers', '298 orders', 'Clients: M. Dashkiev, V. Antonov, T. Kadyrov, M. Timochko'],
    },
    {
      tag: 'YouTube scripts',
      title: 'ANARDREAMS',
      summary: 'Scriptwriting for videos with hundreds of thousands of views; Reels — millions+.',
      metrics: ['100k–1M+ reach', 'Narrative arcs', 'Short-form & long-form'],
    },
    {
      tag: 'English scripts',
      title: 'Formagiclife',
      summary: 'English-language scripts for Reels with million-level reach.',
      metrics: ['Global audience', 'High-retention hooks', 'Soft, luminous tone'],
    },
    {
      tag: 'Facilitation',
      title: 'One-week intensive — 120 participants',
      summary: 'After the intensive, 12 people still run their blogs with joy; partners in the company doubled.',
      metrics: ['120 participants', '12 active bloggers after', 'Partners doubled'],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cases</h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          <ProjectCard project={featured} />
          {mini.slice(0, 2).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-slate-900">More results</h3>
          <ul className="mt-4 grid md:grid-cols-3 gap-6">
            {mini.slice(2).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
