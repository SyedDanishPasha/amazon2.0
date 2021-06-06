import React from 'react'
import styled from 'styled-components';


function Product({title, price, rating, image, id}) {

    return (
        <Contanier>
            <Title>
                {title}
            </Title>
            <Price>
                ₹{price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image  src={image} />
            <ButtonAction>
                <AddToCartButton>
                Add to Cart
                </AddToCartButton>
            </ButtonAction>
        </Contanier>
    )
}

export default Product

const Contanier = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    width: 600px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    
`;

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`;

const Rating = styled.div`
    display: flex;
`;

const Image = styled.img`
    max-height: 280px;
    object-fit: contain;
`;

const ButtonAction = styled.div`
    margin-top: 10px;
    display: grid;
    place-items: center;
`;

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`;