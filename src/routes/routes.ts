import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayoutComponent = lazy( () => import(/* LazyPage1.chunks.js*/'../01-lazyload/layout/LazyLayout'));

export const routes: Routes[] = [
  {
    to: 'lazyload',
    path: '/lazyload/*',
    Component: LazyLayoutComponent,
    name: 'Lazy-layout Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No-lazy'
  },
]