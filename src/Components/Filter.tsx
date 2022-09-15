import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {useLocation} from "react-router-dom"
import { useNavigate } from 'react-router';
import { useTypedSelector } from '../Hooks/useSelector';
import { getGanre } from '../redux/actions/actionCreator/getPageMovies';





const Filter = () => {
    const navigate =  useNavigate()
    const {pathname} =useLocation();
    const router = useLocation();
    console.log(router);
    
    console.log(pathname);
    const page:String = pathname;

    const dispatch = useDispatch();
    useEffect(() =>{
dispatch(getGanre() as any)

    },[])
    

    const ganre = useTypedSelector((state) => state.moviesAndseriesForPage.ganre)
    const ganreHandler = (id:number) =>{
  /* navigate(`${pathname}/${id}`);  */
  navigate({
      pathname: pathname,
      search: id.toString(),
    });

    }

 if(page === "/movies" || page === "/tvseries"){
    return <div className="d-flex  flex-wrap">{
        ganre?.map((el) =>{
            return <button onClick={() => ganreHandler(el.id)} key={el.id} className="p-1  m-1 btn text-danger border-secondary fw-light rounded-pill">{el.name}</button>
        } )
        }</div>
 }
    
  return (
    null
  )
}

export default Filter