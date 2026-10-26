import { Link } from "@tanstack/react-router";

export function Cta({ title = "Have an idea? Let's build it." }: { title?: string }) {
  return (
    <section className="px-6 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-end md:p-16">
        <h2 className="text-display max-w-3xl">{title}</h2>
        <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-7 py-4 font-semibold text-foreground transition-transform hover:scale-105">
          Start a project <span className="size-2 rounded-full bg-signal" />
        </Link>
      </div>
    </section>
  );
}
