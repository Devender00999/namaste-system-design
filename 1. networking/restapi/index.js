import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const PORT = 5111;

app.listen(PORT, () => {
   console.log(`Server is running at port: ${PORT}`);
});

const todos = [{ id: 1, title: "Work on task", completed: false }];

app.get("/todos", (req, res) => {
   res.json({ data: todos });
});

app.post("/todos", (req, res) => {
   todos.push({
      id: Date.now(),
      completed: false,
      title: req.body.title || "",
   });
   res.status(201).json({ message: "New todo created" });
});

app.put("/todos/:id", (req, res) => {
   const todoIdx = todos.findIdx((item) => item.id == req.body.id);
   if (todoIdx != -1) {
      todos[todoIdx] = {
         id: req.params.id,
         ...req.body,
      };
   }
   res.json({ message: "Todo updated successfully." });
});

app.delete("/todos/:id", (req, res) => {
   const todoIdx = todos.findIdx((item) => item.id == req.body.id);
   if (todoIdx != -1) {
      todos.splice(todoIdx, 1);
   }
   res.json({ message: "Todo updated successfully." });
});
