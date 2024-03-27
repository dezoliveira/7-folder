//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Col,
  Row,
	Modal,
	Button
} from 'react-bootstrap';

//JSX Styles

export default function ConfirmBox({title, message, showConfirmBox}){
	const handleClose = () => {
		setShowConfirmBox(false)
	}

	const submitValue = () => {
		deleteFolder()
	}

  return (
		// <>
		//     <Modal show={showModal} onHide={handleClose}>
		//         <Modal.Header closeButton>
		//         <Modal.Title>Criação de Pastas</Modal.Title>
		//         </Modal.Header>
		//         <Modal.Body>
		//         <FormFolder 
		//             folders={folders}
		//             selectedParent={selectedParent}
		//             setInputFolder={setInputFolder}
		//             inputFolder={inputFolder}
		//             setSelectedParent={setSelectedParent}
		//         />
		//         </Modal.Body>
		//         <Modal.Footer>
		//         <Button variant="secondary" onClick={handleClose}>
		//             Fechar
		//         </Button>
		//         <Button variant="primary" onClick={submitValue}>
		//             {edit ? 'Editar' : 'Criar'}
		//         </Button>
		//         </Modal.Footer>
		//     </Modal>        
		// </>
		<>
			<Modal show={showConfirmBox} onHide={handleClose}>
					<Modal.Header closeButton>
							<Modal.Title>{title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							{message}
					</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
							Fechar
					</Button>
					<Button variant="primary" onClick={submitValue}>

					</Button>
					</Modal.Footer>
			</Modal>        
		</>
  )
}