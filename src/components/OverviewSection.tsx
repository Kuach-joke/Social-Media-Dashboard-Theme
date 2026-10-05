import { StatCard } from "@/components/StatCard";
import type { OverviewStat } from "@/types/dashboard";

type OverviewSectionProps = {
  stats: OverviewStat[];
};

export function OverviewSection({ stats }: OverviewSectionProps) {
  return (
    <section
      aria-labelledby="overview-heading"
      className="gap-card flex flex-col"
    >
      <h2
        id="overview-heading"
        className="text-section text-overview-heading font-bold"
      >
        Overview - Today
      </h2>
      <ul className="gap-inline md:gap-grid lg:gap-x-grid lg:gap-y-card grid list-none grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.id}>
            <StatCard stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}
