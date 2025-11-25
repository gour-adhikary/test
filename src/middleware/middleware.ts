import type { RequestHandler } from "express";

export const middleware: RequestHandler = (_req, res) => {
    res.send("Namaste Duniya");
    console.log("Response sent");
}