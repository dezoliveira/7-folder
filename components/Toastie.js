//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Col,
  Row,
	Toast
} from 'react-bootstrap';

//JSX Styles
const toastiee = {
  position: 'absolute',
  top: 50,
  right: 50
}

export default function Toastie({error, show, delay, handleShow}) {
	const toggleShow = () => {
		handleShow(true)
	}

	return (
		<Container fluid>
			<Row>
				<Col >
					<Toast 
						style={toastiee} 
						className={error ? 'bg-danger' : 'bg-success'} 
						onClose={() => toggleShow(false)}
						show={show} delay={delay}
						autohide
					>
						<Toast.Header>
							<img
								src="holder.js/20x20?text=%20"
								className="rounded me-2"
								alt=""
							/>
							<strong className="me-auto">Login</strong>
						</Toast.Header>
						<Toast.Body>
							{error ? 'Login Incorreto!' : 'Logado com sucesso!'}
						</Toast.Body>
					</Toast>
				</Col>
			</Row>
		</Container>
	)
}