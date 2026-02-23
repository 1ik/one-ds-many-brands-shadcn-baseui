import { notFound } from "next/navigation";
import { DemoGallery } from "@/components/demo/demo-gallery";
import { VendorLock, isValidVendor } from "@/components/demo/vendor-lock";

interface VendorPageProps {
  params: Promise<{ vendor: string }>;
}

export default async function VendorPage({ params }: VendorPageProps) {
  const { vendor } = await params;

  if (!isValidVendor(vendor)) {
    notFound();
  }

  const label = vendor.charAt(0).toUpperCase() + vendor.slice(1);

  return (
    <VendorLock vendor={vendor}>
      <DemoGallery
        showSwitchers={false}
        title={`Vendor: ${label}`}
        description="Theme locked to this vendor for consistent screenshots."
        backHref="/demo"
        backLabel="← Back to demo"
      />
    </VendorLock>
  );
}
