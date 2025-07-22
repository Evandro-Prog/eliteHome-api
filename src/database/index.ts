import knexConfig from 'knex';
import { envs } from '@/config/envs';

export const knex = knexConfig({
	client: 'pg',
	connection: envs.POSTGRES_CONNECTION_STRING,
	pool: {
		min: 2,
		max: 10,
	},
});
