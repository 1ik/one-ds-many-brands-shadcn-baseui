"use client";

import * as BaseMenu from "@base-ui/react/menu";
import { cn } from "@/lib/cn";

const DropdownMenu = BaseMenu.Menu.Root;

const DropdownMenuTrigger = BaseMenu.Menu.Trigger;

function DropdownMenuContent({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseMenu.Menu.Popup>, "children"> & {
  children?: React.ReactNode;
}) {
  return (
    <BaseMenu.Menu.Portal>
      <BaseMenu.Menu.Positioner>
        <BaseMenu.Menu.Popup
          className={cn(
            "z-50 min-w-[8rem] rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-[var(--space-1)] text-[hsl(var(--card-foreground))]",
            "shadow-[0_4px_6px_-1px_hsl(var(--foreground)/0.1),0_10px_15px_-3px_hsl(var(--foreground)/0.08)]",
            "data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 transition-all duration-200",
            className
          )}
          {...props}
        >
          {children}
        </BaseMenu.Menu.Popup>
      </BaseMenu.Menu.Positioner>
    </BaseMenu.Menu.Portal>
  );
}

function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Menu.Item>) {
  return (
    <BaseMenu.Menu.Item
      className={cn(
        "relative flex cursor-default select-none items-center gap-[var(--space-2)] rounded-[var(--radius-sm)] px-[var(--space-2)] py-[var(--space-2)] text-sm outline-none",
        "focus:bg-[hsl(var(--muted))] focus:text-[hsl(var(--foreground))]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
