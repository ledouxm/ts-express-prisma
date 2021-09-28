import { Temperature } from "./src/entities/Temperature";

export default {
    entities: [Temperature],
    dbName: "myDb",
    type: "postgresql",
    clientUrl: "postgresql://postgres:{PASSWORD}@localhost:5432",
} as any;
