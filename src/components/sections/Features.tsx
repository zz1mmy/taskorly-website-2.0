const features = [
  {
    title: 'POS Integration',
    description: 'Seamlessly integrates with Square, Shopify, and major POS systems. Your team gets help exactly when they need it, right in their workflow.',
    icon: '🔌'
  },
  {
    title: 'AI-Guided SOPs',
    description: 'No more searching through manuals. Taskorly delivers instant, personalized answers to staff questions using your business knowledge.',
    icon: '🧠'
  },
  {
    title: 'Live Resolution',
    description: 'Resolve customer issues in real-time at checkout. No manager needed, no workflow disruption, just smooth transactions.',
    icon: '⚡'
  },
  {
    title: 'Smart Analytics',
    description: 'Track productivity, identify training gaps, and gain actionable insights to continuously improve your team\'s performance.',
    icon: '📊'
  }
]

export default function Features() {
  return (
    <section id="features">
      <h2 className="section-title">Powerful Features Built for Your Business</h2>
      <p className="section-subtitle">Everything your team needs to perform at their best</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
