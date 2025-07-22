type VisitProps = {
	id?: string;
	name: string;
	phone: string;
	email: string;
	date: Date;
	status: string;
	propertyId: string;
	created_at?: Date;
	updated_at?: Date;
};
export class Visit {
	public id?: string;
	public name: string;
	public phone: string;
	public email: string;
	public date: Date;
	public status: string;
	public propertyId: string;
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: VisitProps) {
		this.id = props.id;
		this.name = props.name;
		this.phone = props.phone;
		this.email = props.email;
		this.date = props.date;
		this.status = props.status;
		this.propertyId = props.propertyId;
		this.created_at = props.created_at;
		this.updated_at = props.updated_at;
	}
}
