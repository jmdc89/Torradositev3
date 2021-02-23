import { graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import "./layout.scss"
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
            <Navbar />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {/* <main>{children}</main>
            <Footer /> */}
        </>
    )

}

// Layout.PropTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout