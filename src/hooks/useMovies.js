import results from '../mocks/with-results.json'
import noResults from '../mocks/no-results.json'

const API_KEY = 'fe6d5045'
const API_URL = `https://www.omdbapi.com/?s=${''}&apikey=${API_KEY}`

export function useMovies () {
  const movies = results?.Search

  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return mappedMovies
}
