import { Card } from '../components/UI'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">About this Hub</h2>
      <p className="mt-3 text-gray-600 max-w-3xl">
        This is the central home for my work at the intersection of Sanatan Dharma and advanced AI. Here you’ll find custom GPTs,
        research essays, excerpts from my novel <em>10th One</em>, the evolving scripture <em>Viya Gita</em>, and original artwork.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Card title="Viya Gita — Thesis">
          A living dialogue that reinterprets eternal principles for a technological age.
          Each shloka appears in Sanatan Bhasha with translation, transliteration, and layered meaning.
        </Card>
        <Card title="Domains">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">Sanatan Bhasha</span>
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">AI Safety</span>
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">Language Design</span>
            <span className="inline-flex items-center rounded-full border px-2 py-0.5">Fiction & Lore</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
