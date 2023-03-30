import { useRef } from 'react'

export default function useDebounce ({ callback, time }) {
  const timeout = useRef()

  const debounceFunction = (params) => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => { callback(params) }, time)
  }
  return debounceFunction
}
