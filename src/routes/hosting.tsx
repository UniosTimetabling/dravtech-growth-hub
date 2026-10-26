import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Gauge, Bell } from "lucide-react";
import hostingImg from "@/assets/hosting.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { hosting } from "@/lib/site";

export const Route = createFileRoute("/hosting")({
  head: () => ({
    meta: [
      { title: "Hosting & VPN from $5 — DravTech IT Solutions" },
      { name: "description", content: "Shared hosting from $5 a month that scales with your business, plus private, fast VPN services." },
      { property: "og:title", content: "Hosting & VPN — DravTech" },
      { property: "og:description", content: "From $5. Scales as you grow. Never dies in a spike." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HostingPage,
});

const perks = [
  { icon: Gauge, title: "Scales on its own", body: "Traffic spikes don't take you down. Resources grow with you and we notify you after." },
  { icon: ShieldCheck, title: "Private VPN", body: "Fast, encrypted connections for teams and individuals, wherever they work." },
  { icon: Bell, title: "Always watched", body: "Backups, monitoring and real people who answer." },
];

function HostingPage() {
  return (
    <>
      <PageHero img={hostingImg} tag="Hosting & VPN" title="From $5." accent="Built to grow." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {hosting.map((h) => (
            <div key={h.name} className={`tilt-card rounded-3xl p-9 ${h.featured ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <p className="text-sm opacity-80">{h.name}</p>
              <p className="mt-4 text-6xl font-semibold tracking-tight">{h.price}<span className="text-base font-normal opacity-70">{h.per}</span></p>
              <p className="mt-3 opacity-80">{h.line}</p>
              <ul className="mt-8 space-y-3 text-sm">{h.points.map((pt) => <li key={pt}>— {pt}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-24 grid gap-10 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="size-7 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <Cta title="Move your site to DravTech." />
    </>
  );
}
