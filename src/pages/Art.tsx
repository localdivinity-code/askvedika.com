import { useState } from 'react'
import { Card, Button } from '../components/UI'

const demoArt = [
  { title: 'Saffron Horizon', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Glyphs in Dawn', src: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Orbiting Hymn', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop' },
]

export default function Art() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % demoArt.length)
  const prev = () => setIdx((i) => (i - 1 + demoArt.length) % demoArt.length)

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Art Gallery</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4 items-start">
        <Card>
          <img src={demoArt[idx].src} alt={demoArt[idx].title} className="w-full h-80 object-cover rounded-xl" />
          <div className="flex items-center justify-between mt-3">
            <div>
              <div className="font-medium">{demoArt[idx].title}</div>
              <p className="text-xs text-gray-600">Concept art & motifs</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={prev}>Prev</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </div>
        </Card>
        <Card title="About the Gallery">
          Visual explorations of symbols, calligraphy, and speculative worlds that inform the book and Viya Gita.
        </Card>
        <Card title="Notes">
          More categories coming soon.
        </Card>
      </div>
    </div>
  )
}
