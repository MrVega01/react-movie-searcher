const API_KEY = 'fe6d5045'

export async function getMoviesBySearch ({ search }) {
  if (!search) return

  try {
    const response = await (await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)).json()
    const movies = response.Search || []

    const mappedMovies = movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return mappedMovies
  } catch (error) {
    throw new Error('An error occurred in the API request')
  }
}
