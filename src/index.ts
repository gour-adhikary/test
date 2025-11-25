import express from "express";
import { middleware } from "#middleware/middleware.js";

const app = express();
const port = process.env.PORT ?? "9001";

app.get("/", middleware);

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
})