import { Card } from '../components/UI'

const demoShlokas = [
  { sd: 'भव-चक्रे ज्ञान-दीपः, निश्चलः।', en:'In the whirl of becoming, let knowledge be the steady lamp.', translit: 'bhava-chakre jñāna-dīpaḥ, niścalaḥ.', meaning: 'Clarity arises when we hold to discerning wisdom amid changing conditions.'},
  { sd: 'कर्मेन्द्रियाणि संयम्य मनसा धार्यताम्।', en:'Restrain the senses through the governance of mind.', translit: 'karmendriyāṇi saṃyamya manasā dhāryताम्.', meaning: 'Discipline of action begins with attention — the mind shapes the hand.'},
]

export default function ViyaGita() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Viya Gita</h2>
      <p className="text-gray-600 mt-1">Each verse includes the original in Sanatan Bhasha, an English translation, transliteration, and layered meaning.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {demoShlokas.map((s, i) => (
          <Card key={i} title={`Shloka ${i+1}`}>
            <p className="font-serif text-lg">{s.sd}</p>
            <hr className="my-3" />
            <p><strong>Translation:</strong> {s.en}</p>
            <p className="text-sm text-gray-600"><strong>Transliteration:</strong> {s.translit}</p>
            <p className="text-sm mt-1"><strong>Meaning:</strong> {s.meaning}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
