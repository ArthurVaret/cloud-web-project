import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { isNumber } from '$lib/utils';
import type { LocationProps } from '$lib/types/location';

export const load = (async ({ locals }) => {
	if (locals?.user?.role !== 'admin') throw redirect(307, '/locations');
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals, request }) => {
		if (!locals.user) throw redirect(307, '/');
		const data = await request.formData();
		const payload = Object.fromEntries(
			data.entries()
		) as unknown as LocationProps;
		if (isNumber(payload.geolocationX) && isNumber(payload.geolocationY)) {
			const x = Number(payload.geolocationX);
			const y = Number(payload.geolocationY);
			payload.geolocation = {
				coordinates: [x, y],
				type: String(payload.geolocationType)
			};
		} else {
			payload.geolocation = {
				coordinates: [0, 0],
				type: String(payload.geolocationType)
			};
		}
		delete payload.geolocationX;
		delete payload.geolocationY;
		delete payload.geolocationType;
		const response = await api.post('locations', payload, locals.user.jwt);
		return response;
	}
};
