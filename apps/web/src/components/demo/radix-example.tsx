"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/**
 * Minimal Radix Dialog wired to the same token styling as Base UI DS.
 * Demonstrates interoperability: both libraries consume hsl(var(--...)) tokens.
 */
export function RadixExample() {
  return (
    <section
      className="flex flex-col gap-6 rounded-lg border p-4"
      style={{
        borderColor: "hsl(var(--border))",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <h2 className="text-lg font-semibold">Radix primitive example</h2>

      <RadixDialog.Root>
        <RadixDialog.Trigger asChild>
          <Button variant="outline" size="md">
            Open Radix dialog
          </Button>
        </RadixDialog.Trigger>
        <RadixDialog.Portal>
          <RadixDialog.Overlay
            className={cn(
              "fixed inset-0 z-50",
              "bg-[hsl(var(--foreground)/0.4)]",
              "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-200"
            )}
          />
          <RadixDialog.Content
            className={cn(
              "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
              "rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-[var(--space-6)] text-[hsl(var(--card-foreground))]",
              "shadow-[0_4px_6px_-1px_hsl(var(--foreground)/0.1),0_10px_15px_-3px_hsl(var(--foreground)/0.08)]",
              "data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=closed]:scale-95 transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
            )}
          >
            <RadixDialog.Title className="text-lg font-semibold leading-none">
              Radix dialog
            </RadixDialog.Title>
            <RadixDialog.Description
              className="mt-2 text-sm"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Styled with the same design tokens. Coexists with Base UI components.
            </RadixDialog.Description>
            <div className="mt-6 flex justify-end">
              <RadixDialog.Close asChild>
                <Button variant="outline" size="md">
                  Close
                </Button>
              </RadixDialog.Close>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </section>
  );
}
