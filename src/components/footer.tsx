import Link from "next/link";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-consultation"><div><strong>Book your free consultation</strong><span>Your first call is on us — no charge for the initial consultation.</span></div><Link href="/book-consultation">Let&apos;s get started</Link></div>
    <div className="footer-content">
      <div><p>Singh Sisters</p><span>Global education guidance for bold ambitions.</span></div>
      <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/about">Story Behind the Mission</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></nav>
    </div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} Singh Sisters. All rights reserved.</small><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
