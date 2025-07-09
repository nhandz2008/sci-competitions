import competitions from "@/data/competitions.json";
import { notFound } from "next/navigation";
import Countdown from "@/components/Countdown";
import type { PageProps } from "next";

export default function Competition({
  params,
}: PageProps<{ id: string }>) {
  const comp = competitions.find((c) => c.id === params.id);
  if (!comp) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{comp.name}</h1>
      <p className="text-gray-600 mb-4">{comp.scope}</p>
      <Countdown deadline={comp.deadline!} />
      <p className="mt-6">{comp.description}</p>
      <a
        href={comp.website}
        target="_blank"
        rel="noopener"
        className="text-blue-600 underline mt-4 inline-block"
      >
        Official website
      </a>
    </main>
  );
}
