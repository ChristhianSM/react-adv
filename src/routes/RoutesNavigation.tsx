import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"
import Logo from '../assets/react.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const RoutesNavigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <NavLink to={"/lasy1"} activeClassName="nav-active">lasy1</NavLink>
            </li>
            <li>
              <NavLink to={"/lasy2"} activeClassName="nav-active">lasy2</NavLink>
            </li>
            <li>
              <NavLink to={"/lasy3"} activeClassName="nav-active">lasy3</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lasy1">
            <LazyPage1 />
          </Route>
          <Route path="/lasy2">
            <LazyPage2 />
          </Route>
          <Route path="/lasy3">
            <LazyPage3 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
