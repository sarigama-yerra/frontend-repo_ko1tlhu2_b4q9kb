export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About</h2>
            <p className="mt-4 text-slate-600">
              I’m a multidisciplinary designer and developer with 7+ years of experience across startups and agencies. I pair strong UX thinking with hands‑on front‑end skills to ship fast, elegant interfaces.
            </p>
            <p className="mt-4 text-slate-600">
              I love simplifying gnarly problems, collaborating with product teams, and building systems that scale.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Product Strategy', desc: 'Discovery, framing, shaping, roadmapping' },
                { title: 'UX/UI Design', desc: 'Flows, wireframes, design systems, prototyping' },
                { title: 'Frontend Dev', desc: 'React, TypeScript, accessibility, performance' },
                { title: 'Collaboration', desc: 'Workshops, facilitation, stakeholder alignment' },
              ].map((item) => (
                <li key={item.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
