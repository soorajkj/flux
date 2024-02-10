import tailwindConfig from "tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export default function useTailwind() {
  return resolveConfig(tailwindConfig).theme;
}
