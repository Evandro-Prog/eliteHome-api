import type { PropertiesRepository } from '@/database/repositories/properties';
import { NotFoundError } from '@/errors/not-found-error';
import type { Property } from '../entities/property';

type FindPropertyUseCaseResponse = Property;

export class FindPropertyUseCase {
	constructor(private repository: PropertiesRepository) {}

	async execute(id: string): Promise<FindPropertyUseCaseResponse> {
		const property = await this.repository.findById(id);

		if (!property) {
			throw new NotFoundError('Property not found.');
		}

		return property;
	}
}
