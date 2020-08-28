import React from "react"
import { Container } from "reactstrap"

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="bg-info text-center text-white  fixed-bottom p-3">
      Made by Vaibhav Singh Negi |{" "}
      <span role="img" aria-label="mage">
        🧙
      </span>
    </Container>
  )
}

export default Footer
