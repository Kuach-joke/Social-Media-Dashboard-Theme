import { ThemeToggle } from "@/components/ThemeToggle";
import { TotalFollowers } from "@/components/TotalFollowers";

type HeaderProps = {
  title: string;
  totalFollowers: number;
};

export function Header({ title, totalFollowers }: HeaderProps) {
  return (
    <header className="gap-card flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-title text-text-primary font-bold">{title}</h1>
        <TotalFollowers total={totalFollowers} />
      </div>
      <div className="bg-divider h-px w-full lg:hidden" aria-hidden="true" />
      <ThemeToggle />
    </header>
  );
}
