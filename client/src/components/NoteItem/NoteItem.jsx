import React, { useState, useEffect } from "react"
import withHocs from "./NoteItemHoc"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { noteQuery } from "./queries/queries"

import { useTranslation } from "react-i18next"

import BackHome from "../BackHome/BackHome.jsx"

import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

const NoteItem = ({ updateNote }) => {
  const [editedNote, setNote] = useState({})
  const { t, i18n } = useTranslation()

  let { id } = useParams()
  const { loading, data = {} } = useQuery(noteQuery, {
    variables: { id }
  })
  const { note = {} } = data
  const { title, description } = note
  useEffect(() => {
    setNote({ title, description })
  }, [title, description])

  const [editing, setEdited] = useState(false)

  const handleChange = name => ({ target }) => {
    setNote({ ...editedNote, [name]: target.value })
    setEdited(true)
  }

  const handleSave = note => {
    updateNote(note)
    setEdited(false)
  }

  return (
    <>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <BackHome />
          <Card bg="light" style={{ width: "35rem" }}>
            <Card.Header>{editedNote.title}</Card.Header>
            <Card.Body>
              <Card.Title>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Large text"
                  name="title"
                  className="title-note"
                  defaultValue={editedNote.title}
                  onChange={handleChange("title")}
                />
              </Card.Title>
              <Card.Text>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>{t("desc_new_note")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    className="description-note"
                    onChange={handleChange("description")}
                    defaultValue={editedNote.description}
                  />
                </Form.Group>
                <Button className="save-btn" onClick={() => handleSave({ id, ...editedNote })} disabled={!editing}>
                  {t("save")}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  )
}

export default withHocs(NoteItem)
