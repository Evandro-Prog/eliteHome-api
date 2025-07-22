export enum VisitStatus {
	INTEREST = 'INTEREST',
	CONFIRMED = 'CONFIRMED',
	REALIZED = 'REALIZED',
	CANCELED = 'CANCELED',
}

const _visitStatusDescriptions = {
	[VisitStatus.INTEREST]: 'Interesse',
	[VisitStatus.CONFIRMED]: 'Confirmado',
	[VisitStatus.REALIZED]: 'Realizado',
	[VisitStatus.CANCELED]: 'Cancelado',
};
