export type Platform = "facebook" | "twitter" | "instagram" | "youtube";

export type Trend = "up" | "down";

export type FollowerStat = {
  id: string;
  platform: Platform;
  handle: string;
  count: number;
  metricLabel: string;
  change: number;
  trend: Trend;
};

export type OverviewStat = {
  id: string;
  platform: Platform;
  label: string;
  value: number;
  change: number;
  trend: Trend;
};

export type DashboardData = {
  title: string;
  totalFollowers: number;
  followers: FollowerStat[];
  overview: OverviewStat[];
};
