import cors from "cors";
import express from "express";

const { PORT } = process.env;

export const makeRouter = () => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (_, res) => res.status(200).send("ok"));

    app.listen(PORT, () => {
        console.log("###############################");
        console.log(`  Listening on port : ${PORT}`);
        console.log("###############################");
    });

    return app;
};
