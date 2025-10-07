import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>TASKORLY</h3>
          <p>Making every employee their best performer—in real time. Connected to your POS, powered by AI.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><Link href="mailto:team@taskorly.com">team@taskorly.com</Link></li>
            <li><Link href="#">Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Taskorly. All rights reserved.</p>
      </div>
    </footer>
  )
}
