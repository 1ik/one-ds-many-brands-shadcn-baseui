"use client";

export function ThemeSwitcher() {
  function toggleDark() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium opacity-80">Theme</span>
      <button
        type="button"
        onClick={toggleDark}
        className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-1.5 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
        style={{ borderRadius: "var(--radius-md)" }}
      >
        Toggle dark
      </button>
    </div>
  );
}
