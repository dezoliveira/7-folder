//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Form
} from 'react-bootstrap';
import SelectFolder from './SelectFolder';

export default function FormFolder({
	folders,
	selectedParent,
	inputFolder,
	setSelectedParent,
	setInputFolder
}) {
	
	const handleParent = (e) => {
		setSelectedParent(e.target.value)
	}

	const handleInplut = (e) => {
		setInputFolder(e.target.value)
	}

	return (
		<Container>
			<Form>
				<Form.Group className="mb-3" controlId="formFolderName">
					<Form.Label>Pasta Raiz:</Form.Label>
					<SelectFolder 
						folders={folders}
						selectedParent={selectedParent}
						handleParent={handleParent}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formFolderName">
					<Form.Label>Nome da Pasta:</Form.Label>
					<Form.Control
						value={inputFolder ? inputFolder : ''}
						type="text"
						placeholder="Ex: Fotos"
						onChange={handleInplut}
					/>
				</Form.Group>
			</Form>
		</Container>
	)
}