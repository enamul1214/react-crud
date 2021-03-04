import React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

export const Heading = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand href="/">Home</NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
