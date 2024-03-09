//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Col,
  Row,
  Navbar,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';

//Uses
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';

//Components
import Folder from '../components/Folder';

const Home = () => {
  const router = useRouter()

  // const [token, setToken] = useState("")

  const [folders, setFolders] = useState([])
  const [isFetching, setFetching] = useState(true)

  const [inputFolder, setInputFolder] = useState("")
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)

    if(token === undefined) {
      router.push('/')
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-CSRFToken': 'SDucg4TiBJFGE6pkEpY75iXFIPBSJm2Os8APEPFSkbRLOC4aLRcvRuKAuFCBBWlu',
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }

    fetch(`https://7dev-code-test.lcc7.online/api/v1/directories`, requestOptions)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFolders(data)
      })

  }, [])

  const handleErrors = (response) => {
    if(response.status === 401) {
      router.push('/login')
    }

    return response
  }

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
            {/* {
              folders.map((folder, index) => {
                return (
                  <Container key={index}>                    
                    <Folder
                      name={folder.name} 
                      id={folder.id}
                    />
                  </Container>
                )
              })
            } */}
            {
              folders.length ?
               <>
                <Container>
                  {
                    folders.map((folder, index) => (
                      <Container key={index}>                    
                        <Folder
                          name={folder.name} 
                          id={folder.id}
                        />
                      </Container>
                    ))
                  }
                </Container>
               </> : ''
            }
          </Row>
        </Col>
      </Container>
    </Container>
  )
}

export default Home
