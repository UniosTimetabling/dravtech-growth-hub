import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";

const GoldScene = lazy(() => import("@/components/GoldScene").then((m) => ({ default: m.GoldScene })));

export function Scene3D() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return (
    <div className="absolute inset-0 z-0 opacity-90">
      {m && <Suspense fallback={null}><GoldScene /></Suspense>}
    </div>
  );
}

/** Split hero: cut-out image left, right-aligned headline, 3D gold scene behind. */
export function PageHero({ img, tag, title, accent, children }: { img: string; tag: string; title: string; accent: string; children?: ReactNode }) {
  return (
    <section className="relative h-[86svh] min-h-[600px] overflow-hidden">
      <Scene3D />
      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-end px-6 md:grid-cols-2 md:items-center">
        <div className="pointer-events-none relative hidden h-full md:block">
          <img src={img} alt="" width={1024} height={1280} className="fade-up absolute bottom-0 left-0 h-[90%] w-auto object-contain [mask-image:linear-gradient(to_top,transparent,black_25%)]" />
        </div>
        <div className="fade-up pb-20 md:pb-0 md:text-right">
          <span className="eyebrow inline-block rounded bg-signal px-2.5 py-1 text-destructive-foreground">{tag}</span>
          <h1 className="text-display mt-6">{title}<br /><span className="text-primary">{accent}</span></h1>
          {children}
        </div>
      </div>
    </section>
  );
}
