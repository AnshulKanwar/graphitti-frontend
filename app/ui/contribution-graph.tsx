"use client";
import { useState } from "react";
import Graph from "./graph";
import { Point, download } from "../lib";

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
        <button
          onClick={generate}
          className="flex gap-2 justify-center items-center bg-[#1f883d] hover:bg-[#1a7f37] text-white text-sm font-medium w-32 px-3 py-2 rounded-md border border-[#1f2328]/[0/15]"
        >
          {isLoading ? (
            <span className="animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="lucide lucide-loader"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L12 6"></path>
                <path d="M12 18L12 22"></path>
                <path d="M4.93 4.93L7.76 7.76"></path>
                <path d="M16.24 16.24L19.07 19.07"></path>
                <path d="M2 12L6 12"></path>
                <path d="M18 12L22 12"></path>
                <path d="M4.93 19.07L7.76 16.24"></path>
                <path d="M16.24 7.76L19.07 4.93"></path>
              </svg>
            </span>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="lucide lucide-folder-down"
                viewBox="0 0 24 24"
              >
                <path d="M20 20a2 2 0 002-2V8a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L9.6 3.9A2 2 0 007.93 3H4a2 2 0 00-2 2v13a2 2 0 002 2zM12 10v6"></path>
                <path d="M15 13l-3 3-3-3"></path>
              </svg>
              Download
            </>
          )}
        </button>
      </div>
    </div>
  );
}
