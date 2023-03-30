export function ListOfMovies ({ movies }) {
  return (
    <ul className='ListOfMovies'>
      {
                  movies.map(movie => (
                    <li key={movie.id} className='Movie'>
                      <h2>{movie.title}</h2>
                      <span>{movie.year}</span>
                      <img src={movie.poster} alt={movie.title} />
                    </li>
                  ))
                }
    </ul>
  )
}
export function NotMovies () {
  return <p>Cannot find the movie searched</p>
}
export default function Movies ({ movies, loading }) {
  if (loading) return <p>Loading...</p>
  else if (movies?.length > 0) return <ListOfMovies movies={movies} />
  else return <NotMovies />
}
