import topBannerMobileImage from '@/public/images/top-slide-mobile.jpg';
import topBannerImage from '@/public/images/top-slide.jpg';
import Image from 'next/image';

export default function TopBanner() {
	const alt = 'دریاکنار هنوز قشنگه';
	return (
		<div className='p-4 sm:pt-7 sm:px-0'>
			<Image
				className='sm:hidden w-full'
				src={topBannerMobileImage.src}
				width={topBannerMobileImage.width}
				height={topBannerMobileImage.height}
				alt={alt}
			/>
			<Image
				className='hidden sm:block'
				src={topBannerImage.src}
				width={topBannerImage.width}
				height={topBannerImage.height}
				alt={alt}
			/>
		</div>
	);
}
