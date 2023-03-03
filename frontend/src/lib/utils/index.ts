import type { LocationProps, FilteredLocationProps } from '../types/location';

const translateLocationKeys = {
	_id: 'id',
	filmType: 'Type',
	filmProducerName: 'Producer',
	endDate: 'Ended at',
	startDate: 'Started at',
	filmName: 'Name',
	district: 'District',
	filmDirectorName: 'Director',
	address: 'Address',
	year: 'Year'
};
const cleanKeys = Object.keys(translateLocationKeys);

export const filterLocations = (
	locations: Array<LocationProps>
): Array<FilteredLocationProps> => {
	const filteredLocations = locations.map((location: LocationProps) => {
		// transform our results to new clean locations with clean keys
		const renamedKeyLocation = {};
		for (const [key, value] of Object.entries(location)) {
			if (!cleanKeys.includes(key)) continue;
			const newKey = translateLocationKeys[key];
			renamedKeyLocation[newKey] =
				key === 'endDate' || key === 'startDate'
					? new Date(value as string).toLocaleDateString()
					: value;
		}
		return renamedKeyLocation;
	});
	return filteredLocations;
};

export const filterOneLocation = (
	location: LocationProps
): FilteredLocationProps => {
	const renamedKeyLocation: FilteredLocationProps = {};
	for (const [key, value] of Object.entries(location)) {
		if (!cleanKeys.includes(key)) continue;
		const newKey = translateLocationKeys[key];
		renamedKeyLocation[newKey] =
			key === 'endDate' || key === 'startDate'
				? new Date(value as string).toLocaleDateString()
				: value;
	}
	return renamedKeyLocation;
};

export const isNumber = (n: unknown): boolean => {
	return Number(n) === n && n % 1 !== 0;
};
