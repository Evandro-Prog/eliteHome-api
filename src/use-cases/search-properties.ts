import type { PropertiesRepository } from '@/database/repositories/properties';
import type { Property } from '../entities/property';

type SearchPropertyUseCaseResponse = {
	properties: Property[];
};

export class SearchPropertyUseCase {
	constructor(private repository: PropertiesRepository) {}

	async execute(): Promise<SearchPropertyUseCaseResponse> {
		const properties = await this.repository.find();

		return { properties };
	}
}
