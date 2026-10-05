import { FollowerCard } from "@/components/FollowerCard";
import { Header } from "@/components/Header";
import { OverviewSection } from "@/components/OverviewSection";
import { dashboard } from "@/data/dashboard-data";

export default function HomePage() {
  return (
    <div className="bg-background text-text-primary relative min-h-dvh overflow-x-clip transition-colors duration-300 motion-reduce:transition-none">
      <div
        aria-hidden="true"
        className="h-band rounded-b-band bg-pattern md:h-band-wide pointer-events-none absolute inset-x-0 top-0"
      />
      <div className="page-shell relative flex max-w-[90rem] flex-col">
        <Header
          title={dashboard.title}
          totalFollowers={dashboard.totalFollowers}
        />
        <main className="mt-grid gap-section lg:mt-section flex flex-col">
          <section aria-label="Follower totals">
            <h2 className="sr-only">Follower totals</h2>
            <ul className="gap-card md:gap-grid grid list-none grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-4">
              {dashboard.followers.map((follower) => (
                <li key={follower.id}>
                  <FollowerCard follower={follower} />
                </li>
              ))}
            </ul>
          </section>
          <OverviewSection stats={dashboard.overview} />
        </main>
      </div>
    </div>
  );
}
