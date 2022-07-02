import styled from "styled-components";

export const FeaturedCategoriesSection = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #000000;
`;

export const HeaderRight = styled.div`
  width: 70%;
  min-width: 300px;
  background-color: red;
`;

export const HeaderLeft = styled.div`
  width: 30%;
`;

export const Products = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const CardsLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-width: 400px;
`;

export const Slider = styled.div`
  width: 50%;
  height: 850px;
  background-color: #f9f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 400px;
  align-items: center;
  border-radius: 9px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 0.1px solid #999999;
  width: 16%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 9px;
  margin-top: 30px;
  &:hover {
    background-color: #f3efef;
    border: none;
    cursor: pointer;
  }
`;
