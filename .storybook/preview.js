
import React from "react";
//import { ThemeProvider, ThemesProvider } from "themeprovider-storybook";
import { ThemeProvider } from "styled-components";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { withThemes } from "@react-theming/storybook-addon";
import { ThemesProvider, withThemesProvider } from "themeprovider-storybook";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

const globalDecorator = (StoryFn) => (
  <div>
    <ResetCSS />
    <StoryFn />
  </div>
);

export const decorators = [globalDecorator, withThemes(ThemeProvider, themes)];