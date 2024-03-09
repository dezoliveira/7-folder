'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'

//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import { 
  Container,
  Form,
  Button,
  Col,
  Row,
  Toast 
} from 'react-bootstrap';

import Image from 'next/image'

const imageStyle = {
  width: '100vh',
  height: '100vh'
}

const imageContainer = {
  height: '100vh'
}

const toastiee = {
  position: 'absolute',
  top: 50,
  right: 50
}

// const fix = {
//   minHeight: '40px'
// }

const FormLogin = () => {
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const inputRef = useRef(null)

  const router = useRouter()

  const redirectTo = () => {
    router.push('/')
  }

  const authRequest = async (e) => {
    e.preventDefault()

    await fetch('https://7dev-code-test.lcc7.online/api/v1/token', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET'
      },
      body: JSON.stringify(
        {
          username: inputUsername,
          password: inputPassword
        }
      )
    })
    .then(response => {
      if(!response.ok){
        handleError()
        return
      } else {
        return response.json()
      }
    })
    .then(data => { 
      handleAccess(data)
    });

  }

  const handleAccess = (data) => {
    if (data !== undefined) {
      setError(false)
      setShow(true)
      setTimeout(() => {
        redirectTo()
      }, 2000);
    }
  }

  const handleError = () => {
    setShow(true)
    setError(true)
    inputRef.current.focus();
    return
  }

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <Toast 
              style={toastiee} 
              className={error ? 'bg-danger' : 'bg-success'} 
              onClose={() => setShow(false)}
              show={show} delay={5000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Login</strong>
                {/* <small>11 mins ago</small> */}
              </Toast.Header>
              <Toast.Body>
                {error ? 'Login Incorreto!' : 'Logado com sucesso!'}
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
      <Container className='d-flex align-items-center justify-content-center' fluid>
        <Col lg={8} md={8} sm={12}>
          <Row className='d-flex align-content-center justify-content-center' style={imageContainer}>
            <Image
              src={"/login.jpg"}
              style={imageStyle}
              width={2000}
              height={2000}
              alt="Picture of the author"
            />
          </Row>
        </Col>
        <Container className='d-flex align-items-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
            <Row>
              <Form>
                {/* Login */}
                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="login"
                    placeholder="usuario@email.com"
                    className={error ? 'border-danger' : ''}
                    onChange={e => setInputUsername(e.target.value)}
                    ref={inputRef}
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className={error ? 'border-danger' : ''}
                    onChange={e => setInputPassword(e.target.value)}
                  />
                </Form.Group>

                {/* Keep Pass */}
                <Form.Group className="mb-3" controlId="formCheckBox">
                  <Form.Check type="checkbox" checked="true" label="Manter Conectado" />
                </Form.Group>

                {/* Button Login */}
                <Button variant="primary" type="submit" onClick={authRequest}>
                  Entrar
                </Button>
              </Form>
            </Row>
          </Col>
        </Container>
      </Container>
    </Container>
  )
}
  
export default FormLogin