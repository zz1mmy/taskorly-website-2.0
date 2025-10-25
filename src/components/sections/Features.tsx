import Image from 'next/image'

const features = [
  {
    title: 'POS Integration',
    description: 'Seamlessly integrates with Square, Shopify, and major POS systems. Your team gets help exactly when they need it, right in their workflow.',
    icon: '/POS icon.png'
  },
  {
    title: 'AI-Guided SOPs',
    description: 'No more searching through manuals. Taskorly delivers instant, personalized answers to staff questions using your business knowledge.',
    icon: '/Book icon.png'
  },
  {
    title: 'Live Resolution',
    description: 'Resolve customer issues in real-time at checkout. No manager needed, no workflow disruption, just smooth transactions.',
    icon: '/Lightning icon.png'
  },
  {
    title: 'Smart Analytics',
    description: 'Track productivity, identify training gaps, and gain actionable insights to continuously improve your team\'s performance.',
    icon: '/analytics icon.png'
  }
]

export default function Features() {
  return (
    <section id="features">
      <div className="container">
      <h2 className="section-title">Powerful Features <br></br> Built for Your Business</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <Image 
                src={feature.icon} 
                alt={feature.title}
                width={40}
                height={40}
              />
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
