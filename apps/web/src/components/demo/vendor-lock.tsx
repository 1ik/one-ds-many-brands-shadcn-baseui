"use client";

import { useEffect } from "react";

const VALID_VENDORS = ["acme", "globex", "initech"] as const;
export type VendorLockVendor = (typeof VALID_VENDORS)[number];

export function isValidVendor(v: string): v is VendorLockVendor {
  return VALID_VENDORS.includes(v as VendorLockVendor);
}

interface VendorLockProps {
  vendor: VendorLockVendor;
  density?: "comfortable" | "compact";
  children: React.ReactNode;
}

/**
 * Locks document.documentElement data-vendor (and optional data-density) to the given values.
 * Use on vendor-specific routes (e.g. /vendors/acme) for consistent screenshots.
 */
export function VendorLock({ vendor, density = "comfortable", children }: VendorLockProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.vendor = vendor;
    root.dataset.density = density;
    return () => {
      delete root.dataset.vendor;
      delete root.dataset.density;
    };
  }, [vendor, density]);

  return <>{children}</>;
}
