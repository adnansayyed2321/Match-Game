import './index.css'

const Navbar = props => {
  const {score, second} = props

  return (
    <ul className="container-01">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="app-logo"
        />
      </li>
      <li>
        <div className="container-02">
          <p>
            Score: <span className="appna">{score}</span>
          </p>
          <div className="container-03">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="image-logo"
            />
            <p className="apna-02">{second} sec</p>
          </div>
        </div>
      </li>
    </ul>
  )
}
export default Navbar
