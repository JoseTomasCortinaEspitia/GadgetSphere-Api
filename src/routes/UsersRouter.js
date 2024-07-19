const { Router } = require("express");
const usersRouter = Router();

const {postUserHandler} = require("../handlers/usersHandlers")

usersRouter.post("/", postUserHandler)

module.exports = usersRouter