import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description: "Contact Singh Sisters and book your free study abroad consultation.",
};

const gainItems = [
  "A clearer definition of your academic goals",
  "An independent expert mentor perspective",
  "Master's, PhD & Postdoctoral guidance",
  "100% free initial consultation with zero hard sell",
];

const socialLinks = [
  {
    name: "Instagram",
    subtitle: "Follow our journey",
    href: "https://www.instagram.com/",
    markClass: "instagram-mark",
    markText: "◎",
  },
  {
    name: "X",
    subtitle: "Join the conversation",
    href: "https://x.com/Anamika95241313?s=20",
    markClass: "x-mark",
    markText: "X",
  },
  {
    name: "LinkedIn",
    subtitle: "Connect professionally",
    href: "https://linkedin.com/in/anamika-singh-583845187/",
    markClass: "linkedin-mark",
    markText: "in",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Free Consultation"
        title="Your future starts with one conversation"
        text="Your first call is on us. It is an opportunity to discuss your aspirations, understand our process, and see how we can help you achieve your study abroad goals."
      />

      {/* Main Booking & Contact Form Section */}
      <section className="booking-section-wrapper">
        <div className="container booking-layout">
          <aside className="booking-sidebar">
            <div className="booking-sidebar-card booking-highlights">
              <span className="badge-gold">What you&apos;ll gain</span>
              <div className="gain-list">
                {gainItems.map((item) => (
                  <div className="gain-item" key={item}>
                    <span className="gain-icon">
                      <CheckCircle2 size={16} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="booking-sidebar-card">
              <div className="mini-card-head">
                <span className="mini-icon-wrap">
                  <CalendarDays size={18} />
                </span>
                <h3>What to prepare</h3>
              </div>
              <p>
                Bring your primary academic goals, university preferences, target degree (Master’s, PhD, Postdoc), and any questions. Slides are never required.
              </p>
            </div>

            <div className="booking-sidebar-card booking-tint">
              <div className="mini-card-head">
                <span className="mini-icon-wrap gold">
                  <Sparkles size={18} />
                </span>
                <h3>100% Free First Consultation</h3>
              </div>
              <p>
                Your initial 30-minute consultation with Singh Sisters is completely free. We will email you to confirm your chosen time slot.
              </p>
            </div>
          </aside>

          <div className="booking-panel">
            <div className="booking-panel-head">
              <span className="badge-gold">Request your session</span>
              <h2>Request your consultation</h2>
              <p>All times shown in India Standard Time (IST).</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Social Media Stay Connected Section */}
      <section className="social-connect-section">
        <div className="container social-connect-container">
          <div className="social-connect-header">
            <span className="social-badge-gold">
              <Heart size={14} className="heart-icon-gold" /> LET&apos;S STAY CONNECTED
            </span>
            <h2>Connect with us online</h2>
            <p>
              Follow along or reach out directly through social media.
            </p>
          </div>

          <div className="social-cards-grid">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-item"
                aria-label={`Visit Singh Sisters on ${item.name}`}
              >
                <span className={`social-avatar-mark ${item.markClass}`}>{item.markText}</span>
                <span className="sr-only">{item.name}: {item.subtitle}</span>
              </a>
            ))}
          </div>
          <div className="online-location-copy"><strong>Our location</strong><p>We work with students online, wherever they are. Reach out, and we&apos;ll find a time that works across time zones.</p></div>
        </div>
      </section>
    </>
  );
}
