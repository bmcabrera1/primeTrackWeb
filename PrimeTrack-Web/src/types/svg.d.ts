// Usar SVG como componente React: import Logo from "x.svg?react"
declare module "*.svg?react" {
  import * as React from "react";
  const Component: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default Component;
}

// (opcional) usar SVG como URL: import url from "x.svg"
declare module "*.svg" {
  const src: string;
  export default src;
}
