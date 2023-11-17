
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import Logo from '../assets/react.svg';
import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const RoutesNavigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <NavLink to={"/lazy1"} className={ ({isActive}) => isActive ? 'nav-active' : ''}>lazy1</NavLink>
            </li>
            <li>
              <NavLink to={"/lazy2"} className={ ({isActive}) => isActive ? 'nav-active' : ''}>lazy2</NavLink>
            </li>
            <li>
              <NavLink to={"/lazy3"} className={ ({isActive}) => isActive ? 'nav-active' : ''}>lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='lazy1' element = {<LazyPage />}/>
          <Route path='lazy2' element = {<LazyPage2 />}/>
          <Route path='lazy3' element = {<LazyPage3 />}/>
          
          <Route path='*' element = {<Navigate to={"/home"} replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
