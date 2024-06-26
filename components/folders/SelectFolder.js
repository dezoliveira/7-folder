//Bootstrap
import { 
  Form
} from 'react-bootstrap';

export default function SelectFolder({folders, handleParent, selectedParent}) {
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