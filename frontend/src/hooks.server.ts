import type { Handle } from '@sveltejs/kit';
import * as api from '$lib/api';

export const handle = (async ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt');
	if (!jwt) return resolve(event);
	const response = await api.get('users/me', jwt);
	if (response.ok) {
		event.cookies.set('jwt', jwt, { path: '/' });
		event.locals.user = { ...response.result, jwt };
	} else {
		event.cookies.delete('jwt');
		event.locals.user = null;
	}
	return await resolve(event);
}) satisfies Handle;
