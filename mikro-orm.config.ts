import { Temperature } from "./src/entities/Temperature";

export default {
    type: "postgresql",
    entities: [Temperature],
    dbName: process.env.POSTGRES_DB || "myDb",
    clientUrl: process.env.POSTGRES_URL || "postgresql://postgres@localhost:5432",
} as any;
