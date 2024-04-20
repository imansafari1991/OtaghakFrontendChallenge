import { Button } from '@/components';
import Image from 'next/image';
import { Container } from '../container';
import {
	DownloadReceiveIcon,
	HouseAddSeatIcon,
	SupportIcon,
	UserProfileIcon,
} from '@/assets/icons';

export default function MainHeader() {
	const logoUrl =
		'https://cdn.otaghak.com/otg-images-new/Web/Icon/general/logotype-large.svg';
	return (
		<header className='bg-white'>
			<Container className='flex'>
				<Image src={logoUrl} width={112} height={44} alt='Otaghak' />
				<Button
					className='ms-auto'
					href='#'
					icon={<HouseAddSeatIcon />}
					separator='left'
				>
					میزبان شوید
				</Button>
				<Button
					href='#'
					icon={<DownloadReceiveIcon />}
					separator='left'
				>
					دانلود اپلیکیشن
				</Button>
				<Button href='#' icon={<SupportIcon />} separator='left'>
					پشتیبانی
				</Button>
				<Button href='#' icon={<UserProfileIcon />}>
					ورود / ثبت نام
				</Button>
			</Container>
		</header>
	);
}
