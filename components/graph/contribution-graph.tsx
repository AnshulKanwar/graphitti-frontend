"use client";
import { useState } from "react";
import Graph from "./graph";
import { Point } from "@/lib/point";
import { download } from "@/lib/utils";
import { Button } from "../ui/button";

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<Point[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (p: Point) => {
    setContributions((prev) => {
      const idx = prev.findIndex((q) => p.x === q.x && p.y == q.y);
      if (idx === -1) {
        return [...prev, p];
      } else {
        return prev.filter((q) => !(p.x === q.x && p.y == q.y));
      }
    });
  };

  const generate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/generate", {
        method: "POST",
        body: JSON.stringify(contributions),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const { filename } = await response.json();

      download(filename);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Graph contributions={contributions} handleClick={handleClick} />
      <div className="flex justify-end mt-5">
        <Button variant="outline">Reset</Button>
        <Button onClick={generate}>Download</Button>
      </div>
    </div>
  );
}
