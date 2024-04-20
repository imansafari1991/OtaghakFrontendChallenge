import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from './productCard';
import type { ProductCardProps } from './types';

const initialProps: ProductCardProps = {
	title: 'Test Product',
	pageUrl: '/test-url',
	price: 2000,
	imageUrl: '/',
};

describe('ProductCard', () => {
	it('renders the product title', () => {
		render(<ProductCard {...initialProps} />);
		expect(screen.getByText(initialProps.title)).toBeInTheDocument();
	});

	it('redirects to pageUrl by clicking on title', () => {
		render(<ProductCard {...initialProps} />);
		expect(
			screen.getByText(initialProps.title).closest('a')
		).toHaveAttribute('href', initialProps.pageUrl);
	});

	it('redirects to pageUrl by clicking on img', () => {
		render(<ProductCard {...initialProps} />);
		expect(screen.getByRole('img').closest('a')).toHaveAttribute(
			'href',
			initialProps.pageUrl
		);
	});

	it('shows discount badge when hasDiscount is enabled', () => {
		render(
			<ProductCard
				{...initialProps}
				hasDiscount
				priceAfterDiscount={initialProps.price * 0.9}
			/>
		);
		expect(screen.getByText('10%')).toBeInTheDocument();
	});

	it('does not show discount badge when priceAfterDiscount is wrong', () => {
		const { container } = render(
			<ProductCard
				{...initialProps}
				hasDiscount
				priceAfterDiscount={initialProps.price * 1.1}
			/>
		);
		expect(container.textContent).not.toMatch('%');
	});
});
