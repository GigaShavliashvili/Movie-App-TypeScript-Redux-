import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { movie, tvSerie } from '../models/movieCover';
import MovieCard from "./MovieCard"

type Props = {
    movies:movie[] , 
    series:tvSerie[],
}
const HomeSlider = (props:Props) => {
  return (
    <div className=" overflow-hidden" style={{borderRadius:"30px"}}>
    <Swiper
      spaceBetween={25}
      loop={true}
      breakpoints={{
      0:{
         width: 0,
      slidesPerView: 3,
      },
    768: {
      width: 768,
      slidesPerView: 4,
    },
     1024: {
      width: 1024,
      slidesPerView: 5,
    },
     1360: {
      width: 1360,
      slidesPerView: 6,
    },
  }}
    >

        {props.movies.map((movie) =>{
            return <SwiperSlide key={movie.id} className="swiperSlider">
                  <MovieCard img={movie.poster_path} title={movie.title}/>
            </SwiperSlide>
        })}
    </Swiper>
    </div>
      );
}

export default HomeSlider