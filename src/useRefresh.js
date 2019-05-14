import {useState, useEffect} from 'react'

const useRefresh = (generatorFunction, initialValue = null) => {
    // store the current Result in State
    const [result, setResult] = useState(initialValue)
    // define refresh function to be exposed
    const refresh = async () => setResult(await generatorFunction())
    // initialise state if none was provided
    useEffect(() => initialValue === null && refresh(), [])
    // return reference to state and to refresh function
    return [result, refresh]
}

export default useRefresh