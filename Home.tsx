import { Card } from '../components/UI'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-16">
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Reviving Sanatan Dharma through AI, Art & Story</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
          A living repository for <span className="text-orange-600">Sanatan wisdom</span> — GPTs, articles, <em>10th One</em>, Viya Gita, and art.
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore scripture-grounded AI, read original research and fiction, and join a community committed to cultural renewal.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/gpts"><button className="border px-3 py-2 rounded-lg text-sm">Explore GPTs</button></Link>
          <Link to="/articles"><button className="border px-3 py-2 rounded-lg text-sm">Latest Articles</button></Link>
          <Link to="/membership"><button className="border px-3 py-2 rounded-lg text-sm">Become a Member</button></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <Card title="Scripture‑grounded GPTs">Ask with confidence; get cited, contextual answers.</Card>
          <Card title="10th One — Snippets">Exclusive scenes, lore, and behind‑the‑scenes.</Card>
          <Card title="Viya Gita">Modern shlokas in SD + English with layered meaning.</Card>
        </div>
      </div>
    </div>
  )
}
