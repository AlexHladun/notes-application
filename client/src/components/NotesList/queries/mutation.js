import { gql } from "apollo-boost"

export const addNoteMutation = gql`
  mutation addNote($title: String!, $description: String!) {
    addNote(title: $title, description: $description) {
      title
      description
    }
  }
`
export const deleteNoteMutation = gql`
  mutation deleteNote($id: ID) {
    deleteNote(id: $id) {
      id
      title
      description
    }
  }
`
