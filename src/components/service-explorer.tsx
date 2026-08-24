import Link from "next/link";
import { ArrowRight, Check, FlaskConical, Globe2, GraduationCap } from "lucide-react";

const programs = [
  { id:"masters", title:"Master's Programs", kicker:"Build your foundation", icon:GraduationCap, text:"Guidance through university selection, applications, and admission for Master's study across Europe — built around your background, budget, and goals.", items:["Course & university shortlisting","CV & statement of purpose","Scholarship guidance","Application support"] },
  { id:"phd", title:"PhD Applications", kicker:"Find your research fit", icon:FlaskConical, text:"Support finding the right research fit, identifying funding routes, and building a strong, competitive PhD application.", items:["University & supervisor shortlisting","CV & cover letter","Professor outreach emails","Interview preparation"] },
  { id:"postdoc", title:"Postdoc Programs", kicker:"Advance your research career", icon:Globe2, text:"Mentorship for postdoctoral researchers pursuing the next step in their global academic and research career.", items:["Research positioning & fit","CV & cover letter","Professor outreach emails","Interview preparation"] },
];

export function ServiceExplorer() {
  return (
    <div className="program-comparison-grid" aria-label="Academic program services">
      {programs.map((program, index) => (
        <article className={`program-comparison-card program-${program.id}`} key={program.id}>
          <div className="program-card-accent" aria-hidden="true" />
          <header className="program-card-header">
            <span className="program-card-icon"><program.icon aria-hidden="true" /></span>
            <span className="program-card-number">0{index + 1}</span>
          </header>
          <span className="program-card-kicker">{program.kicker}</span>
          <h3>{program.title}</h3>
          <p className="program-card-description">{program.text}</p>
          <div className="program-card-includes">
            <span>What we cover</span>
            <ul>
              {program.items.map((item) => (
                <li key={item}><i><Check aria-hidden="true" /></i><strong>{item}</strong></li>
              ))}
            </ul>
          </div>
          <Link className="program-card-cta" href="/book-consultation">
            Get started <ArrowRight aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
