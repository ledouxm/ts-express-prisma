import dotenv from "dotenv";
dotenv.config();

import { makeRouter } from "@/app";
import { makeDebug } from "@/utils";

const debug = makeDebug("server.ts");

const main = async () => {
        const app = makeRouter();
};

main();
