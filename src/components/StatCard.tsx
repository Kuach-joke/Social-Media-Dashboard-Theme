import { PlatformIcon, PlatformName } from "@/components/PlatformIcon";
import { TrendChange } from "@/components/TrendChange";
import { formatCount } from "@/lib/format";
import type { OverviewStat } from "@/types/dashboard";

type StatCardProps = {
  stat: OverviewStat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="min-h-overview rounded-card bg-card p-card hover:bg-card-hover flex flex-col justify-center transition-colors duration-200 motion-reduce:transition-none">
      <div className="gap-inline flex items-start justify-between">
        <div className="gap-card flex min-w-0 flex-col">
          <h3 className="text-body text-text-muted font-bold">{stat.label}</h3>
          <p className="text-stat text-text-primary font-bold">
            {formatCount(stat.value)}
          </p>
        </div>
        <div className="gap-trend flex shrink-0 flex-col items-end">
          <PlatformIcon platform={stat.platform} />
          <PlatformName platform={stat.platform} />
          <TrendChange change={stat.change} trend={stat.trend} unit="percent" />
        </div>
      </div>
    </article>
  );
}
