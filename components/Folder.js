import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'

import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  ListGroup,
} from 'react-bootstrap';

export default function Folder (props) {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item key={props.id.toString()} className='d-flex align-items-center gap-2'>
            <FontAwesomeIcon fontSize={32} color='#eab308' icon={faFolder} />  
            <p className='mb-0'>{props.name}</p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}