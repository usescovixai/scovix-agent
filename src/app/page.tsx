import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import DatasetGrid from "@/components/DatasetGrid";
import EarningsCard from "@/components/EarningsCard";

export default function Home() {
  return (
    <>
      <Hero />
      <UploadCard />
      <DatasetGrid />
      <EarningsCard />
    </>
  );
}
