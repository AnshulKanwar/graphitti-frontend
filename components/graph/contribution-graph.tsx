"use client";
import { useState } from "react";
import Graph from "./graph";
import { Point } from "@/lib/point";
import { download } from "@/lib/utils";
import { Button } from "../ui/button";
import { FolderDown, Loader, RotateCcw } from "lucide-react";
import ConfigForm from "./config-form";

export default function ContributionGraph() {
  const [art, setArt] = useState<Point[]>([]);
  const [config, setConfig] = useState({
    name: "",
    email: "",
    year: new Date().getFullYear(),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onPixelClick = (p: Point) => {
    setArt((prev) => {
      const idx = prev.findIndex((q) => p.x === q.x && p.y == q.y);
      if (idx === -1) {
        return [...prev, p];
      } else {
        return prev.filter((q) => !(p.x === q.x && p.y == q.y));
      }
    });
  };

  const reset = () => {
    setArt([]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeYear = (value: string) => {
    setConfig((prev) => ({ ...prev, year: parseInt(value) }));
  };

  const generate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ config, art }),
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
    <div className="max-w-fit">
      <div className="flex gap-5 mb-10">
        <ConfigForm
          {...config}
          onChange={onChange}
          onChangeYear={onChangeYear}
        />
      </div>
      <Graph art={art} year={config.year} handleClick={onPixelClick} />
      <div className="flex justify-end mt-5 gap-2">
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="mr-2 w-4 h-4" />
          Reset
        </Button>
        <Button onClick={generate} className="w-[125px]">
          {isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <FolderDown className="mr-2 w-4 h-4" />
              Download
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
