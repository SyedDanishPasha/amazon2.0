import React from 'react'
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({ cartitems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartitems.map((item) => (
                        <CartItem
                            id={item.id}
                            item={ item.product }
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    margin-bottom: 8px;
`;

const ItemsContainer = styled.div`

`;
 