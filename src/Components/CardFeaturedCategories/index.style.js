import styled from "styled-components";

export const Card = styled.div`
  width: 45%;
  background-color: #f9f8f8;
  height: 50%;
  min-width: 200px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f8f8;
  border-radius: 9px;
  max-width: 400px;

  @media(max-width: 375px) {
    width: 100%;
  }
  @media(max-width: 640px) {
    width: 100%;
  }

 /*  @media(max-width: 768px) {
    width: 100%;
  } */
`;

export const Heart = styled.div`
  width: 90%;
  text-align: right;
  height: auto;
  color: red;
  margin-top: 20px;
  font-size: 20px;
  /* &:focus{
    color: blue;
  } */
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.ImageSrc,
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  border-bottom: 0.2px solid #c4c4c4;
  padding-bottom: 10px;
  margin-top: 30px
`;

export const Name = styled.div`
  width: 90%;
  color: #111111;
  font-weight: bold;
  font-size: 12px;
`;

export const Price = styled.div`
  width: 20%;
  text-align: center;
  color: #0ea965;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 9px;
`;

export const ProductReview = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px 0px;
`;

export const Review = styled.div`
  width: 80%;
  color: #f6ab27;
`;

export const Basket = styled.div`
  width: 20%;
  text-align: right;
  color: #afafaf;
`;

export const Number = styled.span`
  color: #afafaf;
`;
