import {useState, useEffect} from 'react'

function useRefresh(generatorFunction, initialValue = undefined, loadingPlaceholder = undefined) {
  const [result, setResult] = useState(initialValue)

  async function refresh() {
    if (loadingPlaceholder !== undefined) await setResult(loadingPlaceholder)
    const newResult = await generatorFunction()
    setResult(newResult)
  }

  useEffect(() => (initialValue === undefined ? refresh() : null),[])

  return [result, refresh]
}

export default useRefresh
