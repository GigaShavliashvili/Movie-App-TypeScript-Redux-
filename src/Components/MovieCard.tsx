import React from 'react'
import { IMGPATHCOVER } from '../Utils/Api'

const MovieCard = ({img, title}:{img:string, title:string}) => {
  return (
    <div className="">
     <div className="coverBanner  overflow-hidden"
      style={{backgroundImage: `url(${ IMGPATHCOVER + img})`, paddingTop:"17rem", borderRadius:"15px" }}></div>
     <p className="text-light p-1">{title.slice(0,20)}...</p>
     </div>
  )
}

export default MovieCard