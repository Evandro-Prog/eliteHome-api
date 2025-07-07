type PropertyProps = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: number;
};

// TODO definir todos os atributos da entidade Property

export class Property {
	public name: string;
	public totalValue: number;
	public numberOfRooms: number;
	public city: string;
	public state: string;
	public size: number;

	constructor({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: PropertyProps) {
		this.name = name;
		this.totalValue = totalValue;
		this.numberOfRooms = numberOfRooms;
		this.city = city;
		this.state = state;
		this.size = size;
	}
}
