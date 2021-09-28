import { MikroORM } from "@mikro-orm/core";
import dbConfig from "../mikro-orm.config";
export const makeDb = async () => {
    const orm = await MikroORM.init(dbConfig);

    return orm;
};
