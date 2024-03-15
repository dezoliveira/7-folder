//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

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
import Folder from '../components/Folders/Folder'

const Home = () => {
  const router = useRouter()
  const [folders, setFolders] = useState([])

  const [inputFolder, setInputFolder] = useState("")
  const [selectedParent, setSelectedParent] = useState("")
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [id, setid] = useState("")

  const handleClose = () => {
    setShow(false)
    setInputFolder("")
    setSelectedParent("")
    setEdit(false)
  }

  const handleShow = () => setShow(true)
  
  useEffect(() => {
    getFolders()
  }, [])

  const getFolders = () => {
    let token = localStorage.getItem('token')

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
      setFolders(data)
    })
  }

  const handleErrors = (response) => {
    if(response.status === 401) {
      router.push('/login')
    }

    return response
  }

  const createFolder = async () => {
    let token = localStorage.getItem('token')
    
    await fetch('https://7dev-code-test.lcc7.online/api/v1/directories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json',
        'X-CSRFToken': 'SDucg4TiBJFGE6pkEpY75iXFIPBSJm2Os8APEPFSkbRLOC4aLRcvRuKAuFCBBWlu',
        Authorization: `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(
        {
          name: inputFolder,
          parent: selectedParent,
        }
      )
    })
    .then(() => {
      getFolders()
    })
  }

  const deleteFolder = async (id) => {
    let token = localStorage.getItem('token')

    if(token === undefined) {
      router.push('/')
    }

    const requestOptions = {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': 'SDucg4TiBJFGE6pkEpY75iXFIPBSJm2Os8APEPFSkbRLOC4aLRcvRuKAuFCBBWlu',
        Authorization: `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify({
          name: inputFolder,
          parent: selectedParent,
      })
    }

    await fetch(`https://7dev-code-test.lcc7.online/api/v1/directory/${id}`, requestOptions)
    .then(handleErrors)
    .then(() => {
      setFolders(folders.filter((folder) => folder.id !== id))
    })
  }

  const editFolder = async () => {
    let token = localStorage.getItem('token')
    
    await fetch(`https://7dev-code-test.lcc7.online/api/v1/directory/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json',
        'X-CSRFToken': 'SDucg4TiBJFGE6pkEpY75iXFIPBSJm2Os8APEPFSkbRLOC4aLRcvRuKAuFCBBWlu',
        Authorization: `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(
        {
          name: inputFolder,
          parent: selectedParent,
        }
      )
    })
    .then(() => {
      getFolders()
    })
  }

  const submitValue = (e) => {
    e.preventDefault()

    if (edit) {
      editFolder()
    } else {
      createFolder()
    }

    handleClose()
  }

  const handleId = (id, name, parent) => {
    setInputFolder(name)
    setSelectedParent(parent)
    setid(id)
    setEdit(true)
  }

  //User Logout
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear()
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  }

  //Root folders array
  const rootFolders = Object.values(folders).filter(folder => folder.parent === null)
    
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
                    <Form.Label>Pasta Raiz:</Form.Label>
                    <Form.Select 
                      aria-label="Default select example"
                      onChange={e => setSelectedParent(e.target.value)}
                      value={selectedParent ? selectedParent : ''}
                    >
                      <option value="">/</option>
                        {
                          folders.length ?
                          <>
                            {
                              folders.map(folder => (
                                <option value={folder.id} key={folder.id}>
                                  {folder.name}
                                </option>
                              ))
                            }
                          </> : ''
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFolderName">
                  <Form.Label>Nome da Pasta:</Form.Label>
                  <Form.Control
                    value={inputFolder ? inputFolder : ''}
                    type="text"
                    placeholder="Ex: Fotos"
                    onChange={e => setInputFolder(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={submitValue}>
                {edit ? 'Editar' : 'Criar'}
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
          <Button
            className='d-flex gap-2 align-items-center justify-content-center'
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </Button>
        </Container>
      </Navbar>

      {/* Folder List */}
      <Container className="p-4">
        <Col>
          <Row>
            {rootFolders.length ? rootFolders.map(rootFolder => (
              <Folder
                key={rootFolder.id} 
                folder={rootFolder}
                id={rootFolder.id}
                name={rootFolder.name}
                parent={rootFolder.parent}
                allFolders={folders} 
                handleRemove={deleteFolder}
                handleShow={handleShow}
                handleId={handleId}
              />
            )) : ''}
          </Row>
        </Col>
      </Container>
    </Container>
  )
}

export default Home
