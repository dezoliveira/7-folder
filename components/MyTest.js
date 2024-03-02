//Boostrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Form,
  Button 
} from 'react-bootstrap';

import Image from 'next/image';

const MyTest = () => {
    return (
      <Container className='d-flex'>
        <Container>
          <Image
            src={"/login.jpg"}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Container>
        <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
      </Container>
    )
  }
  
export default MyTest