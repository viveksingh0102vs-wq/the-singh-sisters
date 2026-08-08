import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet The Singh Sisters and discover why we make global education more accessible.",
};

const sisters = [
  { name: "Anamika Singh, PhD", role: "Founder (France)", image: "/images/ankita-profile.png" },
  { name: "Ankita Singh, PhD", role: "Co-founder (United States)", image: "/images/anamika-profile.jpg" },
  { name: "Aparajita Singh, PhD", role: "Co-founder (Germany)", image: "/images/sister-aparajita.jpg" },
];

export default function About() {
  return <>
    <section className="story-intro">
      <div className="story-container story-top-grid">
        <div className="story-photo story-founders-photo" />
        <div className="story-copy">
          <h1>Why We Started</h1>
          <p>We are three sisters from Varanasi who refused to let geography, gender stereotypes, or limited access to opportunities define our futures. Education became our pathway to independence, resilience, and global careers across France, Germany, and the United States.</p>
          <p>Having experienced the challenges of navigating international education ourselves, we understand how overwhelming the journey can feel. That is why we created <strong>The Singh Sisters</strong> — to empower ambitious students, particularly women in STEM and learners from underrepresented backgrounds, to dream boldly and pursue opportunities with confidence.</p>
          <p>Our story is proof that when talent is nurtured and supported, it can transcend every border.</p>
        </div>
      </div>
    </section>

    <section className="sisters-section">
      <h2>Meet The Singh Sisters</h2>
      <p className="sisters-tagline">Three sisters. Three countries. One mission.</p>
      <div className="story-container sister-grid">
        {sisters.map((sister) => <article className="sister-card" key={sister.name}>
          <div className="sister-photo" style={{ backgroundImage: `url(${sister.image})` }} />
          <h3>{sister.name}</h3>
          <p>{sister.role}</p>
        </article>)}
      </div>
    </section>

    <section className="story-details">
      <div className="story-container detail-grid">
        <div className="story-copy vision-copy">
          <h2>Our Vision</h2>
          <p>To create a future in which every talented student—regardless of gender, geography, or socioeconomic background—has access to global educational and research opportunities.</p>
        </div>
        <div className="story-photo story-students-photo" />
        <div className="story-photo story-classroom-photo" />
        <div className="story-copy why-copy">
          <h2>Why We Exist</h2>
          <p><strong>Because Talent Exists Everywhere, but opportunity does not.</strong></p>
          <p>Many students never pursue international education because of:</p>
          <ul><li>Lack of guidance</li><li>Financial concerns</li><li>Limited awareness</li><li>Fear of rejection</li><li>Absence of mentors</li></ul>
          <p>We help bridge this gap.</p>
        </div>
      </div>
    </section>

    <section className="founder-note">
      <div className="story-container founder-grid">
        <div className="story-copy">
          <h2>Note from The Founder</h2>
          <p>I understand the pressure society puts on students — expectations from family, comparisons with relatives, and the silent weight that often leads to stress and even depression. I take mental health very seriously, and I believe no dream is worth sacrificing your well-being.</p>
          <p>As a woman in STEM, I also deeply support and encourage women who dare to step into science and global careers. The Singh Sisters is my way of offering honest guidance, support, and understanding through this journey.</p>
          <Link className="education-button" href="/book-consultation">Let&apos;s get started</Link>
        </div>
        <div className="story-photo story-founder-photo" />
      </div>
    </section>
  </>;
}
