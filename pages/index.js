import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'

import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Col,
  Row,
  Navbar,
  Button,
  Modal,
  Form,
  ListGroup,
} from 'react-bootstrap';
import { useState } from 'react';

const Home = () => {
  const folders = [
    {
      id: 1,
      name: "Fotos"
    },
    {
      id: 2,
      name: 'Videos'
    },
    {
      id: 3,
      name: 'Musicas'
    }
  ]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      { 
        <>
          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Criação de Pastas</Modal.Title>
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

      {/* Navbar */}
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

      {/* Folder List */}
      <Container fluid>
        <Col>
          <Row>
            {
              folders.map((folder) => {
                return (
                  <>
                    <Container>
                      {/* <li className='d-flex'>
                        <div className='d-flex align-items-center gap-2 justify-content-center text-center'>
                          <FontAwesomeIcon fontSize={32} icon={faFolder} />  
                          <p>{folder.name}</p>
                        </div>
                      </li> */}
                      <ListGroup>
                        <ListGroup.Item key={folder.id.toString()} className='d-flex align-items-center gap-2'>
                            <FontAwesomeIcon fontSize={32} icon={faFolder} />  
                            <p className='mb-0'>{folder.name}</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Container>
                  </>
                )
              })
            }
          </Row>
        </Col>
      </Container>
    </Container>
  )
}

export default Home
