import { formatTotal } from "@/lib/format";

type TotalFollowersProps = {
  total: number;
};

export function TotalFollowers({ total }: TotalFollowersProps) {
  return (
    <p className="text-body text-text-muted font-bold">
      Total Followers: {formatTotal(total)}
    </p>
  );
}
