import { Button } from '@/components';
import Image from 'next/image';
import { Container } from '../container';

export default function MainHeader() {
	const logoUrl =
		'https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg';
	return (
		<header className='bg-white'>
			<Container className='flex'>
				<Image src={logoUrl} width={112} height={44} alt='Otaghak' />
				<Button className='ms-auto' href=''>
					Test
				</Button>
				<hr />
				<Button href=''>Test</Button>
				<hr />
				<Button href=''>Test</Button>
				<hr />
				<Button href=''>Test</Button>
			</Container>
		</header>
	);
}
