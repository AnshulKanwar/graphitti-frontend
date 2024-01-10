import ContributionGraph from "@/components/graph/contribution-graph";

export default function Home() {
  return (
    <main className="mt-20 max-w-fit mx-auto px-5">
      <div>
        <div className="text-center space-y-5 mb-20">
          <span className="text-4xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Graphitti
          </span>
          <p className="text-lg font-medium text-zinc-500">
            Make art on your github contribution graph
          </p>
        </div>
        <ContributionGraph />
      </div>
    </main>
  );
}
