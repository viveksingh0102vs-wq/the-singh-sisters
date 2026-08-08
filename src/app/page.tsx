import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { UniversityHero } from "@/components/university-hero";

const opportunityCards = [
  {
    eyebrow: "Global destinations",
    title: "Countries we cover",
    text: "Study opportunities across France, Germany, the United States, the United Kingdom, and wider Europe.",
    tags: ["France", "Germany", "United States", "Europe"],
    image: "/images/universities/oxford.jpg",
    imageAlt: "University of Oxford historic architecture representing global study destinations",
    href: "/contact",
    linkLabel: "Explore destinations",
  },
  {
    eyebrow: "Academic pathways",
    title: "Services",
    text: "Focused support for Master’s, PhD, Postdoctoral, STEM, and research-focused applications.",
    tags: ["Master’s", "PhD", "Postdoctoral", "STEM"],
    image: "/images/academic-pathways-hero.jpg",
    imageAlt: "International Master's and PhD graduates holding degree diplomas outside university",
    href: "/services",
    linkLabel: "View all services",
  },
  {
    eyebrow: "One-to-one support",
    title: "Personalized Mentorship",
    text: "A clear personal roadmap with profile review, university shortlisting, application feedback, and interview preparation.",
    tags: ["Profile review", "Applications", "Interviews"],
    image: "/images/personalized-mentorship-hero.jpg",
    imageAlt: "Academic mentor providing one-on-one application guidance to a student",
    href: "/book-consultation",
    linkLabel: "Meet your mentor",
  },
  {
    eyebrow: "Funding opportunities",
    title: "Scholarship Guidance",
    text: "Support for Erasmus Mundus, DAAD, Eiffel Excellence, university scholarships, and research funding.",
    tags: ["Erasmus Mundus", "DAAD", "Eiffel Excellence", "University funding"],
    image: "/images/scholarship-guidance-hero.jpg",
    imageAlt: "Student holding a Global University Scholarship Award diploma certificate",
    href: "/book-consultation",
    linkLabel: "Explore scholarships",
  },
];

export default function Home() {
  return (
    <>
      <UniversityHero />


      <section className="home-support-section">
        <div className="intro-content">
          <Reveal>
            <div className="support-simple-modern">
              <span className="section-kicker">Your future, in focus</span>
              <h2>How we support your academic dreams</h2>
              <p>
                We empower ambitious students, researchers, women in STEM, and future innovators to access world-class Master&apos;s, PhD, and Postdoctoral opportunities across Europe and beyond.
              </p>
              <p>
                Whether you come from a metropolitan city, a small town, or a rural community, your dreams deserve global opportunities.
              </p>
              <div className="support-list-panel">
                <strong>Your global education journey starts here.</strong>
                <ul>
                  <li>Personalized Mentorship</li>
                  <li>Scholarship Guidance</li>
                  <li>European University Applications</li>
                  <li>STEM &amp; Research Careers</li>
                </ul>
              </div>
              <Link href="/services" className="education-button support-simple-cta">
                Explore Our Services <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-opportunity-section">
        <div className="impact-shell">
          <Reveal>
            <div className="impact-simple-heading">
              <span className="section-kicker">A world of possibility</span>
              <h2>Our Impact At A Glance</h2>
              <p>
                We simplify the journey from aspiration to admission, making global education more accessible and achievable for ambitious students, researchers, and future innovators.
              </p>
            </div>
          </Reveal>

          <div className="opportunity-grid-modern">
            {opportunityCards.map((item) => (
              <Reveal key={item.eyebrow}>
                <Link href={item.href} className="impact-tile-modern">
                  <div
                    className="impact-tile-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                    role="img"
                    aria-label={item.imageAlt}
                  />
                  <div className="impact-tile-content">
                    <span className="opportunity-eyebrow">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="opportunity-tags" aria-label={`${item.eyebrow} topics`}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="impact-tile-link">
                      {item.linkLabel} <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
