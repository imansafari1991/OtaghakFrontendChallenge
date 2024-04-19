import { ReactNode } from 'react';

export default function Container({ children }: any) {
	return <div className='mx-6 sm:container sm:mx-auto'>{children}</div>;
}
