import React, { useContext, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Form,
  FormGroup,
  Button,
  Label,
} from "reactstrap"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"

// imporing firebase
import firebase from "firebase/app"
// importing context (global state)
import { UserContext } from "../Context/UserContext"

const Signin = () => {
  // using context (global state)
  const context = useContext(UserContext)

  // state for email
  const [email, setEmail] = useState("")
  // state for password
  const [password, setPassword] = useState("")

  const handleSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // console.log(res)
        context.setUser({
          uid: res.user.uid,
          email: res.user.email,
        })
      })
      .catch((error) => {
        console.log(error)
        toast(error.message, {
          type: "error",
        })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignup()
  }

  if (context.user?.uid) {
    // console.log(context.user)
    return <Redirect to="/" />
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">SignIn here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Signin
