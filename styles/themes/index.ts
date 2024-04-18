import type { Config } from 'tailwindcss';
import { backgroundImage } from './backgroundImage';
import { colors } from './colors';

export const theme: Config['theme'] = {
	extend: {
		backgroundImage,
		colors,
	},
};
