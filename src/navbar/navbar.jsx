import React from 'react';
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import "./navbar.css";

const Navbar = () => {
    return (
      <>
      <div className='Navbar'>

        <GhostNavbar
            styles={{
            fontColor: "#fff",
            fontHoverColor: "#fff",
            listHoverColor: "#fff",
            floatButtonY: 40,
            floatButtonX: 10,
            navigationButton: {
                borderRadius: "36px",
                width: "40px",
                height: "40px",
                backgroundColor: "#0e1220",
                fontColor: "#fff",
                fontHoverColor: "#fff",
                listHoverColor: "#fff",
            },
            navigationBackground: {
                backgroundColor: "#0e1220",
                fontColor: "#fff",
                fontHoverColor: "#fff",
                listHoverColor: "#fff",
            },
            navigationIcon: {
                fontColor: "#fff",
                fontHoverColor: "#fff",
                listHoverColor: "#fff",
            }
            }}
        >
            <ul
                        styles={{
                            fontFamily: 'font-family: "Lato", sans-serif',
                            color: "white",
                            listHoverColor: "#fff",
                            fontHoverColor: "#fff"
                        }}
            >
                <li 
                                        style={{
                                            fontFamily: 'font-family: "Lato", sans-serif',
                                            color: "#2d3436",
                                            listHoverColor: "#2d3436"
                                        }}
                >HOME</li>
                <li
                                                        style={{
                                                            fontFamily: 'font-family: "Lato", sans-serif',
                                                            color: "#2d3436",
                                                            listHoverColor: "#2d3436"
                                                        }}>ABOUT</li>
                <li
                                                        style={{
                                                            fontFamily: 'font-family: "Lato", sans-serif',
                                                            color: "#2d3436",
                                                            listHoverColor: "#2d3436"
                                                        }}>WORKS</li>
                <li
                                                        style={{
                                                            fontFamily: 'font-family: "Lato", sans-serif',
                                                            color: "#2d3436",
                                                            listHoverColor: "#2d3436"
                                                        }}>CONTACT</li>
            </ul>
            </GhostNavbar>
      </div>
      </>
    );
};
export default Navbar;