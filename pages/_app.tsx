import { MainHeader } from '@/layouts';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';

const font = localFont({
	src: '../styles/fonts/IRANSansWeb.woff2',
	variable: '--font-iran-sans',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={font.className}>
			<MainHeader />
			<Component {...pageProps} />;
		</div>
	);
}
