import type { Metadata } from "next";
import "@/styles/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Base UI · shadcn · CVA · Modern FE",
  description: "pnpm monorepo with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-vendor="acme" data-density="comfortable">
      <body className="antialiased" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
