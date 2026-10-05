"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // The saved theme is only known after hydration. Defer the switch state so
    // the server markup matches the first client render.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration guard
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="gap-inline flex w-full items-center justify-between lg:w-auto">
      <span
        id="theme-toggle-label"
        className="text-body text-text-muted font-bold"
      >
        Dark Mode
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={mounted ? isDark : false}
        aria-labelledby="theme-toggle-label"
        onClick={() => {
          setTheme(isDark ? "light" : "dark");
        }}
        className="bg-toggle-off focus-visible:outline-focus dark:bg-toggle-on relative h-6 w-12 cursor-pointer rounded-full bg-none transition-colors duration-300 before:absolute before:inset-x-0 before:-inset-y-2.5 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="bg-knob absolute top-[3px] left-[3px] size-[18px] rounded-full transition-transform duration-300 motion-reduce:transition-none dark:translate-x-6"
        />
      </button>
    </div>
  );
}
