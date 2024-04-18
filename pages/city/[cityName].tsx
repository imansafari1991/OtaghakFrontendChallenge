import { roomSearch } from '@/services';
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import CityCard from './components/cityCard/cityCard';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	
	return { props: await roomSearch({ cityName: context.params?.cityName?.toString(), skip: 24 }) };
}

export default function CitiesList({
	rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className='bg-white'>
			<div className='mx-6 sm:container sm:mx-auto'>
				<h1>اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در تهران</h1>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-4'>
					{rooms.map((room) => (
						<CityCard key={room.id} {...room} />
					))}
				</div>
			</div>
		</div>
	);
}
