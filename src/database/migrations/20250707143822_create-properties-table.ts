import type { Knex } from 'knex';

export async function up(_knex: Knex): Promise<void> {
	return _knex.schema.createTable('properties', (table) => {
		table.uuid('id').primary().defaultTo(_knex.fn.uuid());
		table.string('name', 255).notNullable();
		table.integer('total_value').notNullable();
		table.integer('number_of_rooms').notNullable();
		table.integer('size').notNullable();
		table.string('city', 255).notNullable();
		table.string('state', 2).notNullable();
		table.timestamp('created_at').defaultTo(_knex.fn.now());
		table.timestamp('updated_at').defaultTo(_knex.fn.now());
	});
}

export async function down(_knex: Knex): Promise<void> {
	return _knex.schema.dropTable('properties');
}
