"use client";

const VENDORS = ["acme", "globex", "initech"] as const;
export type Vendor = (typeof VENDORS)[number];

export function VendorSwitcher() {
  function setVendor(value: Vendor) {
    document.documentElement.dataset.vendor = value;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium opacity-80">Vendor</span>
      {VENDORS.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => setVendor(v)}
          className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-1.5 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
          style={{ borderRadius: "var(--radius-md)" }}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
