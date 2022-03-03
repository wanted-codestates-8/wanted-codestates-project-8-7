import "styled-components";

import { Theme } from "./_app";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
