import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MovieCard from '../Components/MovieCard';
import { useTypedSelector } from '../Hooks/useSelector';
import { movie, tvSerie } from '../models/movieCover';
import { getTvSeries } from '../redux/actions/actionCreator/getPageMovies';
import { useLocation } from 'react-router';
const TvSeries = () => {

    const TvseriesData = useTypedSelector((state) => state.moviesAndseriesForPage.tvSeries)

    const {isLoading, data, error}:{isLoading: boolean,data:tvSerie[], error: boolean | string} = TvseriesData;

const {search} = useLocation();
const ganre = search.slice(1)
console.log(ganre);


  const dispatch = useDispatch()
   useEffect(() =>{
     dispatch(getTvSeries(1, ganre ) as any);
    },[ganre])

console.log(data);


    if(error){
      return <h2>{error}</h2>
    }
  return (
   <div>
    {!isLoading ?
    <div className="row">
      {
        data.map((serie) =>(
<div key={serie.id} className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
  <MovieCard img={serie.poster_path} title={serie.name}/>
</div>
        ))
      }
  </div>: <h2>...Loading</h2> }
   </div>
  )
}

export default TvSeries