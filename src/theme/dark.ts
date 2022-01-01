import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  colors: darkColors,
  isDark: true,
  ...base,
};

export default darkTheme;