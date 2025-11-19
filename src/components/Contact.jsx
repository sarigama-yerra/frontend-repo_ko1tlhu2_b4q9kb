import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks for reaching out! I’ll get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus(data?.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Let’s connect</h2>
            <p className="mt-4 text-slate-600">Have a project in mind or just want to say hi? Drop a line below or email me at <a href="mailto:polly@example.com" className="underline">polly@example.com</a>.</p>
          </div>
          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900/10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900/10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900/10" />
              </div>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">Send message</button>
                {status && <p className="text-sm text-slate-700">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
