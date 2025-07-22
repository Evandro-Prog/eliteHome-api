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
				is_furnished: property.isFurnished,
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

	async findById(id: string): Promise<Property | null> {
		const properties = await knex<PropertySchema>('properties').where({ id });

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

		const property = propertiesEntities[0];

		if (!property) {
			return null;
		}

		return property;
	}

	async update(
		id: string,
		property: Partial<Omit<Property, 'id' | 'createdAt' | 'updatedAt'>>,
	): Promise<Property> {
		const [updatedProperty] = await knex<PropertySchema>('properties')
			.update({
				...(property.name && { name: property.name }),
				...(property.totalValue && { total_value: property.totalValue }),
				...(property.rentValue && { rent_value: property.rentValue }),
				...(property.condoValue && { condo_value: property.condoValue }),
				...(property.taxValue && { tax_value: property.taxValue }),
				...(property.numberOfBathrooms && {
					number_of_bathrooms: property.numberOfBathrooms,
				}),
				...(property.parkingSlots && { parking_slots: property.parkingSlots }),
				...(property.arePetsAllowed && {
					are_pets_allowed: property.arePetsAllowed,
				}),
				...(property.isNextToSubway && {
					is_next_to_subway: property.isNextToSubway,
				}),
				...(property.isActive && { is_active: property.isActive }),
				...(property.numberOfRooms && {
					number_of_rooms: property.numberOfRooms,
				}),
				...(property.size && { size: property.size }),
				...(property.description && { description: property.description }),
				...(property.forRent && { for_rent: property.forRent }),
				...(property.forSale && { for_sale: property.forSale }),
				...(property.address && { address: property.address }),
				...(property.latitude && { latitude: property.latitude }),
				...(property.longitude && { longitude: property.longitude }),
				...(property.isFurnished && { is_furnished: property.isFurnished }),
			})
			.where({ id })
			.returning('*');

		const propertyEntity = new PropertySchema(updatedProperty).toEntity();

		return propertyEntity;
	}
}
