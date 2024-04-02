//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Navbar,
  Button,
} from 'react-bootstrap';

export default function FolderNavbar({handleShowModal, handleLogout}) {
  const showModal = () => handleShowModal()
  const logout = () => handleLogout()

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Button 
          className='d-flex gap-2 align-items-center justify-content-center'
          onClick={showModal} 
        >
          Pasta 
          <FontAwesomeIcon icon={faCirclePlus} />  
        </Button>
        <Button
          className='d-flex gap-2 align-items-center justify-content-center'
          onClick={logout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </Button>
      </Container>
    </Navbar>
  )
}