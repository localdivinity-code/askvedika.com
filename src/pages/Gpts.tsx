'use client';
import { useState } from 'react'
import { Card, Button } from '../components/UI'
import { API_BASE } from '../config'

const gpts = [
  { name: 'Vedika GPT', desc: 'Scripture-grounded Q&A with citations and translations.', badge: 'Premium' },
  { name: 'Srimad Bhagavatam GPT', desc: 'Explore the 10 cantos with commentary.', badge: 'Included' },
  { name: 'Sanatan Bhasha GPT', desc: 'Compose and decode SD language across contexts.', badge: 'Premium' },
]

export default function Gpts() {
  const [active, setActive] = useState(gpts[0].name)
  const [limit, setLimit] = useState(3)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{role:'user'|'assistant'|'system', content:string}[]>([
    { role: 'system', content: 'Demo mode: 3 queries free. Upgrade for citations & file upload.' },
  ])
  async function send() {
    if (!input.trim() || limit <= 0) return
    const q = input
    setInput('')
    setMessages(m => [...m, { role: 'user', content: q }])
    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ assistant: active, messages: [{ role: 'user', content: q }] }),
      })
      const data = await res.json()
      setMessages(m => [...m, { role: 'assistant', content: data.answer ?? 'Demo response (connect OPENAI key).' }])
    } catch (e) {
      setMessages(m => [...m, { role: 'assistant', content: 'Error contacting API.' }])
    }
    setLimit(x => x - 1)
  }
  async function checkout(priceId: string) {
    try {
      const res = await fetch(`${API_BASE}/stripe/checkout`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ priceId, successUrl: window.location.origin + '/membership?status=success', cancelUrl: window.location.origin + '/membership?status=cancelled' }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (e) { alert('Checkout error') }
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">GPT Hub</h2>
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Premium features gated</span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {gpts.map(g => (
          <Card key={g.name}>
            <div className={`cursor-pointer ${active === g.name ? 'font-semibold' : ''}`} onClick={() => setActive(g.name)}>
              {g.name} — {g.badge}
              <p className="text-sm text-gray-600 mt-1">{g.desc}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Card>
          <div className="h-64 overflow-y-auto border rounded-xl p-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm mb-2 ${m.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block px-3 py-2 rounded-xl ${m.role === 'user' ? 'bg-orange-600 text-white' : 'bg-white border'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Ask a question…" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} />
            <Button onClick={send}>Send</Button>
          </div>
          <p className="text-xs text-gray-600 mt-2">Free queries left: {limit}. Upgrade to unlock citations, long context, and file uploads.</p>
        </Card>
        <Card>
          <ul className="text-sm space-y-2">
            <li>Unlimited GPT queries</li>
            <li>File uploads & long context</li>
            <li>Viya Gita premium content</li>
            <li>Early book excerpts & lore docs</li>
          </ul>
          <Button onClick={() => checkout('price_123')} className="mt-3 w-full">Subscribe</Button>
        </Card>
      </div>
    </div>
  )
}
