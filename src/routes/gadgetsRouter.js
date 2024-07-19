const { Router } = require("express");
const gadgetsRouter = Router();

const {getGadgetsHandler, getGadgetHandler, postGadgetHandler} = require("../handlers/gadgetsHandlers")

gadgetsRouter.get("/", getGadgetsHandler);

gadgetsRouter.get("/:id", getGadgetHandler);

gadgetsRouter.post("/", postGadgetHandler);

module.exports = gadgetsRouter