import { Link } from "@tanstack/react-router";
import { EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-12 pt-24">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-semibold tracking-[0.3em]">DRAV<span className="text-primary">TECH</span></p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Let the code take you further. Websites, ecommerce, systems and research from Kenya.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow text-primary">Company</p>
          <Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
          <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
          <Link to="/impact" className="text-muted-foreground hover:text-foreground">Impact</Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow text-primary">Talk to us</p>
          <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground">{EMAIL}</a>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Start a project</Link>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} DravTech IT Solutions</span>
        <span className="flex items-center gap-2">Made in Kenya <span className="size-1.5 rounded-full bg-signal" /></span>
      </div>
    </footer>
  );
}
