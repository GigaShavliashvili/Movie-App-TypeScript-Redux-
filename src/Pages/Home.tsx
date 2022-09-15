import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import HomeSlider from '../Components/HomeSlider';
import { useTypedSelector } from '../Hooks/useSelector';
import { getNewestgmovies, getRatedgmovies, getTradingmovies } from '../redux/actions/actionCreator/getDiffMoviesAction';
import ViewMore from '../Components/ViewMore';
const Home:React.FC = () => {


const dispatch = useDispatch();
const movies = useTypedSelector((state) => state.diffMovies)
const {Trading, Rated,  Newest} = movies;

 useEffect(() =>{
dispatch( getTradingmovies() as any)
dispatch(getRatedgmovies() as any)
dispatch(getNewestgmovies() as any)
 },[]) 

 if(Trading.error){
    return <h3>{Trading.error}</h3>
 }
  return (


    <>
         <div  className="mt-4">
        <ViewMore title={"Newest Movies"} keyword={""}/>
      <HomeSlider movies={Newest.data} series={[]}/>
      </div>
         <div  className="mt-4">
        <ViewMore title={"Rated Movies"} keyword={""}/>
      <HomeSlider movies={Rated.data} series={[]}/>
      </div>
        <div className="mt-4">
        <ViewMore title={"Trading Movies"} keyword={""}/>
      <HomeSlider movies={Trading.data} series={[]}/>
      </div>
      
</>
  )
}

export default Home