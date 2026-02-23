import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-8"
      )}
    >
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
        Base UI · shadcn · CVA · Modern FE
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        pnpm monorepo · Next.js app
      </p>
      <Link
        href="/demo"
        className="mt-8 text-blue-600 dark:text-blue-400 hover:underline"
      >
        Go to demo →
      </Link>
    </main>
  );
}
