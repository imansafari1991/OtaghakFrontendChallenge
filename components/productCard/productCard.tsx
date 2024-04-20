import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';
import type { ProductCardProps } from './types';

export default function ProductCard({
	pageUrl,
	title,
	imageUrl,
	price,
	priceAfterDiscount,
	hasDiscount,
}: ProductCardProps) {
	const discountVisible =
		hasDiscount && priceAfterDiscount && priceAfterDiscount < price;

	const discountPercent = discountVisible
		? Math.round(((price - priceAfterDiscount) / price) * 100)
		: 0;

	return (
		<div>
			<Link href={pageUrl}>
				<Image
					src={imageUrl}
					width={315}
					height={236}
					alt={title}
					className='rounded-xl object-cover h-[16.8rem] w-full'
				/>
			</Link>
			<div className='flex flex-wrap items-center p-3 gap-y-1'>
				<Link
					href={pageUrl}
					className='block w-full text-lg font-semibold text-emphasize hover:text-hovered-emphasize'
				>
					<h2>{title}</h2>
				</Link>

				<div className='text-tertiary font-light text-sm'>
					هر شب از{' '}
					<span className='text-emphasize font-semibold text-lg'>
						{(priceAfterDiscount ?? price).toLocaleString()}
					</span>{' '}
					تومان
				</div>
				{discountVisible && (
					<>
						<span className={`${style.discountBox} ms-auto me-1`}>
							{price}
						</span>
						<span className='px-1 pb-0 pt-1 bg-primary-container text-white rounded-md'>
							{discountPercent}%
						</span>
					</>
				)}
			</div>
		</div>
	);
}
