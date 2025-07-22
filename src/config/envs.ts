import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
	NODE_ENV: env.get('NODE_ENV').default('development').asString(),
	APP_PORT: env.get('APP_PORT').default('4000').asPortNumber(),

	POSTGRES_CONNECTION_STRING: env
		.get('POSTGRES_CONNECTION_STRING')
		.required()
		.asString(),
};
