import { knex } from '@/database/index';
import type { Property } from '@/entities/property';
import { PropertySchema } from '../schemas/property';

export class PropertiesRepository {
	async create(property: Property): Promise<Property> {
		const [createdProperty] = await knex<PropertySchema>('properties')
			.insert({
				name: property.name,
				total_value: property.totalValue,
				rent_value: property.rentValue,
				condo_value: property.condoValue,
				tax_value: property.taxValue,
				number_of_bathrooms: property.numberOfBathrooms,
				parking_slots: property.parkingSlots,
				are_pets_allowed: property.arePetsAllowed,
				is_next_to_subway: property.isNextToSubway,
				is_active: property.isActive,
				number_of_rooms: property.numberOfRooms,
				size: property.size,
				description: property.description,
				for_rent: property.forRent,
				for_sale: property.forSale,
				address: property.address,
				latitude: property.latitude,
				longitude: property.longitude,
			})
			.returning('*');

		const propertyEntity = new PropertySchema(createdProperty).toEntity();

		return propertyEntity;
	}

	async find(): Promise<Property[]> {
		const properties = await knex<PropertySchema>('properties');

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

		return propertiesEntities;
	}
}
