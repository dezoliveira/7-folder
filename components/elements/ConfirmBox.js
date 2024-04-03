//Bootstrap
import { Modal, Button } from "react-bootstrap"

//JSX Styles
export default function ConfirmBox({
  id,
  title,
  message,
  showConfirmBox,
  deleteFolder,
  setShowConfirmBox,
}) {
  const handleClose = () => {
    setShowConfirmBox(false);
  }

  const submitValue = () => {
    deleteFolder(id);
    setShowConfirmBox(false)
  }

  return (
    <>
      <Modal show={showConfirmBox} onHide={handleClose}>
    	<Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={submitValue}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
