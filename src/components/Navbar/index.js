import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import {Nav, Firma, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksGallery} from "./NavbarElements"
import logo from '../../assets/logo.png'
import firma from '../../assets/firmainvertida.png'
import {firmaimg, logoimg} from './navbar.module.scss'


const Navbar2 = () => {

    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{color:"#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <img className={logoimg} src={logo} alt="Logo" /> 
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/gallery">Gallery</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinksGallery to="/nature">Nature</NavLinksGallery>
                                <NavLinksGallery to="/landscape">Lanscape</NavLinksGallery>
                                <NavLinksGallery to="/surf">Surf</NavLinksGallery>
                                <NavLinksGallery to="/architecture">Architecture</NavLinksGallery>
                                <NavLinksGallery to="/aerial">Aerial</NavLinksGallery>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact">Contact</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/instagram">Instagram</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <img className={firmaimg} src={firma} alt="Firma" />  
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar