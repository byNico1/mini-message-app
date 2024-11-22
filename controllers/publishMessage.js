import { messages } from "../routes/indexRouter.js";

const pusblishMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.redirect("/");
};

export default pusblishMessage;
