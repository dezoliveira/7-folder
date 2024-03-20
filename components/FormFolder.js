//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Form
} from 'react-bootstrap';

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
					<Form.Select 
						aria-label="Default select example"
						onChange={handleParent}
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
						onChange={handleInplut}
					/>
				</Form.Group>
			</Form>
		</Container>
	)
}