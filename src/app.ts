import cors from "cors";
import express from "express";

export const makeRouter = () => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (_, res) => res.status(200).send("ok"));

    app.listen(8080, () => {
        console.log("###############################");
        console.log("  Listening on port : 8080");
        console.log("###############################");
    });

    return app;
};
