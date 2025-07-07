import type { FastifyReply, FastifyRequest } from 'fastify';
import { SearchPropertyUseCase } from '@/use-cases/search-properties';

export function search(_request: FastifyRequest, reply: FastifyReply) {
	const useCase = new SearchPropertyUseCase();
	const response = useCase.execute();

	return reply.status(200).send(response);
}
