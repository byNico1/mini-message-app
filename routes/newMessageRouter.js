import { Router } from "express";
import { messages } from "./indexRouter.js";
import getMessageById from "../controllers/getMessageById.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});
newMessageRouter.get("/:messageId", getMessageById);
newMessageRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.redirect("/");
});

export default newMessageRouter;
