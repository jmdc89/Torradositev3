import styled from 'styled-components'
import {DiScala} from "react-icons/Di"
import {Link} from "gatsby"
// import firma from '../../assets/firma2.png'

// export const Firma = styled.img.attrs({
//     src: `${firma}`
// })`
//     position: absolute;
//     width: 500px;
//     bottom: 0;
// `;


export const Nav = styled.nav`

    @media screen and (max-width: 960px) {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        position: sticky;
        top: 0;
        z-index: 999;
        transition: 0.8s all ease;
    }
    
`



// export const NavbarContainerCopy = styled.div`
//     display:flex;
//     flex-direction: column;
//     min-height: 100vh;
//     justify-content: space-between;
//     height: 80px;
//     z-index: 1;
//     width: 100%;
//     max-width: 1000px;

//     img {
//         position: relative;
//         width: 200px;
//         top: -20px;
//         right: 45px;
//     }
// `

export const NavbarContainer = styled.div`
    min-height: 100vh;
    width: 250px;
    position: fixed;
    z-index: 0;
    justify-content: left;

    @media screen and (max-width: 768px) {
        width: 100%;
        position: relative;
        
        display:flex;
      
        height: 500px;
        z-index: 1;
        width: 100%;
    }

`

// export const NavLogo = styled(Link)`
//     color: #141414;
//     justify-self: flex-start;
//     cursor: pointer;
//     text-decoration: none;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
// `

export const NavIcon = styled(DiScala)`
margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        color: white;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:left;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => (click ? "100%" : "-1200px") };
        opacity: 1;
        transition: all 0.2s ease;
        background: #fff;
    }
`

export const NavItem = styled.li`
    height:100%;
    margin-left:20px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`

export const NavLinksGallery = styled(Link)`
    color: gray;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem 1rem;
    height: 50%;
    font-family: "Ubuntu", sans-serif;
    font-size: 15px;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`





