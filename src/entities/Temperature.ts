import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Temperature {
    @PrimaryKey()
    date = new Date();

    @Property()
    measure: number;
}
