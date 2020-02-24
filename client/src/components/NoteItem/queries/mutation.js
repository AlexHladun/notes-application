import { gql } from "apollo-boost"

export const updatedNoteMutation = gql`
  mutation updateNote($id: ID, $title: String!, $description: String!) {
    updateNote(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`
