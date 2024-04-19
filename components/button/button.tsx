import Link from 'next/link';
import type { ButtonProps } from './types';
import style from './style.module.css';

export default function Button({
	children,
	icon,
	className,
	...props
}: ButtonProps) {
	return (
		<Link {...props} className={`${style.btn} ${className ?? ''}`}>
			{children}
		</Link>
	);
}
