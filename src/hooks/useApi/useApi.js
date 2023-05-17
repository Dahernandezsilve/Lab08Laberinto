import { useState } from 'react'

const useApi = () => {
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(false)
  const handleRequest = async (method, ancho, alto, body = '') => {
    setLoading(true)
    //fetch
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if (method !== 'GET') {
      options.body = JSON.stringify(body)
    }

    console.log('method', method)
    const fetchResponse = await fetch(`https://maze.uvgenios.online/?type=json&w=${ancho}&h=${alto}`)
    const JSONresponse = await fetchResponse.json()

    setResponse(JSONresponse)
    setLoading(false)
  }

  return [response, loading, handleRequest]
}

export default useApi
