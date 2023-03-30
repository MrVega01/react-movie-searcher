import { useCallback, useMemo, useRef, useState } from 'react'
import { getMoviesBySearch } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useCallback(({ search }) => {
    if (search === previousSearch.current) return
    setLoading(true)
    getMoviesBySearch({ search }).then(movies => {
      setMovies(movies)
      previousSearch.current = search
      setLoading(false)
    })
  }, [])
  const sortMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return {
    movies: sortMovies,
    getMovies,
    loading
  }
}
