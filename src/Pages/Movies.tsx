import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from '../redux/actions/actionCreator/getPageMovies';
import { useTypedSelector} from "../Hooks/useSelector"
import { movie } from '../models/movieCover';
import MovieCard from '../Components/MovieCard';
import { useLocation } from 'react-router';
import useInfinitScrool from '../Hooks/useInfinitScrool';

const Movies = () => {
  const observer = useRef<HTMLHeadingElement>(null);
    const MoviesData = useTypedSelector((state) => state. moviesAndseriesForPage.movies)
      const {isLoading, data, error}:{isLoading: boolean,data: movie[], error: boolean | string} = MoviesData;
  const {lastObserver,  page} =  useInfinitScrool(observer,isLoading)

    
const {search} = useLocation();
const ganre = search.slice(1)
console.log(ganre);
console.log(isLoading);


const dispatch = useDispatch();
    useEffect(() =>{
     dispatch(getMovies(page, ganre) as any);
    },[ganre,page])
  if(error){
      return <h2>{error}</h2>
    }
  return (
<>
    {!isLoading ? <div className="row">
        { data.map((movie,index) =>(
          index === data.length - 1 ?  <div ref={lastObserver} key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
  <MovieCard img={movie.poster_path} title={movie.title}/></div> :
 <div key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-6 p-2">
  <MovieCard img={movie.poster_path} title={movie.title}/></div>
    )) }
    </div>
    : 
    <h2>...Loading</h2> }
</>
  )
}

export default Movies


