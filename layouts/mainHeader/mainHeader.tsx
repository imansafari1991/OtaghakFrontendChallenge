import { Button } from '@/components';
import Image from 'next/image';
import { Container } from '../container';
import {
	DownloadReceiveIcon,
	HouseAddSeatIcon,
	PhoneIcon,
	SupportIcon,
	UserProfileIcon,
} from '@/icons';
import Link from 'next/link';

export default function MainHeader() {
	return (
		<header className='bg-white border-b border-tertiary-outlined-border'>
			<Container className='flex h-16 sm:h-20 items-center'>
				<Link href='#'>
					<Image
						className='hidden sm:block'
						src={'/otaghak.svg'}
						width={112}
						height={44}
						alt='Otaghak'
					/>
					<Image
						className='sm:hidden'
						src={'/otaghak-mobile.svg'}
						width={80}
						height={32}
						alt='Otaghak'
					/>
				</Link>
				<Button
					className='flex sm:hidden ms-auto'
					href='#'
					icon={<PhoneIcon />}
				>
					تماس با پشتیبانی
				</Button>
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
