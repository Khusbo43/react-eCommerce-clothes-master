import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductsContainer } from './Products';
import { ProductContext } from '../context/ProductContext';
import ProductItem from '../components/ProductItem';

const Favorites = () => {
  const { favorites } = useContext(ProductContext);
  return (
    favorites.length === 0 ? (
      <NoFavorite>
        <text>You Dont have any favorite Product yet.</text>
        <text>Please look our products to find something you will love.</text>
      </NoFavorite>
    ) : (
      <ProductsContainer>
        {favorites.map((favorite) => <ProductItem product={favorite} favorite />)}
      </ProductsContainer>
    )

  );
};
export default Favorites;
const NoFavorite = styled.div`
  font-family: "Fira Code Medium",monospace;
  display: flex;
  height: 80vh;
  font-size:50px;
  font-weight: bold;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 770px){
    font-size: 30px;
  }
`;
