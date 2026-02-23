import Link from "next/link";
import { VendorSwitcher } from "@/components/demo/vendor-switcher";
import { DensitySwitcher } from "@/components/demo/density-switcher";
import { ThemeSwitcher } from "@/components/demo/theme-switcher";
import { TokenPreview } from "@/components/demo/token-preview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PrimitivesDemo } from "@/components/demo/primitives-demo";
import { RadixExample } from "@/components/demo/radix-example";
import { cn } from "@/lib/cn";

interface DemoGalleryProps {
  showSwitchers?: boolean;
  title?: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export function DemoGallery({
  showSwitchers = true,
  title = "Demo",
  description = "Switch vendor, density, and theme to see tokens update.",
  backHref = "/",
  backLabel = "← Back home",
}: DemoGalleryProps) {
  return (
    <main
      className={cn("min-h-screen p-8")}
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="mb-6 flex items-center gap-4">
        <Link
          href={backHref}
          className="text-sm opacity-80 hover:underline"
          style={{ color: "hsl(var(--primary))" }}
        >
          {backLabel}
        </Link>
      </div>

      <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
      <p className="mb-8 text-sm opacity-80" style={{ color: "hsl(var(--muted-foreground))" }}>
        {description}
      </p>

      <div className="flex flex-col gap-6">
        {showSwitchers && (
          <div
            className="flex flex-wrap gap-6 rounded-lg border p-4"
            style={{
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius-lg)",
              gap: "var(--space-4)",
            }}
          >
            <VendorSwitcher />
            <DensitySwitcher />
            <ThemeSwitcher />
          </div>
        )}

        <TokenPreview />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <PrimitivesDemo />
          <RadixExample />
        </div>

        <section
          className="flex flex-col gap-6 rounded-lg border p-4"
          style={{
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <h2 className="text-lg font-semibold">Button gallery</h2>

          <div className="flex flex-col gap-3">
            <span className="text-sm opacity-80">Variants (md)</span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default" size="md">
                Default
              </Button>
              <Button variant="secondary" size="md">
                Secondary
              </Button>
              <Button variant="outline" size="md">
                Outline
              </Button>
              <Button variant="ghost" size="md">
                Ghost
              </Button>
              <Button variant="destructive" size="md">
                Destructive
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm opacity-80">Sizes (default variant)</span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default" size="sm">
                Small
              </Button>
              <Button variant="default" size="md">
                Medium
              </Button>
              <Button variant="default" size="lg">
                Large
              </Button>
              <Button variant="default" size="icon" aria-label="Icon button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5v14" />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Card with Input and Buttons</CardTitle>
            <CardDescription>
              All use tokens; vendor, density, and theme apply consistently.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-[var(--space-4)]">
            <Input placeholder="Token-driven input" />
            <div className="flex flex-wrap gap-[var(--space-2)]">
              <Button variant="default" size="md">
                Submit
              </Button>
              <Button variant="outline" size="md">
                Cancel
              </Button>
              <Button variant="ghost" size="md">
                Skip
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs opacity-75" style={{ color: "hsl(var(--muted-foreground))" }}>
              Card footer
            </span>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
