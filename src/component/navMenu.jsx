import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavbarText } from 'reactstrap';
import logo from '../asset/img/refactory.png';
import '../style/component.css';


const logoRefactory = {
    width: '150px'
}

const NavMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const navMenu = {

    }
    return (
        <div>
            <Navbar className="navbar" light expand="md">
                <NavbarBrand href="/">
                    <img src={logo} style={logoRefactory} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavbarText>

                        <Nav className="mr-auto" navbar>
                            <NavLink className="navMenu" href="/">Home</NavLink>
                            <NavLink className="navMenu" href="/course">Courses</NavLink>
                            <NavLink className="navMenu" href="#">Custom Trainings</NavLink>
                            <NavLink className="navMenu" href="#">Case Studies</NavLink>
                            <NavLink className="navMenu" href="#">Blog</NavLink>
                        </Nav>

                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavMenu;