import Link from 'next/link';
import type { ButtonProps } from './types';

export default function Button({
	children,
	icon,
	className,
	...props
}: ButtonProps) {
	return (
		<Link {...props} className={`inline-block p-3 bg-transparent ${className ?? ''}`}>
			{children}
		</Link>
	);
}
