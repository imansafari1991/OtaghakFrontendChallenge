import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import localFont from 'next/font/local';

const font = localFont({
	src: '../assets/fonts/IRANSansWeb.woff2',
  variable: '--font-iran-sans'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={font.className}>
			<Component {...pageProps} />;
		</main>
	);
}
