import { Button } from '@/components';
import Image from 'next/image';
import { Container } from '../container';
import {
	DownloadReceiveIcon,
	HouseAddSeatIcon,
	SupportIcon,
	UserProfileIcon,
} from '@/icons';

export default function MainHeader() {
	const logoUrl =
		'https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg';
	return (
		<header className='bg-white border-b border-tertiary-outlined-border'>
			<Container className='flex h-20 items-center'>
				<Image src={logoUrl} width={112} height={44} alt='Otaghak' />
				<Button
					className='ms-auto hidden sm:flex'
					href='#'
					icon={<HouseAddSeatIcon />}
					leftSeparated
				>
					میزبان شوید
				</Button>
				<Button
					className='hidden sm:flex'
					href='#'
					icon={<DownloadReceiveIcon />}
					leftSeparated
				>
					دانلود اپلیکیشن
				</Button>
				<Button
					className='hidden sm:flex'
					href='#'
					icon={<SupportIcon />}
					leftSeparated
				>
					پشتیبانی
				</Button>
				<Button
					className='hidden sm:flex'
					href='#'
					icon={<UserProfileIcon />}
				>
					ورود / ثبت نام
				</Button>
			</Container>
		</header>
	);
}
