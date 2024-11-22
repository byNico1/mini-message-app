import { Router } from "express";
import getMessageById from "../controllers/getMessageById.js";
import pusblishMessage from "../controllers/publishMessage.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});
newMessageRouter.get("/:messageId", getMessageById);
newMessageRouter.post("/", pusblishMessage);

export default newMessageRouter;
