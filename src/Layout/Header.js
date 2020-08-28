import React, { useState, useContext, Fragment } from "react"
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../Context/UserContext"

const Header = () => {
  // using global context
  const context = useContext(UserContext)

  // state for navbar collapse
  const [isOpen, setIsOpen] = useState(false)

  //
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar color="info" light expand="md">
      {/* NavBar logo */}
      <NavbarBrand>
        <Link to="/" className="text-white">
          <b style={{ fontSize: "2rem" }}>GitHub App</b>
        </Link>{" "}
      </NavbarBrand>
      <NavbarText className="text-white lead">
        Welcome! {context.user?.email ? context.user?.email : "Test@gmail.com"}
      </NavbarText>
      {/* minimized nav */}
      <NavbarToggler onClick={toggle} />
      {/* left side links */}
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null)
                }}
                className="text-white">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <Fragment>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
