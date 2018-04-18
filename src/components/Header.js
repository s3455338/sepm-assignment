import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Home</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
{/*}
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search"/>
        </FormGroup>{' '}
        <Button type="submit">Search</Button>
</Navbar.Form>*/}
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          View Cart
        </NavItem>
        <NavItem eventKey={2} href="#">
          FAQs
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;