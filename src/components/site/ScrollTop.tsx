import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollTop() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
      setShow(y > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`group fixed bottom-5 right-5 z-50 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <span className="absolute -inset-3 rounded-full bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top-3d disc-3d relative grid size-14 place-items-center rounded-full sm:size-16"
      >
        <svg viewBox="0 0 64 64" className="absolute inset-0 size-full -rotate-90">
          <circle cx="32" cy="32" r="29" fill="none" strokeWidth="1.5" className="stroke-foreground/10" />
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - progress}
            className="stroke-primary"
            style={{ transition: "stroke-dashoffset 0.25s linear" }}
          />
        </svg>

        <span className="relative z-10 flex -space-y-2 flex-col items-center">
          <ChevronUp strokeWidth={2.5} className="size-5 text-primary group-hover:arrow-rise group-hover:arrow-glow" />
          <ChevronUp
            strokeWidth={2.5}
            className="size-5 text-primary/40 group-hover:arrow-rise group-hover:arrow-glow group-hover:[animation-delay:0.18s]"
          />
        </span>

        <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-signal" />

        <span className="pointer-events-none absolute right-full mr-4 hidden text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          TOP
        </span>
      </button>
    </div>
  );
}
