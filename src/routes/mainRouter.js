const { Router } = require("express");
const gadgetsRouter = require("./gadgetsRouter");
const usersRouter = require("./UsersRouter");

const mainRouter = Router();

mainRouter.use("/gadgets", gadgetsRouter);
mainRouter.use("/users", usersRouter);


module.exports = mainRouter;