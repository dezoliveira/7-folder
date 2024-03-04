import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import Folder from '../components/Folder';

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
import { useEffect, useState } from 'react';

const Home = () => {
  useEffect(() => {
    setFolders(folders)
  },[])

  const [folders, setFolders] = useState([
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
  ])

  const [inputFolder, setInputFolder] = useState("")
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const submitValue = () => {
    setFolders([...folders, {
      id: folders.length + 1,
      name: inputFolder
    }])

    handleClose()
  }

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
                      <Form.Control type="text" placeholder="Ex: Fotos" onChange={e => setInputFolder(e.target.value)} />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
                <Button variant="primary" onClick={submitValue}>
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
      <Container className="p-4">
        <Col>
          <Row>
            {
              folders.map((folder) => {
                return (
                  <>                    
                    <Folder
                      name={folder.name} 
                      id={folder.id}
                    />
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
