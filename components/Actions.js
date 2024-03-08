//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import { 
  Container,
} from 'react-bootstrap';

export default function Actions() {
    return (
        <Container className='d-flex align-items-center gap-2 justify-content-end'>
            <FontAwesomeIcon fontSize={18} color='#fd7e14' icon={faPenToSquare} />
            <FontAwesomeIcon fontSize={18} color='#dc3545' icon={faTrash} />
        </Container>
    )
}