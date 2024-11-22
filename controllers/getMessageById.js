import { messages } from "../routes/indexRouter.js";

const getMessageById = (req, res) => {
  const message = messages[Number(req.params.messageId)];

  if (!message) {
    return res.status(404).send("Message not found.");
  }

  res.render("message", { message });
};

export default getMessageById;
