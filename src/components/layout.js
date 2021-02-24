import { graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import Navbar from "./Navbar/navbar"
import Sidebar from "./Navbar/sidebar"
import Footer from "./Footer"


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleSidebar = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </>
    )
  }
  
  export default Layout

// Layout.PropTypes = {
//     children: PropTypes.node.isRequired,
// }


