"use client";

import * as BaseTooltip from "@base-ui/react/tooltip";
import { cn } from "@/lib/cn";

const TooltipProvider = BaseTooltip.Tooltip.Provider;

const Tooltip = BaseTooltip.Tooltip.Root;

const TooltipTrigger = BaseTooltip.Tooltip.Trigger;

function TooltipContent({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseTooltip.Tooltip.Popup>, "children"> & {
  children?: React.ReactNode;
}) {
  return (
    <BaseTooltip.Tooltip.Portal>
      <BaseTooltip.Tooltip.Positioner>
        <BaseTooltip.Tooltip.Popup
          className={cn(
            "z-50 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-[var(--space-3)] py-[var(--space-2)] text-sm text-[hsl(var(--card-foreground))]",
            "shadow-[0_2px_4px_hsl(var(--foreground)/0.06)]",
            "data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 transition-all duration-200",
            className
          )}
          {...props}
        >
          {children}
        </BaseTooltip.Tooltip.Popup>
      </BaseTooltip.Tooltip.Positioner>
    </BaseTooltip.Tooltip.Portal>
  );
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
