import { error, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';
import { filterLocations } from '$lib/utils';
import type { LocationsLoadValues } from '$lib/types/location';
import {
	BASE_10,
	OFFSET_FACTOR,
	DEFAULT_OFFSET,
	MAX_PAGES
} from '$lib/constants';

export const load = (async ({ locals, url }): Promise<LocationsLoadValues> => {
	if (!locals.user) throw redirect(307, '/login');
	try {
		const pageIndex = url.searchParams.get('page') ?? '1';
		const index = Math.min(parseInt(pageIndex, BASE_10), MAX_PAGES); // max selecting 10th page
		const page = Math.max(index - 1, 0); // non negative value possible
		const response = await api.get(
			`locations?offset=${
				page >= 1 ? page * OFFSET_FACTOR : DEFAULT_OFFSET
			}`,
			locals?.user?.jwt
		);
		const locations = filterLocations(response?.result);
		return {
			locations,
			index
		};
	} catch (err) {
		// if anything else than number in url parameter
		throw error(404);
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete_result: async ({ locals }) => {
		if (!locals.user) throw error(401);
		return { delete: true };
	},
	delete: async ({ locals }) => {
		if (!locals.user) throw error(401);
		const response = await api.del('locations', locals.user?.jwt);
		console.log(response);
	}
};
