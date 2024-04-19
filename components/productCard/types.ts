export type ProductCardProps = {
	pageUrl: string;
	title: string;
	imageUrl: string;
	price: number;
	priceAfterDiscount?: number;
	hasDiscount?: boolean;
};
