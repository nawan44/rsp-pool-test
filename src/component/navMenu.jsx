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
                            <NavLink className="navMenu" href="/"><h5>Home</h5></NavLink>
                            <NavLink className="navMenu" href="/course"><h5>Courses</h5></NavLink>
                            <NavLink className="navMenu" href="#"><h5>Custom Trainings</h5></NavLink>
                            <NavLink className="navMenu" href="#"><h5>Case Studies</h5></NavLink>
                            <NavLink className="navMenu" href="/blog"><h5>Blog</h5></NavLink>
                        </Nav>

                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavMenu;