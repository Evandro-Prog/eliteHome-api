import type { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';
import { VisitsRepository } from '@/database/repositories/visits';
import { CreateVisitUseCase } from '@/use-cases/create-visit';

export async function create(request: FastifyRequest, reply: FastifyReply) {
	const schema = z.object({
		name: z.string().min(1).max(255),
		phone: z.string().length(14),
		email: z.string().email(),
		date: z.coerce.date(),
		status: z.string(),
		propertyId: z.string().uuid(),
	});

	const data = schema.parse(request.body);

	const repository = new VisitsRepository();
	const useCase = new CreateVisitUseCase(repository);

	const response = await useCase.execute(data);

	return reply.status(201).send(response);
}
