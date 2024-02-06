import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.static(path.join(__dirname, 'src', 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});

const port = 3333;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
