"use client";

import { useEffect, useState } from "react";

function readToken(name: string): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (value) return value;
  return "—";
}

function readResolvedColor(tokenName: string): string {
  const raw = readToken(tokenName);
  if (raw === "—") return raw;
  const div = document.createElement("div");
  div.style.cssText = `background: hsl(var(${tokenName})); position: absolute; left: -9999px;`;
  document.body.appendChild(div);
  const resolved = getComputedStyle(div).backgroundColor;
  document.body.removeChild(div);
  return resolved || `hsl(${raw})`;
}

export function TokenPreview() {
  const [values, setValues] = useState<{
    primary: string;
    background: string;
    radiusMd: string;
    controlMd: string;
  }>({
    primary: "—",
    background: "—",
    radiusMd: "—",
    controlMd: "—",
  });

  function refresh() {
    setValues({
      primary: readResolvedColor("--primary"),
      background: readResolvedColor("--background"),
      radiusMd: readToken("--radius-md"),
      controlMd: readToken("--control-md"),
    });
  }

  useEffect(() => {
    refresh();
    const el = document.documentElement;
    const observer = new MutationObserver(refresh);
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["class", "data-vendor", "data-density"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="rounded-lg border p-4"
      style={{
        borderColor: "hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <h3 className="mb-3 text-sm font-semibold opacity-90">Token preview</h3>
      <dl className="grid gap-2 text-sm">
        <div className="flex gap-2">
          <dt className="min-w-[100px] opacity-75">--primary</dt>
          <dd className="flex items-center gap-2">
            <span
              className="inline-block h-4 w-4 rounded border border-[hsl(var(--border))]"
              style={{ backgroundColor: values.primary, borderRadius: "var(--radius-sm)" }}
            />
            {values.primary}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="min-w-[100px] opacity-75">--background</dt>
          <dd className="flex items-center gap-2">
            <span
              className="inline-block h-4 w-4 rounded border border-[hsl(var(--border))]"
              style={{ backgroundColor: values.background, borderRadius: "var(--radius-sm)" }}
            />
            {values.background}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="min-w-[100px] opacity-75">--radius-md</dt>
          <dd>{values.radiusMd}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="min-w-[100px] opacity-75">--control-md</dt>
          <dd>{values.controlMd}</dd>
        </div>
      </dl>
    </section>
  );
}
