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
];

export function UniversityHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const availableUniversities = TOP_UNIVERSITIES.filter((uni) => !failedImages.includes(uni.id));

  // Preload all university background images on mount
  useEffect(() => {
    TOP_UNIVERSITIES.forEach((uni) => {
      const img = new Image();
      img.src = uni.image;
      img.onerror = () => setFailedImages((current) => current.includes(uni.id) ? current : [...current, uni.id]);
    });
  }, []);

  // Automatic seamless background rotation every 1.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => availableUniversities.length ? (prev + 1) % availableUniversities.length : 0);
    }, 1500);

    return () => clearInterval(timer);
  }, [availableUniversities.length]);

  useEffect(() => {
    if (currentIndex >= availableUniversities.length) setCurrentIndex(0);
  }, [availableUniversities.length, currentIndex]);

  return (
    <section className="education-hero dynamic-university-hero" aria-label="Top World Universities Hero Showcase">
      {/* Background Slides Stack - Smooth opacity transition */}
      <div className="hero-slides-wrapper">
        {availableUniversities.map((uni, idx) => (
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
          <p className="hero-principle">Talent is Universal. Opportunity Should Be Too.</p>

          <h1 className="hero-best-fit-title">
            Find the Best-Fit Master&apos;s, PhD &amp; Postdoctoral Opportunities Abroad 
          </h1>

          <p className="hero-subtext-contrast">
            Find the right Master's, PhD, or Postdoctoral opportunity with guidance tailored to your ambitions, budget and profile.
          </p>

          <div className="hero-actions-contrast">
            <Link href="/book-consultation" className="btn-hero-primary-dark">
              Book Your Free Consultation
            </Link>
            <Link href="/services" className="btn-hero-secondary-outline">
              Explore Services
            </Link>
          </div>
          <p className="hero-free-note">Your first call is on us — no charge for the initial consultation.</p>
        </Reveal>
      </div>
    </section>
  );
}
