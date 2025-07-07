import { knex } from '@/database';
import { Property } from '../entities/property';

export type CreatePropertyUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: number;
};

type CreatePropertyUseCaseResponse = {
	property: Property;
};

export class CreatePropertyUseCase {
	async execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePropertyUseCaseRequest): Promise<CreatePropertyUseCaseResponse> {
		const property = new Property({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

		const [createdProperty] = await knex('properties')
			.insert({
				name: property.name,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
				size: property.size,
				city: property.city,
				state: property.state,
			})
			.returning('*');

		return { property: createdProperty };
	}
}
