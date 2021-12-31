import "styled-components";
import { AbesTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends AbesTheme {}
}