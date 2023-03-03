const base =
	import.meta.env.VITE_API_URL ?? `http://api:3000`;

interface APIProps {
	method: string;
	path: string;
	token?: string;
	data?: object;
}

interface RequestInitHeader extends RequestInit {
	headers: {
		'Content-Type'?: string;
		Authorization?: string;
	};
}

async function send({ method, path, data, token }: APIProps) {
	const opts: RequestInitHeader = { method, headers: {} };
	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}
	try {
		const res = await fetch(`${base}/${path}`, opts);
		if (res.status === 200 || res.status === 201) {
			const result = await res.text();
			return result
				? { ok: true, result: JSON.parse(result) }
				: { ok: true, result: {} };
		}
		const result = await res.text();
		return { ok: false, result };
	} catch (err) {
		return { ok: false, result: 'Server error' };
	}
}

export function get(path: string, token?: string) {
	return send({ method: 'GET', path, token });
}

export function del(path: string, token: string) {
	return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: object, token?: string) {
	return send({ method: 'POST', path, data, token });
}

export function patch(path: string, data: object, token: string) {
	return send({ method: 'PATCH', path, data, token });
}

console.log(base)