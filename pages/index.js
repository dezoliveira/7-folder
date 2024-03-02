import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Navbar,
  Button,
  Modal,
  Form
} from 'react-bootstrap';
import { useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      { 
        <>
          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  {/* Folder Name */}
                  <Form.Group className="mb-3" controlId="formFolderName">
                      <Form.Label>Nome da Pasta:</Form.Label>
                      <Form.Control type="text" placeholder="Ex: Fotos" />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Criar
                </Button>
            </Modal.Footer>
          </Modal>
        </>
      }
    </Container>
  )
}

export default Home
