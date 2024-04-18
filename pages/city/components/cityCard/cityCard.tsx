import { mediaBaseURL } from '@/constants/urls';
import Image from 'next/image';
import type { CityCardProps } from './types';

export default function CityCard({ seoTitle, roomMediaTitles }: CityCardProps) {
	return (
		<div>
			<Image
				src={mediaBaseURL + roomMediaTitles?.mainImageTitle}
				width={100}
				height={100}
				alt={seoTitle}
			/>
			{seoTitle}
		</div>
	);
}
