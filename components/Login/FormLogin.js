'use client'
import { useRouter } from 'next/navigation'

//Boostrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Form,
  Button,
  Col,
  Row 
} from 'react-bootstrap';

import Image from 'next/image';

const imageStyle = {
  width: '100vh',
  height: '100vh'
}

const imageContainer = {
  height: '100vh'
}

const FormLogin = () => {
  const router = useRouter()

  const redirectTo = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
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
                <Form.Control type="login" placeholder="usuario@email.com" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* Keep Pass */}
              <Form.Group className="mb-3" controlId="formCheckBox">
                <Form.Check type="checkbox" checked="true" label="Manter Conectado" />
              </Form.Group>

              {/* Button Login */}
              <Button variant="primary" type="submit" onClick={redirectTo}>
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