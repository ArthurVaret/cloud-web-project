import type { PageServerLoad } from './$types';
import * as fs from 'fs/promises';

export const load = (async () => {
    try {
        const text = await fs.readFile('./static/static_content.txt', 'utf-8');
        console.log(text);
        return {
            content: text
        };
    } catch {
        return "No file found";
    }
}) satisfies PageServerLoad;