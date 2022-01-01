import { DefaultTheme } from "styled-components";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  ...base,
};

export default lightTheme;