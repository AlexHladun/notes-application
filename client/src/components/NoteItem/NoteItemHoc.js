import { compose } from "recompose"
import { graphql } from "react-apollo"
import { noteQuery } from "./queries/queries"
import { updatedNoteMutation } from "./queries/mutation"

const withGraphQL = compose(
    graphql(updatedNoteMutation, {
      props: ({ mutate }) => ({
        updateNote: id => mutate({
          variables: id,
          refetchQueries: [{ query: noteQuery }],
        }),
      }),
    })
  );


export default compose(withGraphQL, graphql(noteQuery))
