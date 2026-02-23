# Base UI · shadcn · CVA · Modern FE

A **design-system-in-repo** stack for one product with **multiple partner (vendor) themes**. Tokens drive styling; components stay theme-agnostic; you can mix primitives (Base UI, Radix) and scale to a monorepo.

---

## The problem: same product, multiple partner themes

You ship one product (e.g. a dashboard or portal) but each partner (Acme, Globex, Initech) gets a **branded experience**: different primary color, corner radius, typography, and sometimes density. Requirements:

- **Single codebase** — no forking per partner.
- **Consistent behavior** — same components and accessibility everywhere.
- **Theme by configuration** — swap tokens, not component code.
- **Screenshot-friendly** — lock a route to a vendor for stable visuals.

This repo shows how to get there with **CSS design tokens**, **shadcn-style components**, **CVA**, and **primitives** (Base UI + Radix) that all consume the same tokens.

---

## Architecture: tokens → DS → app → primitives

```
┌─────────────────────────────────────────────────────────────────┐
│  App & pages                                                     │
│  (e.g. /demo, /vendors/[vendor])                                 │
└────────────────────────────┬────────────────────────────────────┘
                             │ uses
┌────────────────────────────▼────────────────────────────────────┐
│  Design system (DS) components                                   │
│  Button, Input, Card, Dialog, Tooltip, DropdownMenu              │
│  Styled only via tokens: hsl(var(--primary)), var(--radius-md)   │
└────────────────────────────┬────────────────────────────────────┘
                             │ wraps / composes
┌────────────────────────────▼────────────────────────────────────┐
│  Primitives (Base UI, Radix)                                     │
│  Unstyled behavior: focus trap, keyboard, ARIA                   │
│  We apply the same token-based classes to their parts           │
└────────────────────────────┬────────────────────────────────────┘
                             │ reads
┌────────────────────────────▼────────────────────────────────────┐
│  Design tokens (CSS variables)                                   │
│  tokens.css: --background, --primary, --radius-md, --control-md  │
│  vendors.css: [data-vendor="acme"], [data-density="compact"]     │
└─────────────────────────────────────────────────────────────────┘
```

- **Tokens** define the single source of truth (colors, spacing, radius, control heights).
- **DS components** never hardcode colors or sizes; they use `hsl(var(--...))` and `var(--...)`.
- **App** uses only DS components (and the occasional primitive wired with tokens).
- **Primitives** provide behavior; we style their DOM with the same token classes so vendor/dark/density apply everywhere.

---

## Why shadcn-style (components as code)

We don’t use the shadcn CLI here; we follow the **pattern**: copy components into the repo and own the code.

- **Full control** — tweak API, variants, and tokens without waiting on a library release.
- **No black box** — every style is in your codebase and traceable to tokens.
- **Same stack** — Tailwind + CVA + `cn()` (clsx + tailwind-merge); works with any primitive that accepts `className`.
- **Easy theming** — change tokens and the whole UI follows; no component changes.

---

## Why CVA (class-variance-authority)

CVA gives a **single, declarative API** for variants and sizes:

- **Variants** — e.g. `default` | `secondary` | `outline` | `ghost` | `destructive` for Button.
- **Sizes** — e.g. `sm` | `md` | `lg` | `icon`, mapped to token heights and padding (`var(--control-md)`, `var(--space-4)`).

Benefits:

- **Type-safe** — `VariantProps<typeof buttonVariants>` gives correct prop types.
- **Composable** — `cn(buttonVariants({ variant, size }), className)` lets callers extend or override.
- **Token-driven** — variant/size classes reference only tokens, so vendor/density/dark flow through without extra logic.

---

## How multi-vendor theming works

Theming is driven by **attributes and a class** on `<html>`:

| Mechanism        | Attribute / class              | What it overrides                          |
|------------------|--------------------------------|--------------------------------------------|
| **Vendor**       | `data-vendor="acme"` (etc.)    | Primary color, radius, font (in vendors.css)|
| **Density**      | `data-density="comfortable"` or `compact` | Control heights, space scale       |
| **Light / dark** | `class="dark"`                 | All semantic color tokens (in tokens.css)  |

- **tokens.css** — Defines default and `.dark` values for semantic and metric tokens.
- **vendors.css** — Defines `[data-vendor="acme"]`, `[data-vendor="globex"]`, `[data-vendor="initech"]` and `[data-density="..."]` overrides. Only tokens are overridden; no new colors or magic values in components.

Components never read vendor or density; they just use `var(--primary)`, `var(--radius-md)`, `var(--control-md)`, etc. The browser resolves those from the current `data-*` and `.dark` state.

---

## Mixing libraries safely (Base UI + Radix)

We use **Base UI** for Dialog, Tooltip, and Menu and **Radix** for a second Dialog example. Both are styled with the **same token classes**:

- Base UI: thin wrappers in `src/components/ui/*` that apply token-based `className`s to Base UI parts.
- Radix: `radix-example.tsx` uses `@radix-ui/react-dialog` with the same `hsl(var(--...))` and `var(--radius-lg)` patterns.

So:

- **One token system** themes both libraries.
- **No duplicate theming logic** — same CSS variables, same Tailwind arbitrary values.
- **Interop** — e.g. a Radix dialog and a Base UI dialog side by side both respond to vendor/dark/density.

A small **radix-bridge.css** can apply token-based focus or overlay rules to Radix parts when you don’t pass a `className`. The app imports it globally so Radix stays on-brand.

---

## Scaling to a monorepo

To scale beyond a single app:

1. **`packages/tokens`** — Publish `tokens.css` and `vendors.css` (and any theme JSON/TS if you need it for non-CSS). Apps and `packages/ui` depend on it and import the CSS.
2. **`packages/ui`** — Publish Button, Input, Card, Dialog, Tooltip, DropdownMenu (and any other DS components). They depend on `packages/tokens` and Tailwind; they export React components that use `var(--...)` and `hsl(var(--...))` only.
3. **Apps** — e.g. `apps/web`, `apps/partner-portal`. They depend on `packages/ui` and `packages/tokens`, and optionally use Radix/Base UI in app code with the same token styling.

The important rule: **only tokens live in `packages/tokens`; only token-referencing components live in `packages/ui`; apps never hardcode theme values.**

---

## Commands

From the **repo root**:

| Command       | Description                |
|---------------|----------------------------|
| `pnpm install`| Install dependencies       |
| `pnpm dev`    | Start Next.js dev server   |
| `pnpm build`  | Build Next.js app          |
| `pnpm start`  | Run production server      |
| `pnpm lint`   | Lint workspace packages    |

The Next.js app lives in `apps/web`. Routes:

- **`/`** — Home
- **`/demo`** — Full component gallery + vendor/density/theme switchers
- **`/vendors/[vendor]`** — Same gallery with theme **locked** to `acme` | `globex` | `initech` (for screenshots)

---
## License

MIT.
