import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, ChevronRight, Smartphone, CreditCard, Bitcoin, Wallet, Hexagon, Landmark, Zap, Globe } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work from "@/assets/work-systems.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import rentalHub from "@/assets/rental-hub.jpg";
import automotives from "@/assets/automotives.jpg";
import dravpay from "@/assets/dravpay.jpg";
import hostingImg from "@/assets/hosting.jpg";
import studio from "@/assets/studio.mp4.asset.json";
import { Scene3D } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";
import { Impact, Partners } from "@/components/site/Community";
import { services, products, process, pillars, hosting } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DravTech IT Solutions — Websites, Ecommerce & Systems" },
      { name: "description", content: "DravTech builds infrastructure for Africa: systems, automation, Rental Hub, Drav Pay, Automotives, timetabling, hosting and VPN." },
      { property: "og:title", content: "DravTech IT Solutions" },
      { property: "og:description", content: "Let the code take you further. Websites, ecommerce, systems and research." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { img: hero1, tag: "Web · Systems", title: ["Let the code", "take you further"], cta: "Explore services" },
  { img: hero2, tag: "Infrastructure", title: ["Building Africa's", "digital backbone"], cta: "See what we build" },
  { img: hero2, tag: "Ecommerce", title: ["Stores built", "to sell"], cta: "Start a store" },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i] ?? slides[0]!;
  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Scene3D />
      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-end px-6 md:grid-cols-2 md:items-center">
        <div className="pointer-events-none relative hidden h-full md:block">
          {slides.map((sl, idx) => (
            <img key={idx} src={sl.img} alt="" width={1024} height={1280}
              className={`absolute bottom-0 left-0 h-[92%] w-auto object-contain transition-all duration-1000 [mask-image:linear-gradient(to_top,transparent,black_25%)] ${idx === i ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`} />
          ))}
        </div>
        <div key={i} className="fade-up pb-20 md:pb-0 md:text-right">
          <span className="eyebrow inline-block rounded bg-signal px-2.5 py-1 text-destructive-foreground">{s.tag}</span>
          <h1 className="text-display mt-6">{s.title[0]}<br /><span className="text-primary">{s.title[1]}</span></h1>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            {s.cta} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <button aria-label="Previous" onClick={() => go(-1)} className="absolute left-4 top-1/2 z-20 grid size-11 place-items-center rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground"><ArrowLeft className="size-4" /></button>
      <button aria-label="Next" onClick={() => go(1)} className="absolute right-4 top-1/2 z-20 grid size-11 place-items-center rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground"><ArrowRight className="size-4" /></button>
      <div className="absolute bottom-8 left-6 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <p className="eyebrow text-primary">What we do</p>
      <h2 className="text-title mt-4 max-w-2xl">We turn businesses into productive systems.</h2>
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.k} to="/services" className="tilt-card group flex min-h-72 flex-col justify-between rounded-2xl bg-card p-7 hover:bg-secondary">
            <div className="flex items-center justify-between text-sm text-muted-foreground"><span>{s.name}</span><span className="text-primary">{s.k}</span></div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Learn more <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const payMethods = [
  { name: "M-Pesa", icon: Smartphone },
  { name: "Airtel Money", icon: Smartphone },
  { name: "PayPal", icon: Wallet },
  { name: "Visa · Mastercard", icon: CreditCard },
  { name: "Amex", icon: CreditCard },
  { name: "Stripe", icon: Zap },
  { name: "Bitcoin", icon: Bitcoin },
  { name: "Web3 wallets", icon: Hexagon },
  { name: "Bank transfer", icon: Landmark },
  { name: "Drav Pay", icon: Zap },
  { name: "Google & Apple Pay", icon: Smartphone },
  { name: "& more", icon: Globe },
];

function Feature() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-32 lg:grid-cols-2 lg:items-center">
      <div className="order-2 lg:order-1">
        <p className="eyebrow text-primary">Ecommerce</p>
        <h2 className="text-title mt-4">Sell online, get paid <span className="text-primary">tonight.</span></h2>
        <p className="mt-6 max-w-md text-muted-foreground">Stores that load fast on any phone, with checkout, stock and delivery handled for you — and every way your customers want to pay.</p>
        <div className="stage-3d mt-10 grid max-w-lg grid-cols-3 gap-3 sm:grid-cols-4">
          {payMethods.map((m, i) => (
            <div key={m.name} className="float-3d flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-card p-3 text-center" style={{ animationDelay: `${i * -0.8}s` }}>
              <m.icon className={`size-6 ${i % 4 === 0 ? "text-signal" : "text-primary"}`} />
              <span className="text-xs font-semibold leading-tight">{m.name}</span>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-transform hover:scale-105">Start a store <ArrowRight className="size-4" /></Link>
      </div>
      <div className="tilt-card order-1 overflow-hidden rounded-3xl lg:order-2">
        <img src={ecommerce} alt="Online store on a phone" loading="lazy" width={1280} height={896} className="size-full object-cover" />
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="px-6 py-8">
      <div className="relative mx-auto min-h-[88vh] max-w-7xl overflow-hidden rounded-3xl">
        <video src={studio.url} poster={hero1} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 size-full scale-105 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        <div className="relative flex min-h-[88vh] flex-col justify-end gap-10 p-8 md:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2 text-primary"><span className="size-2 animate-pulse rounded-full bg-signal" /> Inside the studio</p>
            <h2 className="text-display mt-5">Built in Kenya,<br /><span className="text-primary">made for anywhere.</span></h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">We don't just build websites. We build infrastructure for Africa — and scalable systems for the world, held to every standard.</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">Meet the team <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.k} className="rounded-2xl bg-background/60 p-5 backdrop-blur-md">
                <p className="text-sm text-primary">{p.k}</p>
                <p className="mt-2 text-lg font-semibold">{p.title}</p>
                <p className="mt-1 hidden text-sm text-muted-foreground md:block">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ecoImgs: Record<string, string> = { "rental-hub": rentalHub, automotives, dravpay, timetabling: work };

function Ecosystem() {
  const featured = products.filter((p) => ecoImgs[p.slug]);
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <p className="eyebrow text-primary">Infrastructure, not just service</p>
      <h2 className="text-title mt-4 max-w-3xl">Products we are building for how Africa lives, moves and pays.</h2>
      <div className="mt-16 space-y-6">
        {featured.map((p, i) => (
          <Link key={p.slug} to="/products" hash={p.slug} className="tilt-card group relative block h-[70vh] min-h-[480px] overflow-hidden rounded-3xl">
            <img src={ecoImgs[p.slug]} alt={p.name} loading="lazy" width={1280} height={896} className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className={`absolute inset-0 ${i % 2 ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-background via-background/70 to-transparent`} />
            <div className={`relative flex h-full max-w-xl flex-col justify-end p-8 md:p-14 ${i % 2 ? "ml-auto md:text-right" : ""}`}>
              <span className={`eyebrow w-fit rounded bg-signal px-2.5 py-1 text-destructive-foreground ${i % 2 ? "md:ml-auto" : ""}`}>{p.tag}</span>
              <h3 className="text-title mt-5">{p.name}</h3>
              <p className="mt-4 text-muted-foreground">{p.line}</p>
              <span className={`mt-6 inline-flex items-center gap-2 text-primary ${i % 2 ? "md:justify-end" : ""}`}>Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Hosting() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={hostingImg} alt="DravTech hosting and VPN" loading="lazy" width={1280} height={896} className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative p-8 md:p-14">
          <p className="eyebrow text-primary">Hosting & VPN</p>
          <h2 className="text-title mt-4 max-w-2xl">From $5. Your business never dies in a traffic spike.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Our systems scale automatically as you grow — we notify you later. Plus fast, private VPN services.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {hosting.map((h) => (
              <div key={h.name} className={`rounded-2xl p-7 backdrop-blur-md ${h.featured ? "bg-primary text-primary-foreground" : "bg-card/80"}`}>
                <p className="text-sm opacity-80">{h.name}</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight">{h.price}<span className="text-base font-normal opacity-70">{h.per}</span></p>
                <p className="mt-2 text-sm opacity-80">{h.line}</p>
                <ul className="mt-6 space-y-2 text-sm">{h.points.map((pt) => <li key={pt}>— {pt}</li>)}</ul>
              </div>
            ))}
          </div>
          <Link to="/hosting" className="mt-10 inline-flex items-center gap-2 text-primary">See hosting & VPN <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [["50+", "Projects shipped"], ["6", "Products & platforms"], ["24h", "Response time"], ["99.9%", "Platform uptime"]];
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-24 md:grid-cols-4">
      {stats.map(([n, l]) => (
        <div key={l}>
          <p className="text-title text-primary">{n}</p>
          <p className="mt-2 text-sm text-muted-foreground">{l}</p>
        </div>
      ))}
    </section>
  );
}

function Products() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
      <div className="tilt-card overflow-hidden rounded-3xl">
        <img src={work} alt="DravTech dashboard on a laptop" loading="lazy" width={1280} height={896} className="size-full object-cover" />
      </div>
      <div>
        <p className="eyebrow text-primary">Live platforms</p>
        <h2 className="text-title mt-4">SaaS platforms you subscribe to. Custom systems we tailor to you.</h2>
        <ul className="mt-10">
          {products.map((p, idx) => (
            <li key={p.name}>
              <Link to="/products" className="group flex items-center justify-between gap-6 rounded-xl px-4 py-5 hover:bg-card">
                <div className="flex items-baseline gap-5">
                  <span className="text-sm text-muted-foreground">0{idx + 1}</span>
                  <div><p className="text-lg font-semibold">{p.name}</p><p className="text-sm text-muted-foreground">{p.line}</p></div>
                </div>
                <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="eyebrow text-primary">How we work</p>
      <h2 className="text-title mt-4 max-w-2xl">From first call to launch, in four steps.</h2>
      <ol className="mt-16 grid gap-10 md:grid-cols-4">
        {process.map((p) => (
          <li key={p.k} className="relative">
            <span className="text-6xl font-semibold text-secondary">{p.k}</span>
            <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Feature />
      <Studio />
      <Ecosystem />
      <Stats />
      <Impact />
      <Partners />
      <Products />
      <Hosting />
      <Process />
      <Cta />
    </>
  );
}
