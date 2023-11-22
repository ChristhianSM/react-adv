import React from 'react'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';
import { routes } from '../../routes/routes';

export const Navigation = () => {
  const { path, url } = useRouteMatch();
  console.log({url, path})
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        {routes.map( route => (
          route.children?.map( rou => {
            return (
              <li key={rou.path}>
                <Link to={`${url}${rou.path}`}>{rou.name}</Link>
              </li>
            )
          })
        ))}
       
        {/* <li>
          <Link to={`${url}/lazy2`}>Lazy Page 2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>Lazy Page 3</Link>
        </li> */}
      </ul>
      <Switch>
        <Route path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>
        <Redirect to={`${path}/lazy1`}/>
      </Switch>
    </>
  )
}
