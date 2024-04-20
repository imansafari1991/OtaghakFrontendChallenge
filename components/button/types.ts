import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		children: ReactNode;
		icon?: ReactNode;
		separator?: 'right' | 'left'
	};
