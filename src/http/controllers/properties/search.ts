import type { FastifyReply, FastifyRequest } from 'fastify';
import { PropertiesRepository } from '@/database/repositories/properties';
import { SearchPropertyUseCase } from '@/use-cases/search-properties';

export async function search(_request: FastifyRequest, reply: FastifyReply) {
	const repository = new PropertiesRepository();
	const useCase = new SearchPropertyUseCase(repository);

	const response = await useCase.execute();

	return reply.status(200).send(response);
}
