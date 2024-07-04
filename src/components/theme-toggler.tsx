"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import useMount from "@/hooks/use-mount";
import Icon from "@/components/core/icon";
import Toggle from "@/components/core/toggle";

export default function ThemeToggler() {
  const { themes, theme, setTheme } = useTheme();
  const [nextTheme, setNextTheme] = useState(null);
  const mount = useMount();

  const themesObject = useMemo(() => {
    const obj: Record<string, string> = {};
    for (const theme of themes) obj[theme] = theme;
    const keys = Object.keys(obj);
    delete obj[keys[keys.length - 1]];
    return obj;
  }, [themes]);

  for (const theme of themes) themesObject[theme] = theme;
  let keys = Object.keys(themesObject);
  delete themesObject[keys[keys.length - 1]];

  const handleThemeChange = () => {
    const keys = Object.keys(themesObject);
    const current = keys.indexOf(theme);
    const next = (current + 1) % keys.length;
    setTheme(keys[next]);
  };

  useEffect(() => {
    const Keys = Object.keys(themesObject);
    const current = Keys.indexOf(theme);
    const next = (current + 1) % Keys.length;
    setNextTheme(Keys[next]);
  }, [theme, themesObject]);

  if (!mount) return null;

  return (
    <Toggle
      onClick={handleThemeChange}
      className="fixed bottom-12 right-8 select-none rounded-full border border-transparent bg-zinc-200 px-3 py-3 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
    >
      <Icon icon="palette" label={`change appreance to ${nextTheme}`} />
    </Toggle>
  );
}
