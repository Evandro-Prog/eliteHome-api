import knexConfig from 'knex';

export const knex = knexConfig({
	client: 'pg',
	connection: 'postgres://eliteApi:060919@localhost:5432/eliteHomeApi',
	pool: {
		min: 2,
		max: 10,
	},
});
