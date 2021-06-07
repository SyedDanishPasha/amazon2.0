import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom'


function Header({cartitems}) {
    
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
        <HeaderContainer>
            <HeaderLogo>
                <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Logo" />
                </Link>
            </HeaderLogo>

            <HeaderAddress >
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            
            <HeaderNavItems>
                
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
                
            </HeaderNavItems>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #f90;
    }
`

const HeaderSearchInput = styled.input`
   flex-grow: 1;
   border: 0;
   :focus{
       outline: none;
   }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div`
    display: flex;

`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px; /*TRouBLe*/
`

const HeaderOptionCart = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding-rigth: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`
