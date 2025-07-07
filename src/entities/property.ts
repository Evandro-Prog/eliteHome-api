type PropertyProps = {
	id?: string;
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: number;
	created_at?: Date;
	updated_at?: Date;
};

// TODO definir todos os atributos da entidade Property

export class Property {
	public id?: string;
	public name: string;
	public totalValue: number;
	public numberOfRooms: number;
	public city: string;
	public state: string;
	public size: number;
	public created_at?: Date;
	public updated_at?: Date;

	constructor({
		id,
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
		created_at,
		updated_at,
	}: PropertyProps) {
		this.id = id;
		this.name = name;
		this.totalValue = totalValue;
		this.numberOfRooms = numberOfRooms;
		this.city = city;
		this.state = state;
		this.size = size;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}
}
