import {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom"
import Logo from '../assets/react.svg';
import { routes } from "./routes";

export const RoutesNavigation = () => {
  return (
    <Suspense fallback= {null}>
      <Router>
        <div className='main-layout'>
          <nav>
            <img src={Logo} alt="" />
            <ul>
              {routes.map( route => (
                <li key={route.path}>
                  <NavLink to={route.path} activeClassName="nav-active">{route.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routes.map( route => (
              <Route key={route.path} path={route.path} render={ () => <route.Component />}></Route>
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  )
}
