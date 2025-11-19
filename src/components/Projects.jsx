function ProjectCard({ project }) {
  return (
    <li className="rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-slate-100" />
      <div className="p-5">
        <div className="text-xs font-medium text-blue-700 bg-blue-50 ring-1 ring-blue-200 inline-flex px-2 py-0.5 rounded">
          {project.tag}
        </div>
        <h3 className="mt-3 font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{project.summary}</p>
        <ul className="mt-4 text-sm text-slate-600 space-y-1">
          <li><span className="font-semibold text-slate-800">Problem:</span> {project.problem}</li>
          <li><span className="font-semibold text-slate-800">Role:</span> {project.role}</li>
          <li><span className="font-semibold text-slate-800">Result:</span> {project.result}</li>
        </ul>
      </div>
    </li>
  )
}

export default function Projects() {
  const projects = [
    {
      tag: 'Fintech',
      title: 'Streamlining onboarding for a banking app',
      summary: 'Reduced signup friction with a clearer flow and progressive data capture.',
      problem: 'High drop‑off at KYC verification step.',
      role: 'Led research, designed flows, built UI components in React.',
      result: '36% increase in completion rate and fewer support tickets.'
    },
    {
      tag: 'SaaS',
      title: 'Design system for a growing startup',
      summary: 'Unified visual language and component library across web app and marketing.',
      problem: 'Inconsistent UI slowed teams and hurt brand trust.',
      role: 'Created tokens, components, docs; paired with engineers on adoption.',
      result: 'Shipped faster with 40% fewer UI bugs and higher NPS.'
    },
    {
      tag: 'E‑commerce',
      title: 'Checkout performance improvements',
      summary: 'Optimized critical path and cleaned up UX debt on mobile.',
      problem: 'Slow load times and confusing address forms.',
      role: 'Audited performance, redesigned forms, implemented with React.',
      result: 'LCP down 28%, conversion up 12% on mobile.'
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">Start a project</a>
        </div>
        <ul className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>
      </div>
    </section>
  )
}
