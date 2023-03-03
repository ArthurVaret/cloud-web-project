import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import * as api from '$lib/api';
import type { OneLocationLoadValue } from '$lib/types/location';

export const load = (async ({
	params,
	locals
}): Promise<OneLocationLoadValue> => {
	if (!locals.user) throw redirect(307, '/');
	const id = params.id;
	if (!id) goto('/locations');
	const response = await api.get(`locations/${id}`, locals.user.jwt);
	if (!response.ok) return { message: response.result };
	// Don't filter the location here, because we want to show all the data
	return { location: response.result };
}) satisfies PageServerLoad;
