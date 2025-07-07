import type { FastifyReply, FastifyRequest } from 'fastify';
import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property';

export async function create(_request: FastifyRequest, reply: FastifyReply) {
	//TODO validar dados create das properties
	const useCase = new CreatePropertyUseCase();
	const response = await useCase.execute(
		_request.body as CreatePropertyUseCaseRequest,
	);

	return reply.status(201).send(response);
}
