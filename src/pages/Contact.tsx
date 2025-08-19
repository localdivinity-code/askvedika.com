import { Card } from '../components/UI'
export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Contact & Collaborate</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card title="Say hello">
          <div className="grid gap-3">
            <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Your name" />
            <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Email" />
            <textarea className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Message" rows="5"></textarea>
            <button className="border px-3 py-2 rounded-lg text-sm">Send</button>
            <p className="text-xs text-gray-600">(Wire this to your email/API later.)</p>
          </div>
        </Card>
        <Card title="Collaboration">
          <div className="text-sm text-gray-600">
            Open to research partnerships, talks, and joint projects on language, AI, and cultural preservation.
          </div>
        </Card>
      </div>
    </div>
  )
}
