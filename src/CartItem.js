import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import {db} from './firebase'

function CartItem ({ id, item })  {
    
    const deletItem = (e) =>
    {
        e.preventDefault()
        db.collection('cartitems').doc(id).delete();
    }

    let options = []

    for (let i = 1; i < Math.max(item.quantity + 1, 30); i++)
    {
        options.push(<option value={ i }> Qty: {i}</option>)
    }
    
    const changeQuantity = (newQuantity) =>
    {
        db.collection('cartitems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    return (
        <Container>
            <ItemsContainer>
                <img src={item.image} alt="" />
            </ItemsContainer>

            <InfoContainer>
                <InfoTop>
                    <h2>{item.name}</h2>
                </InfoTop>
                <InfoBottom>
                    <ItemQuantity>
                        <select
                            value={ item.quantity }
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>
                    </ItemQuantity>
                    <ItemDelete onClick={deletItem}>
                        Delete
                    </ItemDelete>
                </InfoBottom>
            </InfoContainer>

            <ItemPrice>
                <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'}/>
            </ItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
`;

const ItemsContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`;

const InfoContainer = styled.div`
    flex-grow: 1;
`;

const InfoTop = styled.div`
    color: #0090FF;
    h2{
        font-size: 18px;
    }
`;

const InfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`;

const ItemQuantity = styled.div`
    select{
        border-radius: 7px;
        background-color: #f0f2f2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15, 17, 17, .15);
        
        :focus {
            outline: none;
        }
    }
`;

const ItemDelete = styled.div`
    color: #0090FF;
    margin-left: 16px;
    cursor: pointer;
`;

const ItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`;