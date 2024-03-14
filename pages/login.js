import FormLogin from "../components/Login/FormLogin"
import Image from "next/image"

//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import { 
  Container,
  Col,
  Row,
} from 'react-bootstrap';

const imageStyle = {
  width: '100vh',
  height: '100vh'
}

const imageContainer = {
  height: '100vh'
}

export default function Login() {
  return (
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
            <FormLogin/>
          </Row>
        </Col>
      </Container>
    </Container>
  )
}
  