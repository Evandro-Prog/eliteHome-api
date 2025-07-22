import { Visit } from '@/entities/visit';
import type { VisitStatus } from '@/enums/visit-status';

type VisitSchemaProps = {
	id?: string;
	name: string;
	phone: string;
	email: string;
	date: string;
	status: VisitStatus;
	property_id: string;
	created_at?: Date;
	updated_at?: Date;
};

export class VisitSchema {
	public id?: string;
	public name: string;
	public phone: string;
	public email: string;
	public date: string;
	public status: VisitStatus;
	public property_id: string;
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: VisitSchemaProps) {
		this.id = props.id;
		this.name = props.name;
		this.phone = props.phone;
		this.email = props.email;
		this.date = props.date;
		this.status = props.status;
		this.property_id = props.property_id;
		this.created_at = props.created_at;
		this.updated_at = props.updated_at;
	}

	public toEntity() {
		return new Visit({
			id: this.id,
			name: this.name,
			phone: this.phone,
			email: this.email,
			date: new Date(this.date),
			status: this.status,
			propertyId: this.property_id,
			created_at: this.created_at ? new Date(this.created_at) : undefined,
			updated_at: this.updated_at ? new Date(this.updated_at) : undefined,
		});
	}
}
