import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { LazyPage, LazyPage2, LazyPage3 } from '../pages'

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Component</h1>
      <ul>
        <li>
          <NavLink to="lasy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lasy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lasy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/lasy1' element ={<LazyPage />}/>
        <Route path='/lasy2' element ={<LazyPage2 />}/>
        <Route path='/lasy3' element ={<LazyPage3 />}/>

        {/* <Route path='/*' element ={<div>Not Found</div> }/> */}
        <Route path='/*' element ={<Navigate to={"lasy1"} replace />}/>
      </Routes>
    </div>
  )
}

export default LazyLayout
