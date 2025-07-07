import path from 'node:path';
import type { Knex } from 'knex';

const config: Knex.Config = {
	client: 'postgresql',
	connection: 'postgres://eliteApi:060919@localhost:5432/eliteHomeApi',
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: path.join(__dirname, 'src', 'database', 'migrations'),
	},
};

export default config;
