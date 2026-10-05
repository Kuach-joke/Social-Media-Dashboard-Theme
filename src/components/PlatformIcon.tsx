import Image from "next/image";
// Static imports get the basePath applied by Next; string paths don't.
import facebookIcon from "../../public/icons/icon-facebook.svg";
import instagramIcon from "../../public/icons/icon-instagram.svg";
import twitterIcon from "../../public/icons/icon-twitter.svg";
import youtubeIcon from "../../public/icons/icon-youtube.svg";
import { platformNames } from "@/data/dashboard-data";
import type { Platform } from "@/types/dashboard";

const icons = {
  facebook: { src: facebookIcon, width: 20, height: 20 },
  twitter: { src: twitterIcon, width: 20, height: 17 },
  instagram: { src: instagramIcon, width: 20, height: 20 },
  youtube: { src: youtubeIcon, width: 20, height: 20 },
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
