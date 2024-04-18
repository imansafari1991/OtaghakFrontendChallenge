import { mediaBaseURL } from '@/constants/urls';
import Image from 'next/image';
import type { CityCardProps } from './types';
import style from './style.module.css';
import Link from 'next/link';

export default function CityCard({
	roomId,
	seoTitle,
	roomMediaTitles,
	basePrice,
	afterDiscount,
	hasDiscount,
}: CityCardProps) {

	const detailPageUrl = `/room/${roomId}`

	return (
		<div>
			<Link href={detailPageUrl}>
				<Image
					src={mediaBaseURL + roomMediaTitles.mainImageTitle}
					width={315}
					height={236}
					alt={seoTitle}
					className='rounded-xl object-cover h-[16.8rem] w-full'
				/>
			</Link>
			<div className='flex flex-wrap items-center p-3 gap-y-1'>
				<Link href={detailPageUrl} className='block w-full text-lg font-semibold text-emphasize hover:text-hovered-emphasize'>
					<h2>{seoTitle}</h2>
				</Link>

				<div className='text-tertiary font-light text-sm'>
					هر شب از{' '}
					<span className='text-emphasize font-semibold text-lg'>
						{afterDiscount.toLocaleString()}
					</span>{' '}
					تومان
				</div>
				{hasDiscount && (
					<>
						<span className={`${style.discountBox} ms-auto me-1`}>
							{basePrice}
						</span>
						<span className='px-1 pb-0 pt-1 bg-primary-container text-white rounded-md'>
							{Math.round(
								((basePrice - afterDiscount) / basePrice) * 100
							)}
							%
						</span>
					</>
				)}
			</div>
		</div>
	);
}
