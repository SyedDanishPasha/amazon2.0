import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';


function Cart({ cartitems }) {
    
    const getTotalPrice = () =>
    {
        let total = 0;
        cartitems.forEach((item) =>
        {
           total += (item.product.price * item.product.quantity)
        })
        return total;
    }

    const getCount = () =>
    {
        let count = 0;

        cartitems.forEach((item) =>
        {
            count += item.product.quantity;
        })

        return count;
    }
    
    return (
        <Contanier>
            <CartItems cartitems={cartitems}/>
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
        </Contanier>
    )
}

export default Cart

const Contanier = styled.div`
    display: flex;
    padding: 14px 18px 0 18px; /*TRouBLe*/
    align-items: flex-start;
`;



