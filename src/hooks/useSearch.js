import { useState, useEffect, useRef } from 'react'

export default function useSearch () {
  const firstInput = useRef(true)

  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Skip first render
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }
    // Form validation
    if (search === '') {
      setError('The input cannot be empty')
    } else setError('')
  }, [search])

  return { search, setSearch, error }
}
