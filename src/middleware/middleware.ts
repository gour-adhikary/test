import type { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res) => {
    res.send("Namaste Duniya");
    console.log("Response sent");
}