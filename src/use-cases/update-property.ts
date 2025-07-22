import type { PropertiesRepository } from '@/database/repositories/properties';
import type { Property } from '../entities/property';

export type UpdatePropertyUseCaseRequest = {
	name?: string;
	totalValue?: number;
	rentValue?: number;
	condoValue?: number;
	taxValue?: number;
	numberOfBathrooms?: number;
	parkingSlots?: number;
	arePetsAllowed?: boolean;
	isNextToSubway?: boolean;
	isActive?: boolean;
	numberOfRooms?: number;
	size?: number;
	description?: string;
	forRent?: boolean;
	forSale?: boolean;
	address?: string;
	latitude?: number;
	longitude?: number;
	isFurnished?: boolean;
};

type UpdatePropertyUseCaseResponse = {
	property: Property;
};

export class UpdatePropertyUseCase {
	constructor(private repository: PropertiesRepository) {}

	async execute(
		id: string,
		data: UpdatePropertyUseCaseRequest,
	): Promise<UpdatePropertyUseCaseResponse> {
		const updatedProperty = await this.repository.update(id, data);

		return { property: updatedProperty };
	}
}
