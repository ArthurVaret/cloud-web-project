export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/locations": [~3],
	"/locations/add": [~4],
	"/locations/[id]": [~5],
	"/locations/[id]/delete": [~6],
	"/locations/[id]/edit": [~7],
	"/login": [~8],
	"/profile": [~9],
	"/register": [~10],
	"/text": [~11]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};