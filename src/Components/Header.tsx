import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="d-flex gap-3">
         <h3><Link to="">Home</Link></h3>
       <h3><Link to="movies">Movies</Link></h3>
       <h3><Link to="tvseries">Tv</Link></h3>
    </div>
  )
}

export default Header