//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import { 
  Container,
  Col,
  Row,
} from 'react-bootstrap'

//Uses
import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'

//Components
import FormLogin from "../components/login/FormLogin"
import Image from "next/image"
import Message from "../components/elements/Message"

//JSX Styles
const imageStyle = {
  width: '100vh',
  height: '100vh'
}

const imageContainer = {
  height: '100vh'
}

export default function Login() {
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter()

  const redirectTo = () => {
    router.push('/')
  }

  const authRequest = async (user, password) => {
    await fetch('https://7dev-code-test.lcc7.online/api/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(
        {
          username: user,
          password: password
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

  const handleError = () => {
    setShow(true)
    setError(true)
    // inputRef.current.focus();
    return
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

  const handleShow = () => {
    setShow(false)
  }

  const message = {
    error: 'Loign incorreto!',
    success: 'Logado com sucesso!'
  }

  return (
    <>
      <Message 
        error={error}
        delay={5000}
        handleShow={handleShow}
        show={show}
        message={message}
        autohide
      />
      <Container fluid className="d-flex align-items-center">
        <Container fluid className='d-flex align-items-center justify-content-center'>
          <Col lg={8} md={8} sm={12}>
            <Row className='d-flex align-items-center justify-content-center' style={imageContainer}>
              <Image
                src={"/login.jpg"}
                style={imageStyle}
                width={2000}
                height={2000}
                alt="Picture of the author"
              />
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Row>
              <FormLogin
                handleSubmit={authRequest}
                error={error}
                show={show}
              />
            </Row>
          </Col>
        </Container>
      </Container>
    </>
  )
}
  