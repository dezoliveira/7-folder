import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Navbar,
  Button,
  Modal,
} from 'react-bootstrap';
import { useState } from 'react';

const Home = () => {

  return (
    <Container fluid>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Button 
            className='d-flex gap-2 align-items-center justify-content-center'
            onClick={handleShow} 
          >
            Pasta 
            <FontAwesomeIcon icon={faCirclePlus} />  
          </Button>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Home
