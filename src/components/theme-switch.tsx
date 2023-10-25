"use client";

import { useTheme } from "next-themes";
import { Icon } from "~components/core/icon";
import { Toggle } from "~components/core/toggle";

export default function ThemeSwitch() {
  const { themes, theme, setTheme } = useTheme();
  const themesObject: Record<string, string> = {};

  for (const theme of themes) themesObject[theme] = theme;
  let keys = Object.keys(themesObject);
  delete themesObject[keys[keys.length - 1]];

  const handleThemeChange = () => {
    const keys = Object.keys(themesObject);
    const current = keys.indexOf(theme);
    const next = (current + 1) % keys.length;
    setTheme(keys[next]);
  };

  return (
    <Toggle
      aria-label="toggle application appearance"
      className="absolute bottom-16 right-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 shadow dark:bg-stone-950"
      onClick={() => handleThemeChange()}
    >
      <Icon icon="palette" label="appearance icon"></Icon>
    </Toggle>
  );
}
