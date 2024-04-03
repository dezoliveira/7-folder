//Bootstrap
import { Container, Col, Row, Toast, ToastContainer } from "react-bootstrap"

export default function Message({
  error,
  show,
  delay,
  handleShow,
  message,
  customClass,
}) {
  const toggleShow = () => {
    handleShow(true);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <ToastContainer
            position={customClass ? "bottom-end" : "top-end"}
            className="p-5"
          >
            <Toast
              position={customClass ? "bottom-end" : ""}
              className={error ? "bg-danger" : "bg-success"}
              onClose={() => toggleShow(false)}
              show={show}
              delay={delay}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">
                  {error ? "Algo deu errado" : "Deu tudo certo"}
                </strong>
              </Toast.Header>
              <Toast.Body>{error ? message.error : message.success}</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </Container>
  );
}
