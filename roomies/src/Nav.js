import React, { useState } from 'react';
import {
  // Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Roomies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
}

export default Example;