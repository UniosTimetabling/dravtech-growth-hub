import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import work from "@/assets/work-systems.jpg";
import team from "@/assets/team.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DravTech IT Solutions" },
      { name: "description", content: "Websites, ecommerce stores, custom systems and research built by DravTech in Kenya." },
      { property: "og:title", content: "Services — DravTech" },
      { property: "og:description", content: "Web, ecommerce, systems and research. One standard of craft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const imgs = [hero1, ecommerce, work, team];

function ServicesPage() {
  return (
    <>
      <PageHero img={hero1} tag="Services" title="Built with" accent="intent." />
      <div className="mx-auto max-w-7xl space-y-32 px-6 py-24">
        {services.map((s, i) => (
          <section key={s.k} className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className={`tilt-card overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={imgs[i % imgs.length]} alt={s.title} loading="lazy" width={1280} height={896} className="aspect-[4/3] size-full object-cover" />
            </div>
            <div>
              <p className="eyebrow text-primary">{s.k} · {s.name}</p>
              <h2 className="text-title mt-4">{s.title}</h2>
              <p className="mt-6 max-w-md text-muted-foreground">{s.body}</p>
              <ul className="mt-8 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3"><Check className="size-4 text-primary" />{p}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-primary">Enquire <ArrowRight className="size-4" /></Link>
            </div>
          </section>
        ))}
      </div>
      <Cta title="Not sure what you need? Ask us." />
    </>
  );
}
