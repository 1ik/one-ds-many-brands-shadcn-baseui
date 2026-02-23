import { DemoGallery } from "@/components/demo/demo-gallery";

export default function DemoPage() {
  return (
    <DemoGallery
      showSwitchers={true}
      title="Demo"
      description="Switch vendor, density, and theme to see tokens update."
      backHref="/"
      backLabel="← Back home"
    />
  );
}
