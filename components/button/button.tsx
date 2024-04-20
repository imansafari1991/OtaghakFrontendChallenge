import Link from 'next/link';
import type { ButtonProps } from './types';

export default function Button({
	children,
	icon,
	leftSeparated,
	className,
	...props
}: ButtonProps) {
	return (
		<Link
			className={`inline-flex relative gap-1 items-center p-3 bg-transparent
				text-basic-color-asphalt 
				hover:text-basic-color-hovered-asphalt 
				${className ?? ''}`}
			{...props}
		>
			{leftSeparated && (
				<span
					className={`absolute left-0 top-3 bottom-3 block 
								border-s border-tertiary-outlined-border`}
				></span>
			)}
			<span>{icon}</span>
			{children}
		</Link>
	);
}
