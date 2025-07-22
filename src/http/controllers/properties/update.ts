import type { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';
import { PropertiesRepository } from '@/database/repositories/properties';
import { UpdatePropertyUseCase } from '@/use-cases/update-property';

export async function update(request: FastifyRequest, reply: FastifyReply) {
	const schema = z.object({
		name: z.string().min(1).max(255).optional(),
		totalValue: z.number().int().optional(),
		rentValue: z.number().int().optional(),
		condoValue: z.number().int().optional(),
		taxValue: z.number().int().optional(),
		numberOfBathrooms: z.number().int().optional(),
		parkingSlots: z.number().int().optional(),
		arePetsAllowed: z.boolean().optional(),
		isNextToSubway: z.boolean().optional(),
		isActive: z.boolean().optional(),
		numberOfRooms: z.number().int().optional(),
		size: z.number().optional(),
		description: z.string().max(1000).optional(),
		forRent: z.boolean().optional(),
		forSale: z.boolean().optional(),
		address: z.string().optional(),
		latitude: z.number().optional(),
		longitude: z.number().optional(),
		isFurnished: z.boolean().optional(),
	});

	const paramsSchema = z.object({
		id: z.string().uuid(),
	});

	const data = schema.parse(request.body);
	const params = paramsSchema.parse(request.params);

	const repository = new PropertiesRepository();
	const useCase = new UpdatePropertyUseCase(repository);

	const response = await useCase.execute(params.id, data);

	return reply.status(200).send(response);
}
