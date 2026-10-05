import Image from "next/image";
import downIcon from "../../public/icons/icon-down.svg";
import upIcon from "../../public/icons/icon-up.svg";
import type { Trend } from "@/types/dashboard";

type TrendChangeProps = {
  change: number;
  trend: Trend;
  unit: "today" | "percent";
};

export function TrendChange({ change, trend, unit }: TrendChangeProps) {
  const isUp = trend === "up";
  const visible = unit === "today" ? `${change} Today` : `${change}%`;
  const spoken = unit === "today" ? `${change} today` : `${change} percent`;

  return (
    <p
      className={`gap-stack text-label flex items-center font-bold ${
        isUp ? "text-accent-up" : "text-accent-down"
      }`}
    >
      <Image
        src={isUp ? upIcon : downIcon}
        alt=""
        width={8}
        height={4}
        aria-hidden="true"
        unoptimized
      />
      <span className="sr-only">
        {isUp ? "Up" : "Down"} {spoken}
      </span>
      <span aria-hidden="true">{visible}</span>
    </p>
  );
}
