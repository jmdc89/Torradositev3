import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links"
import './navbar.scss'

const Navbar = ({toggleSidebar}) => {
    return (
      <nav className="navbar">
          <div className="nav-center">
              <div className="nav-header">
                  <div></div>
                  <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                      <FaAlignRight></FaAlignRight>
                  </button>
              </div>
              <PageLinks styleClass="nav-links"></PageLinks>
          </div>
      </nav>
    )
  }

export default Navbar
