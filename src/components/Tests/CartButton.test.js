import { render, screen } from '@testing-library/react';
import CartButton from '../Cart/CartButton';

test('render "Cart Button" commponent', ()=> {
    // Arrange
    render(<CartButton />);

    //Act

    //Asset
    const spanText = screen.getByText('My Cart',{exact:false});
    expect(spanText).toBeInTheDocument();
});