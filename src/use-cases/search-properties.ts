import { properties } from '@/http/controllers/properties/route';
import type { Property } from '../entities/property';

export type CreatePropertyUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
};

type SearchPropertyUseCaseResponse = {
	properties: Property[];
};

export class SearchPropertyUseCase {
	execute(): SearchPropertyUseCaseResponse {
		return { properties };
	}
}
