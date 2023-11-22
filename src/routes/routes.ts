import {LazyExoticComponent, lazy} from 'react';
import { NoLazyLoad } from '../01-lazyload/pages/NoLazyLoad';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

// const LazyPage1 = lazy( () => import('../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy( () => import('../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy( () => import('../01-lazyload/pages/LazyPage3'));
const LazyLayoutMainPage = lazy( () => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: "/lazy-layout-page",
    Component: LazyLayoutMainPage,
    name: "LazyLayoutMainPage",
    children: [
      {
        path: "/lazy1",
        Component: LazyPage1,
        name: "Lazy1",
      },
      {
        path: "/lazy2",
        Component: LazyPage2,
        name: "Lazy2",
      },
      {
        path: "/lazy3",
        Component: LazyPage3,
        name: "Lazy3",
      },
    ]
  },
  {
    path: "/no-lazy",
    Component: NoLazyLoad,
    name: "No Lazy Load"
  },
]