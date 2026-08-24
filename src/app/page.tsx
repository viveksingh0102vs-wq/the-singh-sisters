import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { UniversityHero } from "@/components/university-hero";

const opportunityCards = [
  {
    eyebrow: "Global destinations",
    title: "Countries we cover",
    text: "Focused guidance for life sciences opportunities in four leading study destinations.",
    tags: ["Germany", "France", "USA", "UK"],
    image: "/images/CountryVisted.png?v=20260819b",
    imageAlt: "University of Oxford historic architecture representing global study destinations",
    href: "/contact",
    linkLabel: "Explore destinations",
  },
  {
    eyebrow: "Academic pathways",
    title: "Services",
    text: "Get a personalised shortlist of Master’s, PhD & Postdoc programs for life sciences matched to your budget, profile and research goals.",
    tags: ["Master’s", "PhD", "Postdoctoral"],
    image: "/images/academic-pathways-hero.jpg",
    imageAlt: "International Master's and PhD graduates holding degree diplomas outside university",
    href: "/services",
    linkLabel: "View all services",
  },
  {
    eyebrow: "One-to-one support",
    title: "Personalised Mentorship",
    text: "A clear personal roadmap with profile review, university shortlisting, application feedback, and interview preparation.",
    tags: ["Profile review", "Applications", "Interviews"],
    image: "/images/personalized-mentorship-hero.png?v=20260819b",
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
              {/* <span className="section-kicker">A clear path forward</span> */}
              <h2>Not Sure Where to Start?</h2>
              <p>
                Choosing the right university, country, course, or career path can feel overwhelming. We provide <strong>personalised guidance</strong> from PhD-trained mentors with international academic and research experience to help you understand your options, make informed decisions, and build a clear pathway toward your goals.
              </p>
              <p>
                We support ambitious students in pursuing world-class Master&apos;s, PhD, and postdoctoral opportunities across Europe and beyond. Whether you come from a metropolitan city, a small town, or a rural community, your background should never limit your ambitions.
              </p>
              <p className="support-belief">We believe everyone deserves access to the right guidance and the opportunity to build a future without borders.</p>
              <Link href="/services" className="education-button support-simple-cta">
                Explore Services <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-opportunity-section">
        <div className="impact-shell">
          <Reveal>
            <div className="impact-simple-heading">
              {/* <span className="section-kicker">A world of possibility</span> */}
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
