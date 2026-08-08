import Link from "next/link";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-content">
      <div><p>The Singh Sisters</p><span>Global education guidance for bold ambitions.</span></div>
      <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/about">Our Story</Link><Link href="/services">Our Services</Link><Link href="/contact">Contact</Link></nav>
    </div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} The Singh Sisters. All rights reserved.</small><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
