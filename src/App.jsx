import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useDebounce from './hooks/useDebounce'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })
  const getMoviesDebounce = useDebounce({ callback: getMovies, time: 300 })

  const handlerSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  const handlerChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')) {
      setSearch(searchValue)
      getMoviesDebounce({ search: searchValue })
    }
  }
  const handlerSort = () => {
    setSort(sort => !sort)
  }

  return (
    <div className='App'>
      <header>
        <h1>Movie searcher</h1>
        <form onSubmit={handlerSubmit}>
          <div>
            <input value={search} onChange={handlerChange} placeholder='Avengers, Shrek, Avatar...' />
            <button type='submit'>Search</button>
          </div>
          <label>
            <input type='checkbox' onChange={handlerSort} checked={sort} />
            Sort by title
          </label>
        </form>
        <sub>{error}</sub>
      </header>
      <main>
        <Movies movies={movies} loading={loading} />
      </main>
    </div>
  )
}

export default App
