import { useEffect, useState } from "react"
import './app.css'

// const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

const App = () => {
const [fact, setFact] = useState('')
const [image, setImage] = useState('')



useEffect(()=>{
  fetch(CAT_ENDPOINT_RANDOM_FACT)
  .then(res => res.json())
  .then(data =>{ const {fact} = data
  setFact(fact)
  const firstWord = fact.split(' ', 3).join(' ')

  fetch(`https://cataas.com/cat/says/${firstWord}`)
  .then(data =>{const {url} = data
  setImage(url)
  })
})

}, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact ? <p>{fact}</p> : <p> No hay facto</p>}
      {image ? <img src={image}></img> : <p>No hay imagen</p>}
    </main>
  )
}

export default App