import { roomSearch } from '@/services';
import type { InferGetServerSidePropsType } from 'next';
import CityCard from './components/cityCard/cityCard';

export async function getServerSideProps() {
	return { props: await roomSearch({ skip: 24 }) };
}

export default function CitiesList({
	count,
	rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
		<div className='mx-6 sm:container sm:mx-auto'>

			<h1>اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در تهران</h1>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-4'>
				{rooms.map((room) => (
					<CityCard key={room.id} {...room} />
				))}
			</div>
				</div>
		</>
	);
}
