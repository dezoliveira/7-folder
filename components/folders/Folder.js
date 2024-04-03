//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons/faFolderTree'

//Bootstrap
import { 
  Container,
  ListGroup,
  Col
} from 'react-bootstrap';

export default function Folder ({
    id,
    name,
    parent,
    handleRemove,
    handleId,
    handleShow,
    folder,
    allFolders 
  }) {
    
  const editFolder = (e) => {
    e.preventDefault()
    handleShow(true)
    handleId(id, name, parent)
  }

  const removeFolder = (e) => {
    e.preventDefault()
    handleRemove(id, name)
  }

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item className='d-flex align-items-center justify-content-between gap-2'>
          <Container fluid className='d-flex align-content-center justify-content-between gap-2'>
            <Col lg={8} className='d-flex align-items-center gap-2'>
              {
                folder.parent !== null ?
                <>
                  <FontAwesomeIcon icon={faFolderTree} />
                </> : ''
              }
              <FontAwesomeIcon fontSize={32} color='#eab308' icon={faFolder} />  
              <p className='mb-0'>{folder.name}</p>
            </Col>
            <Col lg={4} className='d-flex align-items-center justify-content-end gap-2'>
              <FontAwesomeIcon fontSize={18} color='#fd7e14' icon={faPenToSquare} onClick={editFolder}/>
              <FontAwesomeIcon fontSize={18} color='#dc3545' icon={faTrash} onClick={removeFolder}/>
            </Col>
          </Container>
        </ListGroup.Item>
      </ListGroup>
      <Container fluid className='px-3'>
        {
          allFolders
            .filter(f => f.parent === folder.id)
            .map(childFolder => (
              <Folder 
                key={childFolder.id} 
                id={childFolder.id}
                name={childFolder.name}
                parent={childFolder.parent}
                folder={childFolder} 
                allFolders={allFolders} 
                handleRemove={handleRemove} 
                handleShow={handleShow} 
                handleId={handleId} 
              />
          ))
        }
      </Container>
    </Container>
  )
}