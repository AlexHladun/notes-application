import { gql } from "apollo-boost"

export const noteQuery = gql`
  query note($id: ID) {
    note(id: $id) {
      id
      title
      description
    }
  }
`
