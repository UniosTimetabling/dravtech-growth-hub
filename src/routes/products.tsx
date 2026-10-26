import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import work from "@/assets/work-systems.jpg";
import rentalHub from "@/assets/rental-hub.jpg";
import automotives from "@/assets/automotives.jpg";
import dravpay from "@/assets/dravpay.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Infrastructure — DravTech IT Solutions" },
      { name: "description", content: "University Timetabling, Rental Hub, DravTech Automotives, Drav Pay sacco switch, Model Forge AI models and DravTech POS for hotels, restaurants, chemists, hospitals, schools and accounting." },
      { property: "og:title", content: "Products & Infrastructure — DravTech" },
      { property: "og:description", content: "Infrastructure for how Africa lives, moves and pays." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const imgs: Record<string, string> = { timetabling: work, "rental-hub": rentalHub, automotives, dravpay };

function ProductsPage() {
  return (
    <>
      <PageHero img={hero2} tag="Products" title="Infrastructure," accent="not just service." />
      <div className="mx-auto max-w-7xl space-y-32 px-6 py-24">
        {products.map((p, i) => (
          <section key={p.slug} id={p.slug} className="grid scroll-mt-24 gap-14 lg:grid-cols-2 lg:items-center">
            <div className={`tilt-card overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={imgs[p.slug] ?? ecommerce} alt={p.name} loading="lazy" width={1280} height={896} className="aspect-[4/3] size-full object-cover" />
            </div>
            <div>
              <p className="eyebrow text-primary">0{i + 1} · {p.tag}</p>
              <h2 className="text-title mt-4">{p.name}</h2>
              <p className="mt-4 text-lg">{p.line}</p>
              <p className="mt-4 max-w-lg text-muted-foreground">{p.body}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{pt}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-primary">Book a demo <ArrowRight className="size-4" /></Link>
            </div>
          </section>
        ))}
      </div>
      <Cta title="Book a free demo." />
    </>
  );
}
