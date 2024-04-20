import { ProductCard } from '@/components';
import { mediaBaseURL } from '@/constants/urls';
import { Container } from '@/layouts';
import { roomSearch } from '@/services';
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from 'next';
import TopBanner from './components/topBanner';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const cityName = context.params?.cityName?.toString();
	return { props: await roomSearch({ cityName, skip: 24 }) };
}

export default function CitiesList({
	rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className='bg-white'>
			<TopBanner />
			<Container>
				<h1>اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در تهران</h1>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-4'>
					{rooms.map(
						({
							roomId,
							roomMediaTitles,
							seoTitle,
							basePrice,
							afterDiscount,
							hasDiscount,
						}) => (
							<ProductCard
								key={roomId}
								pageUrl={`/room/${roomId}`}
								imageUrl={`${mediaBaseURL}${roomMediaTitles.mainImageTitle}`}
								title={seoTitle}
								price={basePrice}
								priceAfterDiscount={afterDiscount}
								hasDiscount={hasDiscount}
							/>
						)
					)}
				</div>
			</Container>
		</div>
	);
}
