import CompetitionFinder from "@/components/CompetitionFinder";
import UpcomingCarousel from "@/components/UpcomingCarousel";

export default function Home() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Global STEM Competition Portal
      </h1>

      <UpcomingCarousel />
      <CompetitionFinder />
    </main>
  );
}
