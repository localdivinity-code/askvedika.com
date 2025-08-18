import { useState } from 'react'

export default function Membership() {
  const [yearly, setYearly] = useState(true)
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Membership</h2>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" checked={yearly} onChange={e=>setYearly(e.target.checked)} />
          Yearly billing
        </label>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-2xl border bg-white shadow-sm p-4">
          <div className="font-semibold mb-2">Free</div>
          <ul className="text-sm space-y-2">
            <li>Articles & updates</li>
            <li>GPT demo (3 queries/day)</li>
            <li>Art previews</li>
          </ul>
          <button className="mt-4 w-full border px-3 py-2 rounded-lg text-sm">Get Started</button>
        </div>
        <div className="rounded-2xl border bg-white shadow-sm p-4">
          <div className="font-semibold mb-2">Pro</div>
          <div className="text-3xl font-bold">{yearly ? '£119/yr' : '£12.99/mo'}</div>
          <p className="text-xs text-gray-600 mt-1">Save ~25% yearly</p>
          <ul className="text-sm space-y-2 mt-3">
            <li>Unlimited GPT access</li>
            <li>File uploads + longer context</li>
            <li>Viya Gita premium chapters</li>
            <li>Early book excerpts & lore docs</li>
            <li>High-res art downloads</li>
          </ul>
          <button className="mt-4 w-full border px-3 py-2 rounded-lg text-sm">Subscribe</button>
        </div>
        <div className="rounded-2xl border bg-white shadow-sm p-4">
          <div className="font-semibold mb-2">Patron</div>
          <div className="text-3xl font-bold">{yearly ? '£299/yr' : '£29.99/mo'}</div>
          <ul className="text-sm space-y-2 mt-3">
            <li>All Pro features</li>
            <li>Quarterly AMAs</li>
            <li>Credits in Viya Gita releases</li>
          </ul>
          <button className="mt-4 w-full border px-3 py-2 rounded-lg text-sm">Become a Patron</button>
        </div>
      </div>
    </div>
  )
}
