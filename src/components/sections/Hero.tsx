import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Your <span className="highlight">AI-Powered</span> Business Assistant</h1>
          <p>Taskorly is your personalised AI business assistant that connects to your business systems. Answering questions, solving problems, and helping your team succeed in real-time.</p>
        </div>
        <div className="hero-visual">
          <Image
            src="/Landing Screen Chat Graphic.png"
            alt="Taskorly Chat Interface"
            width={800}
            height={600}
            className="chat-graphic"
            priority
          />
        </div>
        <Link href="#contact" className="hero-cta">Schedule a Demo</Link>
      </div>
    </section>
  )
}
