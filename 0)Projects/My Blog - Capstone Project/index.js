import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});

app.post("/submit", (req, res) => {
    const newPost = req.body.postContent;
    posts.push(newPost);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
  const targetPost = req.body.postContent;
  posts.delete(targetPost);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
