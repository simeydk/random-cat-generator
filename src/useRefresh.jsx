import {useState, useEffect} from 'react'

function useRefresh(generatorFunction, initialValue = undefined) {
  const [result, setResult] = useState(initialValue)

  async function refresh() {
    const newResult = await generatorFunction()
    setResult(newResult)
  }

  useEffect(() => (initialValue === undefined ? refresh() : null),[])

  return [result, refresh]
}

export default useRefresh
