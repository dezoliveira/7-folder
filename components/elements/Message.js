//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Container,
  Col,
  Row,
	Toast
} from 'react-bootstrap';

//JSX Styles
const onScreen = {
  position: 'absolute',
  top: 50,
  right: 50,
  zIndex: 9999
}

export default function Message({error, show, delay, handleShow, message}) {
	const toggleShow = () => {
		handleShow(true)
	}

	return (
		<Container fluid>
			<Row>
				<Col >
					<Toast 
						style={onScreen} 
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
							<strong className="me-auto">
								{error ? 'Algo deu errado' : 'Deu tudo certo'}
							</strong>
						</Toast.Header>
						<Toast.Body>
							{error ? message.error : message.success}
						</Toast.Body>
					</Toast>
				</Col>
			</Row>
		</Container>
	)
}