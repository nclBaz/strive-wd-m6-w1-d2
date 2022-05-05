// ************************* BOOKS CRUD ********************************

// 1. POST http://localhost:3001/books/ --> CREATES A NEW USER
// 2. GET http://localhost:3001/books/ --> LIST ALL THE books
// 3. GET http://localhost:3001/books/:id --> READ A SINGLE USER (specified by id)
// 4. PUT http://localhost:3001/books/:id --> UPDATES A SINGLE USER (specified by id)
// 5. DELETE http://localhost:3001/books/:id --> DELETES A SINGLE USER (specified by id)

import express from "express"

const booksRouter = express.Router()

// 1.
booksRouter.post("/", (req, res) => {
  // (req, res) => {} is the ENDPOINT HANDLER. Is the function that will be executed every time a request on that endpoint is sent. req and res are REQUEST and RESPONSE objects

  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 2.
booksRouter.get("/", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 3.
booksRouter.get("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 4.
booksRouter.put("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

// 5.
booksRouter.delete("/:id", (req, res) => {
  res.send({ message: `HELLO I AM THE ${req.method} ROUTE: ` })
})

export default booksRouter
