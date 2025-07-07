import type { FastifyReply, FastifyRequest } from 'fastify';
import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property';

export function create(_request: FastifyRequest, reply: FastifyReply) {
	const useCase = new CreatePropertyUseCase();
	const response = useCase.execute(
		_request.body as CreatePropertyUseCaseRequest,
	);

	return reply.status(201).send(response);
}
