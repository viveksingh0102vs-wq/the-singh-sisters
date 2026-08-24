import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function ConsultationNudge() {
  return (
    <aside className="consultation-nudge" aria-label="Free consultation invitation">
      <span className="consultation-nudge-icon"><CalendarCheck size={20} aria-hidden="true" /></span>
      <span><strong>Book your free consultation</strong><small>Your first call is on us.</small></span>
      <Link href="/book-consultation">Let&apos;s get started <ArrowRight size={16} aria-hidden="true" /></Link>
    </aside>
  );
}
