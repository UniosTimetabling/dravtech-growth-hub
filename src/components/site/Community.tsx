import { Link } from "@tanstack/react-router";
import { ArrowRight, Award } from "lucide-react";
import { impact, partners, team } from "@/lib/site";

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-primary">Partners & sponsors</p>
        <h2 className="text-title mt-4 max-w-3xl">The people who make us more powerful — and help us scale daily.</h2>
      </div>
      <div className="stage-3d mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee flex w-max gap-4 [transform:rotateX(14deg)]">
          {row.map((p, i) => (
            <div key={i} className="flex h-28 min-w-64 items-center justify-center rounded-2xl bg-card px-8 text-center text-lg font-semibold tracking-tight">
              <span className={i % 3 === 0 ? "text-primary" : ""}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact({ full = false }: { full?: boolean }) {
  const items = full ? impact : impact.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <p className="eyebrow flex items-center gap-2 text-primary"><span className="size-2 rounded-full bg-signal" /> Giving back</p>
      <h2 className="text-title mt-4 max-w-3xl">We grow by growing others — youth, startups, SMEs and the land itself.</h2>
      <div className="stage-3d mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article key={it.k} className={`tilt-card flex min-h-80 flex-col justify-between rounded-2xl p-7 ${i === 5 ? "bg-primary text-primary-foreground lg:col-span-3 lg:min-h-0" : "bg-card"}`}>
            <div className="flex items-center justify-between text-sm">
              <span className={i === 5 ? "opacity-80" : "text-muted-foreground"}>{it.tag}</span>
              <span className={i === 5 ? "" : "text-primary"}>{it.k}</span>
            </div>
            <div className={i === 5 ? "mt-10 grid gap-6 lg:grid-cols-2 lg:items-end" : "mt-10"}>
              <h3 className={i === 5 ? "text-title" : "text-2xl font-semibold tracking-tight"}>{it.title}</h3>
              <div>
                <p className={`text-sm leading-relaxed ${i === 5 ? "opacity-85" : "text-muted-foreground"}`}>{it.body}</p>
                <p className={`eyebrow mt-5 ${i === 5 ? "" : "text-primary"}`}>With {it.with}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!full && (
        <Link to="/impact" className="mt-10 inline-flex items-center gap-2 text-primary">See our community work <ArrowRight className="size-4" /></Link>
      )}
    </section>
  );
}

export function Team() {
  const top = team.slice(0, 3);
  const rest = team.slice(3);
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <p className="eyebrow text-primary">Our team</p>
      <h2 className="text-title mt-4 max-w-3xl">A well-skilled, understanding team that comes to your ground and builds what you need.</h2>
      <p className="eyebrow mt-20 flex items-center gap-2 text-muted-foreground"><Award className="size-4 text-primary" /> Best 3 · Team of the Year</p>
      <div className="stage-3d mt-6 grid gap-5 md:grid-cols-3">
        {top.map((m, i) => (
          <article key={m.name} className="float-3d flex min-h-96 flex-col justify-between rounded-3xl bg-card p-8" style={{ animationDelay: `${i * -2}s` }}>
            <div className="flex items-center justify-between">
              <span className="grid size-14 place-items-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
                {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <span className="text-display text-secondary">0{i + 1}</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{m.name}</h3>
              <p className="mt-1 text-primary">{m.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.edu}</p>
              <p className="mt-5 text-sm leading-relaxed">{m.note}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="eyebrow mt-20 text-muted-foreground">Second degree · Tech & Marketing</p>
      <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
        {rest.map((m) => (
          <li key={m.name} className="flex items-baseline justify-between gap-6 py-5">
            <div>
              <p className="text-lg font-semibold">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role} · {m.edu}</p>
            </div>
            <span className="shrink-0 text-xs text-primary">{m.award.split("· ")[1]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-16 max-w-3xl text-xl leading-relaxed text-muted-foreground">
        And others. <span className="text-foreground">Thank you to all our staff and engineers</span> who keep supporting the innovation, the engineering and the craft behind every product.
      </p>
    </section>
  );
}
