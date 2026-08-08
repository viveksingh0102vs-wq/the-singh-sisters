import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description: "Contact The Singh Sisters and book your free study abroad consultation.",
};

const gainItems = [
  "A clearer definition of your academic goals",
  "An independent expert mentor perspective",
  "Tailored application & scholarship options",
  "100% free initial consultation with zero hard sell",
];

const socialLinks = [
  {
    name: "Facebook",
    subtitle: "Follow our updates",
    href: "https://facebook.com/profile.php?id=100004193443887",
    markClass: "facebook-mark",
    markText: "f",
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
        text="Spend 30 minutes with The Singh Sisters to clarify your goals, explore Master's, PhD & scholarship options, and plan your next steps."
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
                Your initial 30-minute consultation with The Singh Sisters is completely free. We will email you to confirm your chosen time slot.
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
            <h2>Feel free to connect with us on social media</h2>
            <p>
              Follow our journey, discover education insights, or reach out directly. We would love to hear from you.
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
                aria-label={`Visit The Singh Sisters on ${item.name}`}
              >
                <div className="social-card-left">
                  <span className={`social-avatar-mark ${item.markClass}`}>
                    {item.markText}
                  </span>
                  <div className="social-card-text">
                    <strong>{item.name}</strong>
                    <small>{item.subtitle}</small>
                  </div>
                </div>
                <ArrowUpRight size={20} className="social-arrow-icon" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
