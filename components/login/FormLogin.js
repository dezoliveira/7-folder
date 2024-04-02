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

const btnOrange = {
  background: '#fd7e14'
}

// import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const FormLogin = ({handleSubmit, error, show}) => {
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputChecked, setInputChecked] = useState(true)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    error ? inputRef.current.focus() : null
  }, [error])

  const submitForm = (e) => {
    e.preventDefault()
    handleSubmit(inputUsername, inputPassword)
  }

  return (
    <Container fluid>
      <Container fluid className='d-flex align-items-center justify-content-center'>
        <Col lg={6} md={6} sm={12}>
          <Row>
            <Form onSubmit={submitForm}>
              {/* Login */}
              <Form.Group className="mb-3" controlId="formLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="login"
                  placeholder="usuario@email.com"
                  className={error ? 'border-danger' : ''}
                  onChange={e => setInputUsername(e.target.value)}
                  ref={inputRef}
                  autoFocus={error}
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

              <Button variant="primary" type="submit">
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