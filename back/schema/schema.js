const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLDate
} = graphql

const Notes = require("../models/note")

const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  })
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addNote: {
      type: NoteType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { title, description, date }) {
        const note = new Notes({
          title,
          description,
        })
        return note.save()
      }
    },
    deleteNote: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Notes.findByIdAndRemove(id)
      }
    },
    updateNote: {
      type: NoteType,
      args: {
        id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { id, title, description, date }) {
        return Notes.findByIdAndUpdate(
          id,
          {
            $set: {
              title,
              description,
            }
          },
          { new: true }
        )
      }
    }
  })
})

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Notes.findById(id)
      }
    },
    notes: {
      type: new GraphQLList(NoteType),
      resolve() {
        return Notes.find({})
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
