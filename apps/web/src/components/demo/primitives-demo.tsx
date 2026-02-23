"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PrimitivesDemo() {
  return (
    <section
      className="flex flex-col gap-6 rounded-lg border p-4"
      style={{
        borderColor: "hsl(var(--border))",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <h2 className="text-lg font-semibold">Base UI primitives</h2>

      <div className="flex flex-wrap items-center gap-4">
        <Dialog>
          <DialogTrigger
            render={(props) => (
              <Button {...props} variant="outline" size="md">
                Open dialog
              </Button>
            )}
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>
                This dialog uses token-driven styling. Change vendor, density, or theme to see it update.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Tooltip>
          <TooltipTrigger
            render={(props) => (
              <Button {...props} variant="secondary" size="md" aria-label="Show tooltip">
                Hover for tooltip
              </Button>
            )}
          />
          <TooltipContent>Token-styled tooltip</TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={(props) => (
              <Button {...props} variant="outline" size="md">
                Dropdown menu
              </Button>
            )}
          />
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => {}}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
