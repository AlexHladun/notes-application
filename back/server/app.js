const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("../schema/schema")
const mongoose = require("mongoose")
const cors = require('cors')

mongoose.connect("mongodb+srv://Alex:salamander@cluster23-mes9x.mongodb.net/DB_for_test_project?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})

const app = express()
const PORT = 3001

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
)


const dbConnection = mongoose.connection
dbConnection.on("error", err => console.log(`Connection error: ${err}`))
dbConnection.once("open", () => console.log("Connected to DB!"))

app.listen(PORT, err => {
  err ? console.log("Error") : console.log(`Server started on port ${PORT} !`)
})
