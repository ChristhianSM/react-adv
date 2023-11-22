import React from 'react'
import { Navigation } from '../router/Navigation';

export const LazyLayout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Lazy Layout</h1>
      <Navigation />
    </div>
  )
}

export default LazyLayout;