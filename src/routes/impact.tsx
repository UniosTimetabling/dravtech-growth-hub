import { createFileRoute } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Impact, Partners } from "@/components/site/Community";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Partners — DravTech IT Solutions" },
      { name: "description", content: "How DravTech gives back: NYOTA IT mastercraftsmen with GoK and KEPSA, skilling, mentorship, tree planting with GRADO, EcoFlow and SME tools." },
      { property: "og:title", content: "DravTech Impact & Partners" },
      { property: "og:description", content: "Mentoring youth, skilling, planting trees and tooling SMEs with our partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero img={aboutHero} tag="Community" title="Giving back," accent="growing together." />
      <Impact full />
      <Partners />
      <Cta title="Partner with us to tool more SMEs." />
    </>
  );
}
