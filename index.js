import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.static(path.join(__dirname, "public/codetann-portfolio/build"))
);
app.use(express.static(path.join(__dirname, "public/html-resume")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html-resume/index.html"));
});

app.listen(PORT, () => console.log(`server   - running on port ${PORT}`));
