import express from "express"
import listEndpoints from "express-list-endpoints"
import mongoose from "mongoose"
import usersRouter from "./services/users/index.js"
import booksRouter from "./services/books/index.js"

const server = express()

const port = 3001

server.use(express.json()) // if you don't add this line BEFORE the endpoints, all requests' bodies will be UNDEFINED

// ************************ ENDPOINTS *******************

server.use("/users", usersRouter) // all the endpoints in the usersRouter they gonna have http://localhost:3001/users as a URL
server.use("/books", booksRouter)

// ********************** DATABASE CONNECTION ************************

mongoose.connect(process.env.MONGO_CONNECTION_URL)

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB!`)
  server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`)
  })
})
