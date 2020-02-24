import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Routes from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
})


export default function App() {
  return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
  )
}


