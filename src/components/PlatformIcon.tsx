import Image from "next/image";
import { platformNames } from "@/data/dashboard-data";
import type { Platform } from "@/types/dashboard";

const icons = {
  facebook: { src: "/icons/icon-facebook.svg", width: 20, height: 20 },
  twitter: { src: "/icons/icon-twitter.svg", width: 20, height: 17 },
  instagram: { src: "/icons/icon-instagram.svg", width: 20, height: 20 },
  youtube: { src: "/icons/icon-youtube.svg", width: 20, height: 20 },
} as const;

type PlatformIconProps = {
  platform: Platform;
};

export function PlatformIcon({ platform }: PlatformIconProps) {
  const icon = icons[platform];

  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      aria-hidden="true"
      unoptimized
    />
  );
}

export function PlatformName({ platform }: PlatformIconProps) {
  return <span className="sr-only">{platformNames[platform]}</span>;
}
