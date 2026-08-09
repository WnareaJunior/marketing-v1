import ProductVisual from "./components/ProductVisual";

/* --------------------------------------------------------------- */
/* Primitives                                                       */
/* --------------------------------------------------------------- */
/* Placeholder personal brand — swap "Jordan Vale" for your name.   */

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold tracking-tight ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" rx="7" fill="var(--color-primary)" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="11"
          fontWeight="700"
          fill="var(--color-bg)"
        >
          JV
        </text>
      </svg>
      Jordan Vale
    </span>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-lg" aria-label="Jordan Vale, home">
          <Wordmark />
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="shine rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-px"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}

/* --------------------------------------------------------------- */
/* Hero                                                             */
/* --------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="field grid-lines relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-28">
        <div>
          <span className="anim-rise d-1 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-primary-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Freelance marketer · landing pages &amp; conversion copy
          </span>

          <h1 className="anim-rise d-2 mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.02]">
            This page is the sample.
          </h1>

          <p className="anim-rise d-3 mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            I&apos;m Jordan Vale. I write and build landing pages that turn
            visitors into customers — like the one you&apos;re on. You&apos;re a
            few seconds in and still reading, which is precisely the point.
          </p>

          <div className="anim-rise d-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="shine rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              See what I do
            </a>
          </div>

          <p className="anim-rise d-5 mt-6 text-sm text-muted">
            Booking new projects · Replies within a day · Fixed-price, no surprises
          </p>
        </div>

        <div className="anim-drift d-3 relative lg:pl-4">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/5 blur-2xl"
          />
          <ProductVisual />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Client cloud                                                     */
/* --------------------------------------------------------------- */

const clients = ["Northwind", "Aperture", "Lattice", "Foundry", "Kelvin", "Meridian"];

function Clients() {
  return (
    <section id="clients" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-center text-sm text-muted">
          Pages shipped for founders and teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-lg font-semibold text-ink/45 transition-colors hover:text-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Services (bento — deliberately varied sizes)                    */
/* --------------------------------------------------------------- */

function Service({
  title,
  children,
  icon,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col rounded-2xl border border-line bg-bg p-7 transition-shadow hover:shadow-[0_1px_0_var(--color-line),0_18px_40px_-24px_oklch(0.55_0.06_236/0.4)] ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary-strong">
        {icon}
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight">
          Everything a page needs to earn its scroll.
        </h2>
        <p className="mt-4 text-lg text-muted">
          Strategy, copy, design, and build — from one person who owns the whole
          outcome, not just a slice of it. (This one took about a week.)
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Lead service spans two columns on large screens */}
        <Service
          className="lg:col-span-2"
          title="Landing pages, end to end"
          icon={<IconLayers />}
        >
          Positioning, copy, design, and a fast, responsive build — one brief,
          one owner, one page that ships. Exactly like the one you&apos;re
          reading right now.
        </Service>

        <Service title="Conversion copywriting" icon={<IconPen />}>
          Words that do the selling. Headlines, hooks, and CTAs written against
          what actually converts, not what sounds clever.
        </Service>

        <Service title="Messaging & positioning" icon={<IconTarget />}>
          Figure out what to say before how to say it — the part most pages
          skip, and the reason they fall flat.
        </Service>

        <Service
          className="md:col-span-2"
          title="Analytics & A/B testing"
          icon={<IconPulse />}
        >
          Launch isn&apos;t the finish line. I wire up analytics and run tests so
          the page keeps getting sharper — and you can see the number move.
        </Service>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Results (dark)                                                  */
/* --------------------------------------------------------------- */

function Results() {
  return (
    <section id="results" className="overflow-hidden bg-night text-night-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-night-ink">
            The proof is the page you&apos;re on.
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-night-muted">
            Every project is measured against one thing: did it move the number
            that matters? Here&apos;s what that&apos;s tended to look like.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-night-line pt-8">
            {[
              { v: "2.4×", k: "median conversion lift after a rebuild" },
              { v: "~10 days", k: "typical turnaround, brief to launch" },
              { v: "40+", k: "pages shipped for founders and teams" },
              { v: "100%", k: "fixed-price — you know the cost up front" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl font-bold text-night-ink">{s.v}</dt>
                <dd className="mt-1 text-sm text-night-muted">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary/20 blur-3xl"
          />
          <ProductVisual />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* CTA                                                             */
/* --------------------------------------------------------------- */

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="field relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight">
          Want one of these for your product?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          If this page kept you reading, picture one built for what
          you&apos;re launching. Tell me about it — I&apos;ll tell you how
          I&apos;d sell it.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@jordanvale.com?subject=Landing%20page%20project"
            className="shine rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
          <a
            href="#top"
            className="rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            Re-read the sample
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Footer                                                          */
/* --------------------------------------------------------------- */

const footerCols = [
  { title: "Services", links: ["Landing pages", "Copywriting", "Positioning", "A/B testing"] },
  { title: "Work", links: ["Recent projects", "Case studies", "Testimonials"] },
  { title: "Elsewhere", links: ["Email", "LinkedIn", "X / Twitter", "Read.cv"] },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="text-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Freelance marketer. Landing pages that earn their scroll — copy,
              design, and build from one pair of hands.
            </p>
          </div>
          {footerCols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Jordan Vale. Yes, even the footer is copy.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------------- */
/* Icons (small, distinct line marks)                              */
/* --------------------------------------------------------------- */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
function IconPen() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <path d="M4 20h4L20 8a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 1.5V4M12 20v2.5M1.5 12H4M20 12h2.5" />
    </svg>
  );
}
function IconPulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
    </svg>
  );
}

/* --------------------------------------------------------------- */
/* Page                                                            */
/* --------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
