import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <div className="lead">{children}</div>}
    </div>
  );
}

export function CTA() {
  return (
    <section className="brand-cta">
      <div className="container cta-content">
        <div>
          <span className="eyebrow">Your next step</span>
          <h2>Let&apos;s make your global education journey possible.</h2>
          <p>
            Start with a warm, focused conversation about your goals and the opportunities ahead.
          </p>
        </div>
        <Link className="education-button cta-button" href="/contact">
          Book a free consultation <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero-custom">
      <Reveal>
        <div className="page-hero-inner">
          <span className="page-hero-kicker-gold">{eyebrow}</span>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-lead">{text}</p>
        </div>
      </Reveal>
    </section>
  );
}
