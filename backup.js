const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

<Container>
    {
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            {/* Folder Name */}
            <Form.Group className="mb-3" controlId="formFolderName">
                <Form.Label>Nome da Pasta</Form.Label>
                <Form.Control type="text" placeholder="Ex: Fotos" />
            </Form.Group>

            {/* Button Login */}
            <Button variant="primary" type="submit">
                Criar
            </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    }
</Container>