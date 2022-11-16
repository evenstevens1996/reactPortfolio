import React, { useState } from 'react';
import soccerHeaderImg from '../app/assets/img/soccer-header.jpg'
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <Navbar dark color='primary' expand='md' sticky='top'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>

                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>
                                <i className='fa fa-list fa-lg' /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>


            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${soccerHeaderImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: 600 }}

            >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-black'>
                            <h1 className='mb-3'>SS Sports League</h1>
                            <h4 className='mb-3'>Reimagining Sports</h4>
                            <Button variant='btn-dark' size='lg' href='#!' role='button'>
                                Register Now!
                            </Button>
                        </div>
                    </div>
                
            </div>
        </header>
    );
}

export default Header;