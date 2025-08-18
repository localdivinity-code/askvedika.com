import { Card } from '../components/UI'

export default function Book() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">10th One — Book Hub</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card title="About the Book">
          A mytho-sci‑fi narrative spanning Mars and the Himalayas. Themes of power, memory, and dharma collide with AI and empire.
        </Card>
        <Card title="Snippet of the Week">
          <blockquote className="text-sm leading-6">
            “The Core flared like a sun under ice. K reached for it, and the world folded — not with thunder, but with prayer.”
          </blockquote>
          <button className="underline text-sm mt-2">Read more</button>
        </Card>
      </div>
    </div>
  )
}
