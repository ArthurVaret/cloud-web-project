import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

import * as api from '$lib/api';

export const load = (async ({ parent }) => {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const verifyPassword = data.get('verifyPassword');
		if (!username && !password && !verifyPassword)
			return fail(400, { missingFields: true });
		if (!username) return fail(400, { missingUsername: true });
		if (!password) return fail(400, { missingPassword: true });
		if (!verifyPassword) return fail(400, { missingVerification: true });
		if (password != verifyPassword)
			return fail(400, { passwordMismatch: true });

		const response = await api.post('users/register', {
			username,
			password
		});
		return { ...response };
	}
};
