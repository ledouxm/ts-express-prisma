import { Migration } from '@mikro-orm/migrations';

export class Migration20210928232552 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "temperature" ("date" jsonb not null, "measure" int4 not null);');
    this.addSql('alter table "temperature" add constraint "temperature_pkey" primary key ("date");');
  }

}
