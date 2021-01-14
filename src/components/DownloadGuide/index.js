import React,{useState, useContext} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Context } from "../../store/appContext"
import Form from "react-bootstrap/Form"
import Spinner from "react-bootstrap/Spinner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const DownloadGuide = ({ children, className, onHide, onSubmit , title }) => { 
    const { store, actions } = useContext(Context)
    const [status, setStatus] = useState("closed");
    const [error, setError] = useState("");
    const [data, setData] = useState({ full_name:"", email:"", tel: ""})
    return (<>
        <button onClick={() => setStatus("open")} className={`${className}`}>{children}</button>
        <Modal
            size="lg"
            show={status!=="closed"}
            onHide={() => setStatus("closed")}
            aria-labelledby="download-guide"
            dialogClassName={`d-flex h-100 w-100 align-items-center justify-content-center ${status}`}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className="position-absolute close-icon hover-pointer"
                onClick={() => setStatus("closed")}
            />
            {status !== "sent" ? (
                <Modal.Title as="h2" id="download-guide" className="px-3">
                    {title}
                </Modal.Title>
            ) : (
                <Modal.Title as="h2" id="download-guide" className="px-3">
                Success <span className="light-purple">Prompt!</span>
                </Modal.Title>
            )}
            <Modal.Body>
                {status!== "sent" ? (
                <Form onSubmit={(e) => {
                        e.preventDefault();
                        setStatus("loading");
                        actions
                            .submitRequest("download_search_job", data.full_name, data.email, data.tel)
                            .then(() => setStatus("sent"))
                            .catch((error) => setStatus("error") || setError(error.message || error))
                    }}>
                    {status === "error" && 
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    }
                    <Form.Group controlId="fullName" className="mb-5">
                    <Form.Label className="d-block">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="" size="lg" required value={data.full_name} onChange={(e) => setData({ ...data, full_name: e.target.value }) || setStatus("opened")} />
                    </Form.Group>
                    <Form.Group controlId="emailAddress" className="mb-5">
                    <Form.Label className="d-block">Email address</Form.Label>
                    <Form.Control type="email" placeholder="" size="lg" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value }) || setStatus("opened")} />
                    </Form.Group>
                    <Form.Group controlId="telephone" className="mb-5">
                    <Form.Label className="d-block">
                        Phone Number <span className="text-muted">(optional)</span>
                    </Form.Label>
                    <Form.Control type="tel" placeholder="" size="lg" value={data.tel} onChange={(e) => setData({ ...data, tel: e.target.value }) || setStatus("opened")} />
                    </Form.Group>

                    <Button variant="primary" size="lg" type="submit" block>
                    {status === "loading" ? (
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
                    <Button variant="primary" size="lg">
                    Download Syllabus
                    </Button>
                </div>
                )}
            </Modal.Body>
        </Modal>
    </>)
}
export default DownloadGuide;