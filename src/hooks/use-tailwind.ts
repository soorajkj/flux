"use client";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export function useTailwind() {
  const { theme } = resolveConfig(tailwindConfig);
  return theme;
}
