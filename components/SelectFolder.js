//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Form
} from 'react-bootstrap';

export default function FormSelect({folders, handleParent, selectedParent}) {
	return (
		<>
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
		</>
	)
}