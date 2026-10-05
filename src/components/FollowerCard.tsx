import { PlatformIcon, PlatformName } from "@/components/PlatformIcon";
import { TrendChange } from "@/components/TrendChange";
import { formatCount } from "@/lib/format";
import type { FollowerStat, Platform } from "@/types/dashboard";

const accentClassName: Record<Platform, string> = {
  facebook: "bg-facebook",
  twitter: "bg-twitter",
  instagram: "bg-instagram",
  youtube: "bg-youtube",
};

type FollowerCardProps = {
  follower: FollowerStat;
};

export function FollowerCard({ follower }: FollowerCardProps) {
  return (
    <article className="min-h-follower gap-card rounded-card bg-card px-card py-grid hover:bg-card-hover relative flex flex-col items-center justify-center overflow-hidden text-center transition-colors duration-200 motion-reduce:transition-none">
      <span
        aria-hidden="true"
        className={`h-accent rounded-t-card absolute inset-x-0 top-0 ${accentClassName[follower.platform]}`}
      />
      <p className="gap-stack text-label text-text-muted flex items-center font-bold">
        <PlatformIcon platform={follower.platform} />
        <PlatformName platform={follower.platform} />
        <span>{follower.handle}</span>
      </p>
      <div className="gap-stack flex flex-col items-center">
        <p className="text-count tracking-count text-text-primary font-bold">
          {formatCount(follower.count)}
        </p>
        <p className="text-label tracking-label text-text-muted">
          {follower.metricLabel}
        </p>
      </div>
      <TrendChange
        change={follower.change}
        trend={follower.trend}
        unit="today"
      />
    </article>
  );
}
