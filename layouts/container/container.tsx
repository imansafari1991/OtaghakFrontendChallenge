import type { HTMLAttributes } from 'react';

export default function Container({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const containerClass = `mx-6 sm:container sm:mx-auto ${className ?? ''}`;
	return (
		<div className={containerClass} {...props}>
			{children}
		</div>
	);
}
