import './Header.scss'

const Header = () => {
      return (
            <>
                  <div className="header-container">
                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="24"
                              height="24"
                              viewBox="0 0 30 30"
                        >
                              <path
                                    fill="#5f6368"
                                    d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                              ></path>
                        </svg>

                        <img
                              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
                              height="40"
                              width="40"
                              data-testid="notes-logo"
                        ></img>

                        <span className="header-title">Keep</span>
                  </div>
            </>
      )
}

export default Header
