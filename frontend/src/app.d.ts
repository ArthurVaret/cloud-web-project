// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface UserProps {
			username: string;
			role: string;
			_id: string;
			__v: number;
			jwt: string;
		}
		interface Error {
			message: string;
		}
		interface Locals {
			user: UserProps;
		}
		// interface Platform {}
	}
}

export {};
