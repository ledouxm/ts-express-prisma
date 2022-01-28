import dotenv from "dotenv";
dotenv.config();

import { makeRouter } from "@/app";
import { db } from "@/db";
import { makeDebug } from "@/utils";

const debug = makeDebug("server.ts");

const main = async () => {
    try {
        const app = makeRouter();
        const results = await db.script.findMany();
        debug("results", results);
    } catch (e) {
        throw e;
    } finally {
        await db.$disconnect();
    }
};

main();
