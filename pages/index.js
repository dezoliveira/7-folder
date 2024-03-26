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
import Folder from '@/components/folders/Folder'
import FormFolder from '@/components/folders/FormFolder'
import Message from '@/components/elements/Message';

const Home = () => {
  const router = useRouter()
  const [folders, setFolders] = useState([])

  const [inputFolder, setInputFolder] = useState("")
  const [selectedParent, setSelectedParent] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [edit, setEdit] = useState(false)
  const [id, setid] = useState("")

  const [error, setError] = useState("")

  const handleClose = () => {
    setShowModal(false)
    setInputFolder("")
    setSelectedParent("")
    setEdit(false)
  }

  const handleShowModal = () => setShowModal(true)
  
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
        'Content-Type': 'application/json',
        'accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': 'SDucg4TiBJFGE6pkEpY75iXFIPBSJm2Os8APEPFSkbRLOC4aLRcvRuKAuFCBBWlu',
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/directories`, requestOptions)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      setFolders(data)
    })
  }

  const handleErrors = (response) => {
    if(response.status === 401) {
      router.push('/login')
      setError(true)
    }

    return response
  }

  const createFolder = async () => {
    let token = localStorage.getItem('token')
    
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/directories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      handleMessage('create')
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

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/directory/${id}`, requestOptions)
    .then(handleErrors)
    .then(() => {
      handleMessage('delete')
      setFolders(folders.filter((folder) => folder.id !== id))
    })
  }

  const editFolder = async () => {
    let token = localStorage.getItem('token')
    
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/directory/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
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
      handleMessage('edit')
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

  const handleShow = () => {
    setShowMessage(false)
  }

  //Root folders array
  const rootFolders = Object.values(folders).filter(folder => folder.parent === null)

  const handleMessage = (action) => {
    // error: 'Loign incorreto!',
    // success: 'Logado com sucesso!'
    let error = ""
    let success = ""

    switch(action) {
      case 'create':
        error = 'Diretório não pode ser criado!'
        success = 'Diretório criado com sucesso!'
        break

      case 'edit':
        error = 'Diretório não pode ser editado!'
        success = 'Diretório editado com sucesso!'
        break
        
      case 'delete':
        error = 'Diretório não pode ser excluído!'
        success = 'Diretório excluído com sucesso!'
        break

      default:
        setShowMessage(false)
    }

    setMessage({
      error: error,
      success: success
    })

    setShowMessage(true)
  }
    
  return (
    <Container fluid>
      { 
        <>
          {/* Modal */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Criação de Pastas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormFolder 
                folders={folders}
                selectedParent={selectedParent}
                setInputFolder={setInputFolder}
                inputFolder={inputFolder}
                setSelectedParent={setSelectedParent}
              />
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

      <Message 
        error={error}
        delay={2000}
        handleShow={handleShow}
        show={showMessage}
        message={message}
        autohide
        customClass={true}
      />

      {/* Navbar */}
      <Navbar className="bg-body-tertiary">
        <Container>
          <Button 
            className='d-flex gap-2 align-items-center justify-content-center'
            onClick={handleShowModal} 
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
                handleShow={handleShowModal}
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
