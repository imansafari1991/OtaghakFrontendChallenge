import { baseURL } from '@/constants/urls';
import type { RoomsSearch } from './types';

export const roomSearch: RoomsSearch = async ({
	cityName,
	count = true,
	includeAroundLocations = false,
	skip = 0,
	top = 24,
} = {}) => {
	const filter =
		(cityName && `cityCode eq '${cityName}' and `) +
		`includeAroundLocations eq ${includeAroundLocations}` +
		`&$top=${top}` +
		`&$skip=${skip}` +
		`&$count=${count}`;

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			checkIn: null,
			checkOut: null,
			attributes: [],
			rules: [],
			filter,
		}),
	};

	const res = await fetch(
		`${baseURL}odata/Otaghak/RoomsSearch/SearchRooms()`,
		requestOptions
	);
	return await res.json();
};
