import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavbarText } from 'reactstrap';
import logo from '../asset/img/refactory.png';
import '../style/component.css';


const logoRefactory = {
    width: '150px'
}

const NavBlog = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const navBlog = {

    }
    return (
        <div>
            <Navbar className="navblog" light expand="md">
                <NavbarBrand href="/">
                    POST CATEGORIES
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    <NavbarText>

                        <Nav className="mr-auto" navbar>
                            <NavLink className="navMenuBlog" href="#">Blog</NavLink>
                            <NavLink className="navMenuBlog" href="#">Engineering</NavLink>
                            <NavLink className="navMenuBlog" href="#">Profile</NavLink>
                            <NavLink className="navMenuBlog" href="#">Tips & Trick</NavLink>
                            <NavLink className="navMenuBlog" href="#">Growth & Culture</NavLink>
                            <NavLink className="navMenuBlog" href="#">Newsroom</NavLink>
                            <NavLink className="navMenuBlog" href="#">Promo</NavLink>
                        </Nav>

                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBlog;