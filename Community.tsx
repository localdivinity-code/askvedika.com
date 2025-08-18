import { useState } from 'react'
import { Card } from '../components/UI'

export default function Community() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Community Hub</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card title="Newsletter">
          <p className="text-sm text-gray-600">Weekly updates on GPTs, Viya Gita, and the book. No spam.</p>
          <div className="mt-3 flex gap-2">
            <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="you@domain.com" value={email} onChange={e=>setEmail(e.target.value)} />
            <button onClick={()=>setDone(true)} className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm">Join</button>
          </div>
          {done && <p className="text-sm text-green-700 mt-2">You're in ✨ (Connect to Beehiiv/Substack in production.)</p>}
        </Card>
        <Card title="Join the Circle">
          <p className="text-sm text-gray-600">Connect on your preferred platform.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="border px-3 py-2 rounded-lg text-sm">X / Twitter</button>
            <button className="border px-3 py-2 rounded-lg text-sm">Instagram</button>
            <button className="border px-3 py-2 rounded-lg text-sm">LinkedIn</button>
            <button className="border px-3 py-2 rounded-lg text-sm">YouTube</button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Webinars, live readings, and AMAs — posted here first. (Hook a CMS later.)
          </div>
        </Card>
      </div>
    </div>
  )
}
