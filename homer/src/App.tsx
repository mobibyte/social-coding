import { useState } from 'react'
import mobiLogo from './assets/mobi.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://codewith.mobi" target="_blank">
          <img src={mobiLogo} className="logo mobi" alt="Mobi logo" />
        </a>
      </div>
      <h1>Mobi</h1>
      <div className="card">
        <p>
          Discover the magic of making apps!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Mobi logo to learn more
      </p>
    </>
  )
}

export default App
