import React from 'react';
import styled from 'styled-components';

const Favorites = () => (
  <ContactInfos>
    <text>Feel free to contact me anytime! </text>
    <text>Adress: Mohakhali, Dhaka</text>
    <text>Email: khusbo@gmail.com</text>
  </ContactInfos>
);
export default Favorites;
const ContactInfos = styled.div`
  font-family: "Fira Code Medium",monospace;
  display: flex;
  height: 80vh;
  font-size:50px;
  font-weight: bold;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-direction: column;
  transition: 1s;
  animation-name: example;
  animation-duration: 5s;
  cursor: default;
  color: deepskyblue;
  @keyframes example {
    from {color: black;}
    to {color: deepskyblue;}
  }
  @media screen and (max-width: 770px){
    font-size: 30px;
  }
`;
