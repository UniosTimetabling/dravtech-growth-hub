import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Scene3D } from "@/components/site/PageHero";
import { EMAIL, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DravTech IT Solutions" },
      { name: "description", content: "Start a project with DravTech. Tell us what you want to build." },
      { property: "og:title", content: "Contact DravTech" },
      { property: "og:description", content: "Tell us what you want to build. We reply within 24 hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const field = "w-full rounded-xl bg-input px-5 py-4 text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

function ContactPage() {
  const [service, setService] = useState(services[0]?.name ?? "Web");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nService: ${service}\n\n${f.get("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`New project: ${service}`)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32">
      <Scene3D />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-16 lg:grid-cols-2">
        <div className="fade-up">
          <span className="eyebrow inline-block rounded bg-signal px-2.5 py-1 text-destructive-foreground">Contact</span>
          <h1 className="text-display mt-6">Let's build<br /><span className="text-primary">something.</span></h1>
          <p className="mt-8 max-w-sm text-muted-foreground">Tell us about your idea. We reply within 24 hours.</p>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-flex items-center gap-3 text-lg"><Mail className="size-5 text-primary" />{EMAIL}</a>
        </div>
        <form onSubmit={submit} className="fade-up space-y-4 rounded-3xl bg-card/80 p-8 backdrop-blur-md md:p-10">
          <p className="text-sm text-muted-foreground">I need help with</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button type="button" key={s.k} onClick={() => setService(s.name)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${service === s.name ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                {s.name}
              </button>
            ))}
          </div>
          <input name="name" required maxLength={100} placeholder="Your name" className={field} />
          <input name="email" type="email" required maxLength={200} placeholder="Email address" className={field} />
          <textarea name="message" required maxLength={2000} rows={5} placeholder="What do you want to build?" className={field} />
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Send message <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
