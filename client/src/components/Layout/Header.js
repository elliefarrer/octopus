import React from 'react';

import { Col, Collapse, Navbar, NavbarBrand, NavbarToggler, Row } from 'reactstrap';

const Header = function() {
  return (
    <Navbar className="mb-3">
        <Row>
            <Col>
                <NavbarBrand>
                    <h1><strong>octopus</strong> energy</h1>
                </NavbarBrand>
            </Col>
            <Col>
                <NavbarToggler>
                    <Collapse></Collapse>
                </NavbarToggler>
            </Col>
        </Row>
    </Navbar>
  )
}

export default Header;