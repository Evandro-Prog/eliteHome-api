import type { PropertiesRepository } from '@/database/repositories/properties';
import { Property } from '../entities/property';

export type CreatePropertyUseCaseRequest = {
	name: string;
	totalValue: number;
	rentValue: number;
	condoValue: number;
	taxValue: number;
	numberOfBathrooms: number;
	parkingSlots: number;
	arePetsAllowed: boolean;
	isNextToSubway: boolean;
	isActive: boolean;
	numberOfRooms: number;
	size: number;
	description: string;
	forRent: boolean;
	forSale: boolean;
	address: string;
	latitude: number;
	longitude: number;
};

type CreatePropertyUseCaseResponse = {
	property: Property;
};

export class CreatePropertyUseCase {
	constructor(private repository: PropertiesRepository) {}

	async execute(
		data: CreatePropertyUseCaseRequest,
	): Promise<CreatePropertyUseCaseResponse> {
		const property = new Property(data);

		const createdProperty = await this.repository.create(property);

		return { property: createdProperty };
	}
}
