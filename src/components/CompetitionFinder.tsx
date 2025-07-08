import { useState, useMemo } from "react";
import competitions from "@/data/competitions.json";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui"; // ← có dùng shadcn

interface Competition {
  id: string;
  name: string;
  age_range?: string | null;
  gpa_min?: number | null;
}

export default function CompetitionFinder() {
  const [age, setAge] = useState<number | "">("");
  const [gpa, setGpa] = useState<number | "">("");
  const [query, setQuery] = useState<{ age?: number; gpa?: number } | null>(
    null,
  );

  const filtered = useMemo(() => {
    if (!query) return [] as Competition[];
    return (competitions as Competition[]).filter((c) => {
      if (query.age && c.age_range && c.age_range.match(/\\d+/)) {
        const [min] = c.age_range.match(/\\d+/)!;
        if (+min > query.age) return false;
      }
      if (c.gpa_min && query.gpa && query.gpa < c.gpa_min) return false;
      return true;
    });
  }, [query]);

  return (
    <div className="py-6 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="px-6 py-3 text-lg rounded-2xl">
            Find a competition
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-2">
              Enter your info
            </DialogTitle>
          </DialogHeader>

          <Input
            placeholder="Age"
            type="number"
            min={5}
            max={30}
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="mb-3"
          />
          <Input
            placeholder="GPA (0-4.0)"
            type="number"
            step={0.01}
            min={0}
            max={4}
            value={gpa}
            onChange={(e) =>
              setGpa(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="mb-4"
          />

          <Button
            className="w-full"
            disabled={age === "" || gpa === ""}
            onClick={() => setQuery({ age: Number(age), gpa: Number(gpa) })}
          >
            Search
          </Button>

          {query && (
            <div className="mt-6 max-h-60 overflow-y-auto space-y-2">
              {filtered.length ? (
                filtered.map((c) => (
                  <Card key={c.id} className="rounded-xl shadow-md">
                    <CardContent className="p-3 text-left">
                      <p className="font-semibold">{c.name}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center">
                  No match found.
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
