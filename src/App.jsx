import { useEffect, useState } from 'react'
import './App.css'

// const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

const App = () => {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  async function getFactAndImage () {
    try {
      const factRes = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const factData = await factRes.json()
      const { fact } = factData
      setFact(fact)
      const firstWord = fact.split(' ', 3).join(' ')

      const imageRes = await fetch(`https://cataas.com/cat/says/${firstWord}`)
      const { url } = imageRes
      setImage(url)
    } catch (error) {
      console.log(error)
    }
  }

  function handleClick () {
    getFactAndImage()
  }
  useEffect(() => {
    getFactAndImage()
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact ? <p>{fact}</p> : <p> No hay facto</p>}
      {image ? <img src={image}></img> : <p>No hay imagen</p>}
      <button onClick={handleClick} style={{ marginTop: '10px' }}>New Image And fact</button>
    </main>
  )
}

export default App
