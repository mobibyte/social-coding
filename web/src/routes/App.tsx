import mobiLogo from '../assets/mobi.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://discord.com/invite/DNxUFtJsng" target="_blank">
          <img src={mobiLogo} className="logo mobi" alt="Mobi logo" />
        </a>
      </div>
      <h1>Mobi</h1>
      <h2>web version</h2>
      <div className="card">
        <p>
          Discover the magic of making apps!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Mobi logo to join our Discord
      </p>
    </>
  )
}

export default App
