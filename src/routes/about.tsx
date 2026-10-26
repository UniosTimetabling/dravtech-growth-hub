import { createFileRoute } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";
import team from "@/assets/team.jpg";
import studio from "@/assets/studio.mp4.asset.json";
import { PageHero } from "@/components/site/PageHero";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DravTech IT Solutions" },
      { name: "description", content: "DravTech is a Kenyan studio building websites, stores and systems with craft and care." },
      { property: "og:title", content: "About DravTech" },
      { property: "og:description", content: "A Kenyan studio that builds software with craft and care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Craft", "Every pixel and every line placed with a reason."],
  ["Clarity", "Plain language, honest timelines, fixed scopes."],
  ["Ownership", "On custom builds, you own the code and the result. Your data is always yours."],
];

function AboutPage() {
  return (
    <>
      <PageHero img={aboutHero} tag="About us" title="People behind" accent="the code." />
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-title max-w-4xl">
          We are a small team in Kenya building software that <span className="text-primary">works hard</span> for growing businesses.
        </p>
      </section>
      <section className="px-6">
        <div className="tilt-card mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <img src={team} alt="DravTech team at work" loading="lazy" width={1280} height={896} className="aspect-[16/8] w-full object-cover" />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-32 md:grid-cols-3">
        {values.map(([t, b]) => (
          <div key={t}>
            <span className="block h-1 w-10 rounded-full bg-primary" />
            <h3 className="mt-6 text-2xl font-semibold">{t}</h3>
            <p className="mt-3 text-muted-foreground">{b}</p>
          </div>
        ))}
      </section>
      <section className="px-6">
        <div className="relative mx-auto h-[60vh] max-w-7xl overflow-hidden rounded-3xl">
          <video src={studio.url} autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <h2 className="text-title absolute bottom-10 left-10 max-w-lg">Late nights, clean code.</h2>
        </div>
      </section>
      <Cta title="Let's work together." />
    </>
  );
}
