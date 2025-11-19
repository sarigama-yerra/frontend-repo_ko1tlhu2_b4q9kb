export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About Polina</h2>
            <p className="mt-4 text-slate-700">
              I work with words, games and art so people can return to themselves. My path moves through journalism → copywriting → HR & content strategy → transformational games and art therapy. Through it all runs the same thread: listening for the essence and giving it form.
            </p>
            <p className="mt-4 text-slate-700">
              I hold a BA in Social Work & Pedagogy and taught English in primary school. At 16, I passed a test interview in English with a music band, became a journalist and wrote 100+ articles — later leading a column on intuitive eating and attending regional press conferences as a city correspondent.
            </p>
            <p className="mt-4 text-slate-700">
              For 6+ years I freelanced as a copywriter, completing 580+ client projects. I also worked as an HR assistant and content manager in a large network company: created and packaged social media profiles to attract talent, built content plans across the franchise, wrote 310+ texts, and coordinated teams daily in Slack and Trello.
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
