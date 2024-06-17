import React from 'react'
import { useGlobalContext } from '../Context/Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {

  const {movie} = useGlobalContext()
  return (
  <>
  <section className='movie-page'>
    <div className='container grid grid-4-col'>
    {movie.map((crntMovie)=>{
      const { imdbID,Title,Poster,Type} = crntMovie;
      return (
       < NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <h2>{Title}</h2>
              <img src={Poster} alt={imdbID} />
            </div>
       </NavLink>
      )
   })}
   </div>
   </section>
  </>
  )
}

export default Movies
