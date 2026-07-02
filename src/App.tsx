// ============================================================================
// PETER & PAUL LLP — Single-File Premium Marketing Site
// ----------------------------------------------------------------------------
// This page is fully self-contained: pure React + Tailwind, native useState
// for routing/UI state, no external data libs, no backend calls.
// To port to a plain Vite + React + Tailwind repo for Vercel: copy this file's
// default export into your App.tsx — no other dependencies required.
// ============================================================================

import { useState, type FormEvent } from "react";
import andrewWilsonImg from "./assets/andrew-wilson.jpg";

// Single source of truth for the local header asset
const andrewWilsonAsset = {
  url: andrewWilsonImg
};

export default function App() {
  return <PeterPaulSite />;
}

// ============================================================================
// SHARED CONSTANTS — single source of truth for firm metadata
// ============================================================================
const FIRM = {
  name: "Peter & Paul LLP",
  phone: "(650) 555-0199",
  phoneHref: "tel:+16505550199",
  address: "1040 Grant Road, Suite 200, Mountain View, CA 94040",
  gold: "#D4AF37",
};

const NAV_LINKS = [
  { id: "practice", label: "Practice Areas" },
  { id: "team", label: "Our Team" },
  { id: "results", label: "Case Results" },
  { id: "contact", label: "Contact" },
];

// ============================================================================
// ROOT COMPONENT — composes the full single-page site
// ============================================================================
function PeterPaulSite() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-neutral-100 antialiased selection:bg-[#D4AF37]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <Leadership />
        <CaseNarrative />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// ============================================================================
// NAVBAR — desktop links + animated mobile hamburger
// ============================================================================
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B0D10]/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 lg:px-10">
        {/* ---- LEFT: Logo monogram + wordmark ---- */}
        <a href="#top" className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-sm border border-[#D4AF37]/40 font-serif text-sm tracking-widest text-[#D4AF37]"
            aria-hidden="true"
          >
            P<span className="opacity-60">·</span>P
          </span>
          <span className="font-serif text-lg tracking-wide text-white">
            Peter <span className="text-[#D4AF37]">&amp;</span> Paul{" "}
            <span className="text-neutral-400">LLP</span>
          </span>
        </a>

        {/* ---- CENTER: Desktop nav links ---- */}
        <nav className="hidden justify-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-sm uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ---- RIGHT: Click-to-call (desktop) + hamburger (mobile) ---- */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={FIRM.phoneHref}
            className="hidden items-center gap-2 rounded-sm border border-[#D4AF37]/60 bg-[#D4AF37]/5 px-4 py-2 text-sm font-medium tracking-wide text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-black md:inline-flex"
          >
            <PhoneIcon />
            {FIRM.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="relative h-10 w-10 md:hidden"
          >
            <span
              className={`absolute left-2 right-2 top-3.5 h-px bg-white transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-2 right-2 bottom-3.5 h-px bg-white transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ---- MOBILE DRAWER ---- */}
      <div
        className={`overflow-hidden border-t border-white/5 transition-[max-height] duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm uppercase tracking-[0.18em] text-neutral-300 hover:text-[#D4AF37]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={FIRM.phoneHref}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-4 py-3 text-sm font-medium text-[#D4AF37]"
          >
            <PhoneIcon /> {FIRM.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

// ============================================================================
// HERO — authoritative serif headline + trust metrics + dual CTAs
// ============================================================================
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(212,175,55,0.15) 0%, rgba(11,13,16,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:px-10 lg:pt-32 lg:pb-36">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
          <span className="h-px w-10 bg-[#D4AF37]" />
          Mountain View · Established Counsel
        </div>

        <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[8rem]">
          We Build.
          <br />
          We Protect.
          <br />
          <span className="italic text-[#D4AF37]">We Litigate.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
          {FIRM.name} delivers decisive, high-stakes legal counsel and trial advocacy for
          founders, investors, and enterprise tech across Silicon Valley.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all hover:bg-[#e6c252]"
          >
            Book a Strategy Consultation
            <ArrowRightIcon />
          </a>
          <a
            href={FIRM.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white/5"
          >
            <PhoneIcon /> Call Our Mountain View Office
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            { v: "20+", k: "Years In the Valley" },
            { v: "$1.2B+", k: "In Transactional Volume" },
            { v: "96%", k: "Trial Success Rate" },
          ].map((m) => (
            <div key={m.k} className="bg-[#0B0D10] px-6 py-8">
              <div className="font-serif text-4xl text-[#D4AF37] sm:text-5xl">{m.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-neutral-400">
                {m.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PRACTICE AREAS — three pillar columns, fully scannable
// ============================================================================
function PracticeAreas() {
  const pillars = [
    {
      tag: "Pillar A",
      title: "Venture Corporate",
      items: [
        "Entity Formation & Series Scaling",
        "Cross-Border M&A & Joint Ventures",
        "Executive Compensation & Stock Incentives",
      ],
    },
    {
      tag: "Pillar B",
      title: "Commercial Litigation",
      items: [
        "Founder & Board Disputes",
        "Breach of Fiduciary Duty Claims",
        "High-Court Trade Secret Theft Defense",
      ],
    },
    {
      tag: "Pillar C",
      title: "IP & Tech Transactions",
      items: [
        "Patent Portfolio Monetization",
        "Licensing Architecture & Open-Source Audits",
        "Regulatory Data Privacy Alignment",
      ],
    },
  ];

  return (
    <section id="practice" className="border-t border-white/5 bg-[#0E1115]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader
          eyebrow="Core Practice Areas"
          title="Three pillars. One standard of execution."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col border border-white/10 bg-[#0B0D10] p-8 transition-all hover:border-[#D4AF37]/50"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">{p.tag}</div>
              <h3 className="mt-4 font-serif text-3xl text-white">{p.title}</h3>
              <ul className="mt-8 space-y-4">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-neutral-300">
                    <span className="mt-2 h-px w-4 shrink-0 bg-[#D4AF37]" />
                    <span className="text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// LEADERSHIP — split-screen: portrait placeholder + bio authority
// ============================================================================
function Leadership() {
  return (
    <section id="team" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader eyebrow="Leadership" title="The Counselor at the Helm." />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0B0D10]">
              <img
                src={andrewWilsonAsset.url}
                alt="Andrew Wilson, Counselor at Law"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#D4AF37]" />
              <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-[#D4AF37]" />
              <span className="absolute left-4 bottom-4 h-6 w-6 border-l border-b border-[#D4AF37]" />
              <span className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-[#D4AF37]" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-4xl text-white sm:text-5xl">
              Andrew Wilson
              <span className="block mt-2 text-base font-sans uppercase tracking-[0.3em] text-[#D4AF37]">
                Counselor at Law
              </span>
            </h3>

            <blockquote className="mt-10 border-l-2 border-[#D4AF37] pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-neutral-100 sm:text-2xl">
                "In the Valley, speed and precision aren't advantages—they are baseline
                requirements. We build corporate architecture to withstand scale, and we
                enter the courtroom to win."
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-neutral-400">
                — Andrew Wilson
              </footer>
            </blockquote>

            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Role
                </dt>
                <dd className="mt-2 text-sm text-neutral-200">
                  Managing Partner &amp; Director of Trial Litigation
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Focus
                </dt>
                <dd className="mt-2 text-sm text-neutral-200">
                  Venture Disputes · Commercial Fraud · IP Protection
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Credentials
                </dt>
                <dd className="mt-2 text-sm text-neutral-200">
                  Stanford Law School, JD <span className="text-[#D4AF37]">(Order of the Coif)</span>
                  {" · "}UC Berkeley, BA Economics
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CASE NARRATIVE — single-focus high-stakes social proof block
// ============================================================================
function CaseNarrative() {
  return (
    <section id="results" className="relative border-t border-white/5 bg-[#0E1115]">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader eyebrow="High-Stakes Narrative" title="When minutes mattered." />

        <figure className="mt-16 border border-white/10 bg-[#0B0D10] p-10 sm:p-16">
          <div
            aria-hidden="true"
            className="font-serif text-7xl leading-none text-[#D4AF37]"
          >
            “
          </div>
          <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-neutral-100 sm:text-3xl">
            When a departing executive attempted to lift our core machine learning
            architecture and filed a multi-million dollar preemptive suit, Andrew Wilson
            and the team at {FIRM.name} counter-sued within{" "}
            <span className="text-[#D4AF37]">12 hours</span>, secured an emergency
            injunction, and completely neutralized the threat before our next funding
            round.
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-[#D4AF37]/40 font-serif text-[#D4AF37]">
              ER
            </div>
            <div>
              <div className="text-sm font-medium text-white">Elena R.</div>
              <div className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                CTO &amp; Co-Founder · Enterprise AI Platform
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT — frictionless intake form with local-only submission state
// ============================================================================
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [caseType, setCaseType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setCaseType("");
  }

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <SectionHeader eyebrow="Engage Counsel" title="Begin a confidential conversation." />
          <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-300">
            Every inquiry is reviewed personally by a partner. Expect a response within one
            business day — sooner for urgent matters.
          </p>

          <div className="mt-12 space-y-6 text-sm text-neutral-300">
            <div className="flex items-start gap-4">
              <PhoneIcon className="mt-1 text-[#D4AF37]" />
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Direct Line
                </div>
                <a href={FIRM.phoneHref} className="mt-1 block text-white hover:text-[#D4AF37]">
                  {FIRM.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PinIcon className="mt-1 text-[#D4AF37]" />
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Office
                </div>
                <p className="mt-1 text-white">{FIRM.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-white/10 bg-[#0E1115] p-8 sm:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37] text-[#D4AF37]">
                <CheckIcon />
              </div>
              <h3 className="mt-6 font-serif text-3xl text-white">Success! Message Sent</h3>
              <p className="mt-4 max-w-sm text-sm text-neutral-300">
                Thank you. A partner from {FIRM.name} will reach out shortly to schedule
                your confidential consultation.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs uppercase tracking-[0.22em] text-[#D4AF37] hover:text-white"
              >
                Submit another inquiry →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field
                label="Full Name"
                value={name}
                onChange={setName}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Business Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="jane@company.com"
                required
              />
              <Field
                label="Company Name"
                value={company}
                onChange={setCompany}
                placeholder="Acme Inc."
                required
              />
              <Field
                label="Contact Phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                placeholder="(650) 555-0100"
                required
              />

              <label className="block">
                <span className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  Case Type
                </span>
                <select
                  required
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 text-white outline-none transition-colors focus:border-[#D4AF37]"
                >
                  <option value="" disabled className="bg-[#0B0D10]">
                    Select a case type…
                  </option>
                  <option className="bg-[#0B0D10]">Venture Corporate</option>
                  <option className="bg-[#0B0D10]">Commercial Litigation</option>
                  <option className="bg-[#0B0D10]">IP Dispute</option>
                </select>
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#D4AF37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-[#e6c252]"
              >
                Request Consultation <ArrowRightIcon />
              </button>

              <p className="text-[11px] leading-relaxed text-neutral-500">
                Submission of this form does not create an attorney-client relationship.
                All communications are treated as confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER — copyright, policy links, prominent address
// ============================================================================
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#08090B]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl text-white">
              Peter <span className="text-[#D4AF37]">&amp;</span> Paul LLP
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              {FIRM.address}
            </p>
          </div>
          <div className="md:text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Availability
            </div>
            <p className="mt-3 text-sm text-neutral-300">
              Available for urgent, high-stakes consultation{" "}
              <span className="text-white">24 / 7</span>.
            </p>
            <a
              href={FIRM.phoneHref}
              className="mt-2 inline-block text-sm text-white hover:text-[#D4AF37]"
            >
              {FIRM.phone}
            </a>
          </div>
          <nav className="md:text-right">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Attorney Advertising Disclaimer
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row">
          <div>© {year} Peter &amp; Paul LLP. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Mountain View · California</div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// REUSABLE UI ELEMENTS & LAYOUT PARTS
// ============================================================================
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
        <span className="h-px w-10 bg-[#D4AF37]" />
        {eyebrow}
      </div>
      <h2 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.22em] text-neutral-400">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-[#D4AF37]"
      />
    </label>
  );
}

// ============================================================================
// INLINE VECTOR ICON PACK — 100% independent vector path declarations
// ============================================================================
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
