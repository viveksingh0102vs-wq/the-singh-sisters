import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRight, Compass, FileCheck2, PlaneTakeoff, Sparkles} from "lucide-react";
import {ServiceExplorer} from "@/components/service-explorer";
import {Reveal} from "@/components/reveal";

export const metadata:Metadata={title:"Services",description:"Personalised guidance for Master's, PhD, and Postdoctoral life sciences applications."};
const journey=[
  {number:"01",title:"Discover",text:"We map your academic profile and goals to the right programs, countries, and funding options.",icon:Compass},
  {number:"02",title:"Apply",text:"We guide you through applications, documents, statements of purpose, and scholarship submissions.",icon:FileCheck2},
  {number:"03",title:"Depart",text:"We support you through admission decisions, visas, and preparing for life abroad.",icon:PlaneTakeoff},
];

export default function Services(){return <>
  <section className="services-hero-v3"><div className="services-orb one"/><div className="services-orb two"/><div className="services-wrap"><Reveal><span className="services-eyebrow">Services</span><h1>Expert Guidance Tailored to Your Budget and Goals</h1><p>Get personalised support for Master&apos;s, PhD and Postdoctoral pathways in life sciences. We shortlist universities based on your budget, academic profile and career goals, and guide you through every step of your application process.</p><div className="services-hero-actions"><Link className="education-button" href="/book-consultation">Book a Free Consultation <ArrowRight/></Link><a className="services-text-link" href="#programs">Explore programs <ArrowRight/></a></div></Reveal></div></section>
  <section className="services-programs-v3" id="programs"><div className="services-wrap"><Reveal><div className="services-section-head"><div><h2>Choose Your Pathway</h2><p className="services-pathway-subheading">Support designed for your next academic step.</p></div><p>Compare every pathway and see exactly how we can guide your journey.</p></div></Reveal><ServiceExplorer/></div></section>
  <section className="services-journey-v3"><div className="services-wrap"><Reveal><div className="services-section-head"><div><span className="services-eyebrow">Student Journey Roadmap</span><h2>Discover. Apply. Depart.</h2></div><p>One clear path from academic ambition to life abroad.</p></div></Reveal><div className="journey-grid-v3">{journey.map((step,index)=><Reveal key={step.title}><article><span>{step.number}</span><i><step.icon/></i><h3>{step.title}</h3><p>{step.text}</p>{index<journey.length-1&&<ArrowRight className="journey-connector"/>}</article></Reveal>)}</div></div></section>
  <section className="stem-banner-v3 women-stem-photo"><div className="stem-glow"/><div className="services-wrap stem-content-v3"><Reveal><h2 className="stem-main-heading">Empowering Women in STEM</h2><p className="stem-subheading">Science advances when everyone has a seat at the table.</p><p>We are passionate about supporting girls and women who aspire to build careers in biotechnology, life sciences, and research &amp; innovation. Through mentorship and guidance, we aim to help more women confidently pursue global academic and research opportunities.</p><div className="stem-tags-v3">{["Biotechnology","Life Sciences","Research & Innovation"].map(tag=><span key={tag}><Sparkles/>{tag}</span>)}</div></Reveal></div></section>
  <section className="services-cta-v3"><div><span className="services-eyebrow">Your journey starts here</span><h2>Which program are you interested in?</h2><p>Tell us about your goals and we&apos;ll help you find the right path.</p></div><Link className="education-button" href="/book-consultation">Book Your Free Appointment <ArrowRight/></Link></section>
  </>}
