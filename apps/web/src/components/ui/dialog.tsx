"use client";

import * as BaseDialog from "@base-ui/react/dialog";
import { cn } from "@/lib/cn";

const Dialog = BaseDialog.Dialog.Root;

const DialogTrigger = BaseDialog.Dialog.Trigger;

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Dialog.Popup>) {
  return (
    <BaseDialog.Dialog.Portal>
      <BaseDialog.Dialog.Backdrop
        className={cn(
          "fixed inset-0 z-50",
          "bg-[hsl(var(--foreground)/0.4)]",
          "data-[closed]:opacity-0 data-[state=open]:opacity-100 transition-opacity duration-200"
        )}
      />
      <BaseDialog.Dialog.Viewport
        className={cn(
          "fixed left-[50%] top-[50%] z-50 flex w-full max-w-lg translate-x-[-50%] translate-y-[-50%] justify-center p-4"
        )}
      >
        <BaseDialog.Dialog.Popup
          className={cn(
            "w-full rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-[var(--space-6)] text-[hsl(var(--card-foreground))]",
            "shadow-[0_4px_6px_-1px_hsl(var(--foreground)/0.1),0_10px_15px_-3px_hsl(var(--foreground)/0.08)]",
            "data-[closed]:opacity-0 data-[closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 transition-all duration-200",
            className
          )}
          {...props}
        >
          {children}
        </BaseDialog.Dialog.Popup>
      </BaseDialog.Dialog.Viewport>
    </BaseDialog.Dialog.Portal>
  );
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-[var(--space-1)] text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Dialog.Title>) {
  return (
    <BaseDialog.Dialog.Title
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Dialog.Description>) {
  return (
    <BaseDialog.Dialog.Description
      className={cn("text-sm opacity-80", className)}
      style={{ color: "hsl(var(--muted-foreground))" }}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-[var(--space-2)] sm:flex-row sm:justify-end",
        "mt-[var(--space-6)]",
        className
      )}
      {...props}
    />
  );
}

function DialogClose({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Dialog.Close>) {
  return (
    <BaseDialog.Dialog.Close
      className={cn(
        "inline-flex h-[var(--control-md)] items-center justify-center rounded-[var(--radius-md)] px-[var(--space-4)] text-sm font-medium",
        "border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]",
        "hover:bg-[hsl(var(--muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
