import ProductVisual from "./components/ProductVisual";

/* --------------------------------------------------------------- */
/* Primitives                                                       */
/* --------------------------------------------------------------- */

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="1" width="20" height="20" rx="6" fill="var(--color-primary)" />
        <circle cx="11" cy="11" r="3.4" fill="var(--color-bg)" />
        <circle cx="11" cy="11" r="6.2" fill="none" stroke="var(--color-bg)" strokeOpacity="0.55" strokeWidth="1.4" />
      </svg>
      Lumen
    </span>
  );
}

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Platform", href: "#showcase" },
  { label: "Customers", href: "#logos" },
  { label: "Pricing", href: "#cta" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-lg" aria-label="Lumen home">
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
        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="shine rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-px"
          >
            Start free
          </a>
        </div>
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
            New — Signal graph, now in general availability
          </span>

          <h1 className="anim-rise d-2 mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.02]">
            Operational clarity for teams that ship.
          </h1>

          <p className="anim-rise d-3 mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            Lumen turns scattered product and infrastructure signals into one
            live picture — so your team catches what matters before customers
            ever notice.
          </p>

          <div className="anim-rise d-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="shine rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Start free
            </a>
            <a
              href="#showcase"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              See how it works
            </a>
          </div>

          <p className="anim-rise d-5 mt-6 text-sm text-muted">
            Free for 14 days · No credit card · SOC 2 Type II
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
/* Logo cloud                                                       */
/* --------------------------------------------------------------- */

const customers = ["Northwind", "Aperture", "Lattice", "Foundry", "Kelvin", "Meridian"];

function Logos() {
  return (
    <section id="logos" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-center text-sm text-muted">
          Trusted by engineering and product teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {customers.map((c) => (
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
/* Features (bento — deliberately varied sizes)                    */
/* --------------------------------------------------------------- */

function Feature({
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

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight">
          One place to see how your system really behaves.
        </h2>
        <p className="mt-4 text-lg text-muted">
          Stop stitching dashboards together at 2am. Lumen connects the signals
          you already emit and makes the story obvious.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Lead feature spans two columns on large screens */}
        <Feature
          className="lg:col-span-2"
          title="The signal graph"
          icon={<IconGraph />}
        >
          Metrics, traces, logs, and deploys linked automatically. Click any
          spike and walk the dependency graph to the service that caused it —
          no query language required.
        </Feature>

        <Feature title="Anomaly detection" icon={<IconPulse />}>
          Baselines learn your traffic patterns and flag the deviations that
          matter, not the noise.
        </Feature>

        <Feature title="Root-cause traces" icon={<IconTarget />}>
          Every alert opens on the exact trace, span, and line of code behind
          it.
        </Feature>

        <Feature
          className="md:col-span-2"
          title="Alerts that route themselves"
          icon={<IconRoute />}
        >
          Ownership follows your service catalog, so the right on-call engineer
          is paged with full context — and everyone else stays asleep.
        </Feature>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- */
/* Showcase (dark)                                                 */
/* --------------------------------------------------------------- */

function Showcase() {
  return (
    <section id="showcase" className="overflow-hidden bg-night text-night-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight text-night-ink">
            From a spike to the root cause in under a minute.
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-night-muted">
            When something moves, Lumen already has the context. Teams that
            switch resolve incidents faster and spend less time guessing.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-night-line pt-8">
            {[
              { v: "63%", k: "lower mean time to resolution" },
              { v: "12ms", k: "median query latency across signals" },
              { v: "4.9B", k: "events ingested every day" },
              { v: "99.99%", k: "platform uptime, measured externally" },
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
    <section id="cta" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="field relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight">
          Give your team a clear view of production.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Connect your first service in minutes. Invite the whole team — Lumen
          is free while you evaluate.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#top"
            className="shine rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Start free
          </a>
          <a
            href="#top"
            className="rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            Talk to us
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
  { title: "Product", links: ["Overview", "Signal graph", "Alerting", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Customers"] },
  { title: "Resources", links: ["Docs", "Status", "Security", "Contact"] },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="text-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Operational clarity for teams that ship. Built for engineers,
              readable by everyone.
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
          <p>© {new Date().getFullYear()} Lumen, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#" className="transition-colors hover:text-ink">Status</a>
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

function IconGraph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="17" r="2.2" />
      <path d="M7.7 16.3 16 7.5M8 17.2h7.7" />
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
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 1.5V4M12 20v2.5M1.5 12H4M20 12h2.5" />
    </svg>
  );
}
function IconRoute() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...strokeProps} aria-hidden="true">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M6 8.4v4.1a4 4 0 0 0 4 4h5.6" />
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
        <Logos />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
