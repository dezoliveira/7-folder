//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  ListGroup,
  Col
} from 'react-bootstrap';
import Actions from './Actions';

export default function Folder (props) {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item className='d-flex align-items-center justify-content-between gap-2'>
          <Container fluid className='d-flex align-content-center justify-content-between gap-2'>
            <Col lg={8} className='d-flex align-items-center gap-2'>
              <FontAwesomeIcon fontSize={32} color='#eab308' icon={faFolder} />  
              <p className='mb-0'>{props.name}</p>
            </Col>
            <Col lg={4} className='d-flex align-items-center justify-content-end'>
              <Actions />
            </Col>
          </Container>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}