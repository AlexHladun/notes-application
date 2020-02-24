import React, { useState } from "react"
import withHocs from "./NotesListHoc"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import ListGroup from "react-bootstrap/ListGroup"

const NotesList = ({ data = {}, addNote, deleteNote }) => {
  const [note, setNote] = useState({})
  const [show, setShow] = useState(false)
  const { notes = [] } = data

  const { t, i18n } = useTranslation()

  const handleChange = name => ({ target }) => {
    setNote({ ...note, [name]: target.value })
  }

  const handleSave = () => {
    addNote(note)
    handleClose()
  }

  const handleDelete = id => deleteNote(id)

  const handleClose = () => setShow(false)

  const handleOpen = () => setShow(true)

  return (
    <div className={"listNotes"}>
      <h2 className={"titleList"}>{t("main_title")}</h2>
      <ListGroup>
        {notes.map(({ id, title }) => (
          <div className={"noteItemList"} key={id}>
            <Link to={`/note/${id}`}>
              <ListGroup.Item className="new-note">{title}</ListGroup.Item>
            </Link>
            <Button variant="danger" className="deleteBtn" onClick={() => handleDelete({ id })}>
              {t("delete")}
            </Button>
          </div>
        ))}
      </ListGroup>
      <Button variant="primary" className={"addNewButton"} id="add-new-note" onClick={handleOpen}>
        {t("add_note")}
      </Button>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{t("new_note")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>{t("title_new_note")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("title_placeholder")}
              name="title"
              id="title-note"
              onChange={handleChange("title")}
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t("desc_new_note")}</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              id="description-note"
              onChange={handleChange("description")}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("close")}
          </Button>
          <Button variant="primary" id="save-new-note" onClick={handleSave}>
            {t("save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default withHocs(NotesList)
