import { error, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	if (locals?.user?.role !== 'admin') throw redirect(307, '/locations');
	const { jwt } = locals.user;
	const id = params.id;
	const response = await api.get(`locations/${id}`, jwt);
	if (!response.ok) throw error(404, { message: response.result });
	return { location: response.result };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals, params }) => {
		if (!locals.user) throw redirect(307, '/');
		const id = params.id;
		const response = await api.del(`locations/${id}`, locals.user.jwt);
		if (!response.ok) throw error(404, { message: response.result });
		throw redirect(307, '/locations?/delete_result');
	}
};
