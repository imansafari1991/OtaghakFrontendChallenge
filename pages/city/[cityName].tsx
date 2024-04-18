import { roomSearch } from '@/services';
import type { InferGetServerSidePropsType } from 'next';
import CityCard from './components/cityCard/cityCard';

export async function getServerSideProps() {
	return { props: await roomSearch() };
}

export default function CitiesList({
	count,
	rooms,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div>
			index
			{rooms.map((room) => (
				<CityCard key={room.id} {...room} />
			))}
		</div>
	);
}
