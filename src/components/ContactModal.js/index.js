import React,{useState} from "react";
import Modal from "react-bootstrap/Modal"

const Modal = (props) => { 
    const {onHide, onSubmit , title} = props;
    const [sent, setSent] = useState(false);
    const [data, setData] = useState({})

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="syllabus-request"
      dialogClassName={
        !sent
          ? "d-flex h-100 w-100 align-items-center justify-content-center"
          : "d-flex h-100 w-100 align-items-center justify-content-center sent"
      }
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="position-absolute close-icon"
        onClick={() => onHide(true)}
      />
      {!sent ? (
        <Modal.Title as="h2" id="syllabus-request" className="px-3">
            {title}
        </Modal.Title>
      ) : (
        <Modal.Title as="h2" id="syllabus-request" className="px-3">
          Success <span className="light-purple">Prompt!</span>
        </Modal.Title>
      )}
      <Modal.Body>
        {!sent ? (
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="fullName" className="mb-5">
              <Form.Label className="d-block">Full Name</Form.Label>
              <Form.Control type="text" placeholder="" size="lg" required value={data.full_name} onChange={(e) => setData({ ...data, full_name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="emailAddress" className="mb-5">
              <Form.Label className="d-block">Email address</Form.Label>
              <Form.Control type="email" placeholder="" size="lg" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="telephone" className="mb-5">
              <Form.Label className="d-block">
                Phone Number <span className="text-muted">(optional)</span>
              </Form.Label>
              <Form.Control type="tel" placeholder="" size="lg" required value={data.tel} onChange={(e) => setData({ ...data, tel: e.target.value })} />
            </Form.Group>

            <Button variant="primary" size="lg" type="submit" block>
              {submitting ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="md"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        ) : (
          <div>
            <p className="mt-0 mb-5">
              Now that you have completed the last card, get a head start and
              prepare for the item you signed up for.
            </p>
            <Button variant="primary" size="lg" onClick={() => {
                e.preventDefault();
                onSubmit(data);
                setSent(true);
            }}>
              Download Syllabus
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}