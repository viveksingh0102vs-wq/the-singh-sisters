"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  image: string;
}

export const TOP_UNIVERSITIES: University[] = [
  {
    id: "harvard",
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    image: "/images/universities/harvard.jpg",
  },
  {
    id: "oxford",
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    image: "/images/universities/oxford.jpg",
  },
  {
    id: "stanford",
    name: "Stanford University",
    country: "United States",
    city: "Stanford, CA",
    image: "/images/universities/stanford.jpg",
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    image: "/images/universities/cambridge.jpg",
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology (MIT)",
    country: "United States",
    city: "Cambridge, MA",
    image: "/images/universities/mit.jpg",
  },
  {
    id: "eth-zurich",
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    image: "/images/universities/eth-zurich.jpg",
  },
  {
    id: "imperial",
    name: "Imperial College London",
    country: "United Kingdom",
    city: "London",
    image: "/images/universities/imperial.jpg",
  },
  {
    id: "nus",
    name: "National University of Singapore (NUS)",
    country: "Singapore",
    city: "Singapore",
    image: "/images/universities/nus.jpg",
  },
  {
    id: "tokyo",
    name: "University of Tokyo",
    country: "Japan",
    city: "Tokyo",
    image: "/images/universities/tokyo.jpg",
  },
];

export function UniversityHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all university background images on mount
  useEffect(() => {
    TOP_UNIVERSITIES.forEach((uni) => {
      const img = new Image();
      img.src = uni.image;
    });
  }, []);

  // Automatic seamless background rotation every 1.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOP_UNIVERSITIES.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="education-hero dynamic-university-hero" aria-label="Top World Universities Hero Showcase">
      {/* Background Slides Stack - Smooth opacity transition */}
      <div className="hero-slides-wrapper">
        {TOP_UNIVERSITIES.map((uni, idx) => (
          <div
            key={uni.id}
            className={`hero-slide-item ${idx === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${uni.image})` }}
            role="img"
            aria-label={`${uni.name} background photo`}
          />
        ))}
      </div>

      {/* Rich Teal Color Overlay for perfect contrast */}
      <div className="hero-overlay-teal" />

      {/* Main Hero Content - High Contrast & No Blinking */}
      <div className="education-hero-content-contrast">
        <Reveal>
          <div className="hero-kicker-gold">STUDY ABROAD MENTORSHIP</div>

          <h1 className="hero-title-contrast">
            Talent is Universal.
            <br />
            Opportunity Should Be Too.
          </h1>

          <p className="hero-subtext-contrast">
            Whether you&apos;re a student from a small town, a young woman stepping into STEM, or an aspiring researcher looking beyond borders, we are here to support your journey. Your future starts with one conversation.
          </p>

          <div className="hero-actions-contrast">
            <Link href="/book-consultation" className="btn-hero-primary-dark">
              Book Your Free Consultation
            </Link>
            <Link href="/services" className="btn-hero-secondary-outline">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
