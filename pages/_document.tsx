import { MainHeader } from '@/layouts';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='fa' dir={'rtl'}>
			<Head />
			<body>
				<MainHeader />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
