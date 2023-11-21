import { LazyExoticComponent, lazy } from "react";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy( () => import(/* LazyPage1.chunks.js*/'../01-lazyload/pages/LazyPage'));
const Lazy2 = lazy( () => import('../01-lazyload/pages/LazyPage'));
const Lazy3 = lazy( () => import('../01-lazyload/pages/LazyPage'));

export const routes: Routes[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3'
  },
]