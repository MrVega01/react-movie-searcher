import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App () {
  const movies = useMovies()
  const { search, setSearch, error } = useSearch()

  const handlerSubmit = (e) => {
    e.preventDefault()
  }
  const handlerChange = (e) => {
    if (!e.target.value.startsWith(' ')) {
      setSearch(e.target.value)
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>Movie searcher</h1>
        <form onSubmit={handlerSubmit}>
          <input value={search} onChange={handlerChange} placeholder='Avengers, Shrek, Avatar...' />
          <button type='submit'>Search</button>
        </form>
        <sub style={{ color: 'red' }}>{error}</sub>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
