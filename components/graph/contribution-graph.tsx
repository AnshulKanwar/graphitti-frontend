"use client";
import { useState } from "react";
import Graph from "./graph";
import { Point } from "@/lib/point";
import { download } from "@/lib/utils";
import { Button } from "../ui/button";
import { FolderDown, RotateCcw } from "lucide-react";

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<Point[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onPixelClick = (p: Point) => {
    setContributions((prev) => {
      const idx = prev.findIndex((q) => p.x === q.x && p.y == q.y);
      if (idx === -1) {
        return [...prev, p];
      } else {
        return prev.filter((q) => !(p.x === q.x && p.y == q.y));
      }
    });
  };

  const reset = () => {
    setContributions([]);
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
      <Graph contributions={contributions} handleClick={onPixelClick} />
      <div className="flex justify-end mt-5 gap-2">
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="mr-2 w-4 h-4" />
          Reset
        </Button>
        <Button onClick={generate}>
          <FolderDown className="mr-2 w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
