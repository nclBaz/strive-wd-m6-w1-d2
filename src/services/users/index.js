// ************************* USERS CRUD ********************************

// 1. POST http://localhost:3001/users/ --> CREATES A NEW USER
// 2. GET http://localhost:3001/users/ --> LIST ALL THE USERS
// 3. GET http://localhost:3001/users/:id --> READ A SINGLE USER (specified by id)
// 4. PUT http://localhost:3001/users/:id --> UPDATES A SINGLE USER (specified by id)
// 5. DELETE http://localhost:3001/users/:id --> DELETES A SINGLE USER (specified by id)

import express from "express"
import UsersModel from "./model.js"

const usersRouter = express.Router()

// 1.
usersRouter.post("/", async (req, res) => {
  // (req, res) => {} is the ENDPOINT HANDLER. Is the function that will be executed every time a request on that endpoint is sent. req and res are REQUEST and RESPONSE objects

  console.log("REQUEST BODY: ", req.body)

  const newUser = new UsersModel(req.body) // this is going to VALIDATE the req.body
  const savedUser = await newUser.save() // This saves the validated body into the users' collection

  res.send(savedUser)
})

// 2.
usersRouter.get("/", async (req, res) => {
  const users = await UsersModel.find()
  res.send(users)
})

// 3.
usersRouter.get("/:userId", async (req, res) => {
  const user = await UsersModel.findById(req.params.userId)
  res.send(user)
})

// 4.
usersRouter.put("/:userId", async (req, res) => {
  const updatedUser = await UsersModel.findByIdAndUpdate(
    req.params.userId, // WHO
    req.body, // HOW
    { new: true } // OPTIONS (if you want to obtain the updated user you should specify new: true)
  )
  res.send(updatedUser)
})

// 5.
usersRouter.delete("/:userId", async (req, res) => {
  await UsersModel.findByIdAndDelete(req.params.userId)
  res.status(204).send()
})

export default usersRouter
