import dotenv from "dotenv";
dotenv.config();

import { makeRouter } from "./app";
import { makeDb } from "./db";
import { Temperature } from "./entities/Temperature";

const main = async () => {
    const app = makeRouter();
    const orm = await makeDb();

    const result = await orm.em.find(Temperature, {});

    console.log(result);
};

main();
