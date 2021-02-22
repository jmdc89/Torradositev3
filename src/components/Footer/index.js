import React from "react"
import './footer.scss'

const Footer = () => {
  return (
      <footer className="footer">
          <div>
              <h4>
                copyright&copy;{new Date().getFullYear()}
                <span>WebDev</span> all rights reserved
              </h4>
          </div>
      </footer>
  )
}

export default Footer
