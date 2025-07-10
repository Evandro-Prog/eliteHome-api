import { Property } from '@/entities/property';

type PropertySchemaProps = {
	id?: string;
	name: string;
	total_value: number;
	rent_value: number;
	condo_value: number;
	tax_value: number;
	number_of_bathrooms: number;
	parking_slots: number;
	are_pets_allowed: boolean;
	is_next_to_subway: boolean;
	is_active: boolean;
	number_of_rooms: number;
	size: number;
	description: string;
	for_rent: boolean;
	for_sale: boolean;
	address: string;
	latitude: number;
	longitude: number;
	created_at?: Date;
	updated_at?: Date;
};

export class PropertySchema {
	public id?: string;
	public name: string;
	public total_value: number;
	public rent_value: number;
	public condo_value: number;
	public tax_value: number;
	public number_of_bathrooms: number;
	public parking_slots: number;
	public are_pets_allowed: boolean;
	public is_next_to_subway: boolean;
	public is_active: boolean;
	public number_of_rooms: number;
	public size: number;
	public description: string;
	public for_rent: boolean;
	public for_sale: boolean;
	public address: string;
	public latitude: number;
	public longitude: number;
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: PropertySchemaProps) {
		this.id = props.id;
		this.name = props.name;
		this.total_value = props.total_value;
		this.rent_value = props.rent_value;
		this.condo_value = props.condo_value;
		this.tax_value = props.tax_value;
		this.number_of_bathrooms = props.number_of_bathrooms;
		this.parking_slots = props.parking_slots;
		this.are_pets_allowed = props.are_pets_allowed;
		this.is_next_to_subway = props.is_next_to_subway;
		this.is_active = props.is_active;
		this.number_of_rooms = props.number_of_rooms;
		this.size = props.size;
		this.description = props.description;
		this.for_rent = props.for_rent;
		this.for_sale = props.for_sale;
		this.address = props.address;
		this.latitude = props.latitude;
		this.longitude = props.longitude;
		this.created_at = props.created_at;
		this.updated_at = props.updated_at;
	}

	public toEntity() {
		return new Property({
			id: this.id,
			name: this.name,
			totalValue: this.total_value,
			rentValue: this.rent_value,
			condoValue: this.condo_value,
			taxValue: this.tax_value,
			numberOfBathrooms: this.number_of_bathrooms,
			parkingSlots: this.parking_slots,
			arePetsAllowed: this.are_pets_allowed,
			isNextToSubway: this.is_next_to_subway,
			isActive: this.is_active,
			numberOfRooms: this.number_of_rooms,
			size: this.size,
			description: this.description,
			forRent: this.for_rent,
			forSale: this.for_sale,
			address: this.address,
			latitude: this.latitude,
			longitude: this.longitude,
			created_at: this.created_at ? new Date(this.created_at) : undefined,
			updated_at: this.updated_at ? new Date(this.updated_at) : undefined,
		});
	}
}
