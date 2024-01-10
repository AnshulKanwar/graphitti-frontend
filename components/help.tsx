"use client";
import { HoverCard, HoverCardContent } from "./ui/hover-card";
import { HoverCardTrigger } from "@radix-ui/react-hover-card";
import { HelpCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Help() {
  return (
    <HoverCard openDelay={200} defaultOpen>
      <HoverCardTrigger>
        <HelpCircle
          className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}
        />
      </HoverCardTrigger>
      <HoverCardContent>
        <div>
          <div className="font-semibold mb-4">How to use this?</div>
          <ol className="text-sm list-decimal list-inside space-y-3">
            <li>Enter the same email address that you use on your github.</li>
            <li>
              Select the year where you want the art to show up on you profile.
            </li>
            <li>
              Push the downloaded git repo to github. For help see{" "}
              <Link
                href="https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                this
              </Link>
              .
            </li>
          </ol>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
