import React from 'react'
import Button from "./Button"
const ViewMore = ({title, keyword}:{title:string, keyword:string}) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
        <p className="text-light h5">{title}</p>
        <Button keyword={""}  text={"Viwe More"}/>
    </div>
  )
}

export default ViewMore