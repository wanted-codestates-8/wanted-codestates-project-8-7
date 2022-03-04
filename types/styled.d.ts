import "styled-components";

import { Theme } from "../pages/_app";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
