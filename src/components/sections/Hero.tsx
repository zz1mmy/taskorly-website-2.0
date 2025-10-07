import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Your <span className="highlight">AI-Powered</span> Business Assistant</h1>
          <p>Taskorly is your personalized AI assistant that connects to your business systems—answering questions, solving problems, and helping your team succeed in real-time.</p>
          <Link href="#contact" className="hero-cta">Schedule a Demo</Link>
        </div>
        <div className="hero-visual">
          <div className="demo-screen">
            <div className="demo-header">
              <div className="demo-dot"></div>
              <div className="demo-dot"></div>
              <div className="demo-dot"></div>
            </div>
            <div className="demo-content">
              <div className="chat-bubble">
                <strong>Staff:</strong> Does the garden salad have nuts?
              </div>
              <div className="chat-bubble ai">
                <strong>Taskorly:</strong> Yes, contains walnuts. Recommend house salad instead for nut-free option.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
