import type { FastifyReply, FastifyRequest } from 'fastify';
import { AppInfoUseCase } from '../../../use-cases/app-info';

export function info(_request: FastifyRequest, reply: FastifyReply) {
	const useCase = new AppInfoUseCase();
	const response = useCase.execute();

	return reply.status(200).send(response);
}
