import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.alterTable('properties', (table) => {
		table.boolean('for_sale').notNullable().defaultTo(true);
		table.boolean('for_rent').notNullable().defaultTo(true);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.alterTable('properties', (table) => {
		table.dropColumn('for_sale');
		table.dropColumn('for_rent');
	});
}
