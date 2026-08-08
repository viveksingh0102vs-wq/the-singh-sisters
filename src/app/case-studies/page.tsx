import type {Metadata} from "next";import {PageHero,CTA} from "@/components/ui";import {CaseFilter} from "@/components/case-filter";
export const metadata:Metadata={title:"Case Studies",description:"Explore measurable results achieved by Elevate Consulting clients."};
export default function CaseStudies(){return <><PageHero eyebrow="Case studies" title="Change you can measure" text="Six examples of how structured thinking, close collaboration and practical implementation create tangible value."/><section className="section"><div className="container"><CaseFilter/></div></section><CTA/></>}
