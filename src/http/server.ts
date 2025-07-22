import { envs } from '@/config/envs';
import { app } from './app';

console.log(envs);

app
	.listen({
		host: '0.0.0.0',
		port: envs.APP_PORT,
	})
	.then(() => {
		console.log(`🚀 Server is running at ${envs.APP_PORT}`);
	});
