import { gql } from "apollo-boost"

export const notesQuery = gql`
  query notesQuery {
    notes {
      id
      title
      description
    }
  }
`

