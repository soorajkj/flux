"use client";

import { useTheme } from "next-themes";
import { cx } from "~lib/utils";
import { ButtonStyles } from "~components/core/button";
import Icon from "~components/core/icon";
import Toggle from "~components/core/toggle";

export default function ThemeToggler() {
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
      className={cx(
        ButtonStyles({ variant: "default" }),
        "fixed bottom-12 right-8 h-10 w-10 rounded-full px-0 py-0"
      )}
      onClick={handleThemeChange}
    >
      <Icon
        icon="palette"
        label="appearance icon"
        width={16}
        height={16}
      ></Icon>
    </Toggle>
  );
}
