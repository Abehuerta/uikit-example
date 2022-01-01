import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";

export interface AbesTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { darkColors, lightColors } from "./colors";
export { default as light } from "./light";
export { default as dark } from "./dark";
export * from "./types";