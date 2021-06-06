import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';


function Cart({ cartitems }) {
    return (
        <Contanier>
            <CartItems cartitems={cartitems}/>
            <CartTotal />
        </Contanier>
    )
}

export default Cart

const Contanier = styled.div`
    display: flex;
    padding: 14px 18px 0 18px; /*TRouBLe*/
`;



