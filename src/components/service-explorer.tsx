"use client";

import Link from "next/link";
import { ArrowRight, Check, FlaskConical, Globe2, GraduationCap } from "lucide-react";
import { useState } from "react";

const programs = [
  { id:"masters", title:"Master's Programs", kicker:"Build your foundation", icon:GraduationCap, text:"Guidance through university selection, applications, and admission for Master's study across Europe — built around your background, budget, and goals.", items:["Course & university shortlisting","CV & statement of purpose","Scholarship guidance","Application support"] },
  { id:"phd", title:"PhD Applications", kicker:"Find your research fit", icon:FlaskConical, text:"Support finding the right research fit, identifying funding routes, and building a strong, competitive PhD application.", items:["University & supervisor shortlisting","CV & cover letter","Professor outreach emails","Interview preparation"] },
  { id:"postdoc", title:"Postdoc Programs", kicker:"Advance your research career", icon:Globe2, text:"Mentorship for postdoctoral researchers pursuing the next step in their global academic and research career.", items:["Research positioning & fit","Funding & grant guidance","Networking & outreach","Global career mentorship"] },
];

export function ServiceExplorer(){
  const [active,setActive]=useState("masters");
  const selected=programs.find(p=>p.id===active)!;
  return <div className="service-explorer">
    <div className="service-tabs" role="tablist" aria-label="Academic program services">
      {programs.map((p,index)=><button key={p.id} role="tab" aria-selected={active===p.id} aria-controls={`panel-${p.id}`} onClick={()=>setActive(p.id)}><span>0{index+1}</span><p.icon/><strong>{p.title}</strong><small>{p.kicker}</small></button>)}
    </div>
    <div className="service-detail-panel" id={`panel-${selected.id}`} role="tabpanel">
      <div className="service-detail-copy"><span className="service-chip">Your selected pathway</span><h2>{selected.title}</h2><p>{selected.text}</p><Link href="/book-consultation">Get started <ArrowRight/></Link></div>
      <div className="service-includes"><span>What we cover</span>{selected.items.map(item=><div key={item}><i><Check/></i><strong>{item}</strong></div>)}</div>
    </div>
  </div>
}
