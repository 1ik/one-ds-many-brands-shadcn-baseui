"use client";

const DENSITIES = ["comfortable", "compact"] as const;
export type Density = (typeof DENSITIES)[number];

export function DensitySwitcher() {
  function setDensity(value: Density) {
    document.documentElement.dataset.density = value;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium opacity-80">Density</span>
      {DENSITIES.map((d) => (
        <button
          key={d}
          type="button"
          onClick={() => setDensity(d)}
          className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-1.5 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
          style={{ borderRadius: "var(--radius-md)" }}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
