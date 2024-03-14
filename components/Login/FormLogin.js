'use client'
//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import { 
  Container,
  Form,
  Button,
  Col,
  Row,
} from 'react-bootstrap';

import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'

//Components
import Toastie from '../Utils/Toastie';

const FormLogin = () => {
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputChecked, setInputChecked] = useState(true)
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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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
      console.log(data)
      handleAccess(data)
    });

  }

  const handleToken = (data) => {
    localStorage.setItem('token', JSON.stringify(data.access))
  }

  const handleAccess = (data) => {
    if (data !== undefined) {
      setError(false)
      setShow(true)
      handleToken(data)
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

  const handleShow = () => {
    setShow(false)
  }

  return (
    <Container fluid>
      <Toastie 
        error={error}
        delay={5000}
        handleShow={handleShow}
        show={show}
        autohide
      />
      <Container fluid className='d-flex align-items-center justify-content-center'>
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
                <Form.Check 
                  type="checkbox"
                  onChange={e => setInputChecked(e.target.value)}
                  checked={inputChecked}
                  label="Manter Conectado" />
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
  )
}
  
export default FormLogin