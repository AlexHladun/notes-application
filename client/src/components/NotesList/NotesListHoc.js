import { compose } from "recompose"
import { graphql } from "react-apollo"

import { addNoteMutation, deleteNoteMutation } from "./queries/mutation"
import { notesQuery } from "./queries/queries"


const withGraphQL = compose(
  graphql(addNoteMutation, {
    props: ({ mutate }) => ({
      addNote: note => mutate({
        variables: note,
        refetchQueries: [{ query: notesQuery }],
      }),
    }),
  }),
  graphql(deleteNoteMutation, {
    props: ({ mutate }) => ({
      deleteNote: id => mutate({
        variables: id,
        refetchQueries: [{ query: notesQuery }],
      }),
    }),
  }),

);
export default compose(withGraphQL, graphql(notesQuery));

