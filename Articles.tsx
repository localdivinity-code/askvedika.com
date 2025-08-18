import { Card } from '../components/UI'

const demo = [
  { title: 'Why Sanatan Dharma & AGI Belong Together', tag: 'Sanatan Insights', excerpt: 'A product thinker’s lens on eternal wisdom and modern computation.' },
  { title: 'Designing the Sanatan Bhasha (SD) for Machines & Humans', tag: 'Research', excerpt: 'A dual-layer language for advanced intelligence and everyday use.' },
  { title: 'Building Vedika GPT: Trust, Translation, and Textual Integrity', tag: 'AI & Spirituality', excerpt: 'Guardrails for scripture-grounded answers.' },
]

export default function Articles() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Articles & Research</h2>
      <p className="text-gray-600 mt-1">Long-form essays and updates across spirituality, language, and AI.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {demo.map(a => (
          <Card key={a.title}>
            <div className="font-semibold">{a.title}</div>
            <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs mt-1">{a.tag}</span>
            <p className="text-sm text-gray-600 mt-2">{a.excerpt}</p>
            <button className="px-0 mt-2 text-sm underline">Read</button>
          </Card>
        ))}
      </div>
    </div>
  )
}
