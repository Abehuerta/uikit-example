import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
//import light from "../src/theme/light";
//import dark from "../src/theme/dark";
//import ResetCSS from "../src/ResetCSS";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/*
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

export const decorators = [globalDecorator, withThemesProvider(themes)];
*/