import React, { useEffect } from "react";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import { InnerContainer, MainContainer } from "../../Global.style";
import FooterPage from "../FooterPage/FooterPage";
import {
  FlexBoxStyle,
  SideRight,
  SpanStyle,
  ColorOne,
  ColorTwo,
  ColorCompination,
  DivContent,
  HrS,
  CustomButton,
  CustomParaghraph,
  CustomTitle,
  FormProduct,
  FlexBoxContainer,
  NotAvailable,
} from "./BrowseProduct.Style";
import DivImages from "./DivImages";
import OptionFileds from "./OptionFields";
import { useDispatch, useSelector } from "react-redux";
import { FetchProduct } from "../../redux/product/ProductAction";
import {useParams} from 'react-router-dom';

function BrowseProduct() {
  const dispatch = useDispatch();
  const dataStore = useSelector((store) => store);
  const product= dataStore.ProductReducer.product;
  const param = useParams();
  // const sizeProduct=product.size;
  // console.log('Size is',sizeProduct.length);
  useEffect(() => {
    dispatch(FetchProduct(param.id));
  }, [dispatch]);
  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <FlexBoxContainer PaddingTop="115px" MarginBottom="75px">
          <DivImages allImages={product.images}/>
          <SideRight>
            <CustomTitle marginBottom="0" textTransform="capitalize">
            {product.name}
            </CustomTitle>
            <CustomParaghraph margin="0 0 .5rem 0" color="#9B9A9A" fontSize="12px">
              The best for your professional life
            </CustomParaghraph>
            <CustomParaghraph margin="0 0 .5rem 0" color="#707070">
              Availability in stock: {
              product.countInStock>0 ?
              <SpanStyle>Available</SpanStyle>
              :
              <NotAvailable>Not Available</NotAvailable>
              }
            </CustomParaghraph>
            <HrS />
            <CustomParaghraph color="#646363">
              Choose your combination
            </CustomParaghraph>

            <FlexBoxStyle MarginBottom="16px">
                  <DivContent>
                  <ColorCompination>
                    <ColorOne BackGColor='#646363'>
                      <p></p>
                    </ColorOne>
                    <ColorTwo BackGColor='#000'></ColorTwo>
                  </ColorCompination>
                  <input
                    type="radio"
                    name="compination"
                    value="val1"
                    checked="checked"
                    />
                </DivContent>
               
              
               <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#FFFFFF">
                    <p></p>
                  </ColorOne>
                  <ColorTwo BackGColor="#000000"></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val2" />
              </DivContent>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#AFAFAF">
                    <p></p>
                  </ColorOne>
                  <ColorTwo BackGColor="#000000"></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val3" />
              </DivContent>
              <DivContent>
                <ColorCompination>
                  <ColorOne BackGColor="#CACACA">
                    <p></p>
                  </ColorOne>
                  <ColorTwo></ColorTwo>
                </ColorCompination>
                <input type="radio" name="compination" value="val4" />
              </DivContent>
              
            </FlexBoxStyle>
            <FormProduct>
              {/* {
              product.size.length>0
              ?
              <>
              <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                Size and Weight
              </CustomParaghraph>
              <OptionFileds />
              </>
              :null
              } */}
              
              <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                Chip
              </CustomParaghraph>
              <OptionFileds />
              <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                Storage
              </CustomParaghraph>
              <OptionFileds />
              <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                Memory
              </CustomParaghraph>
              <OptionFileds />
              <CustomButton>Add To Card</CustomButton>
            </FormProduct>
          </SideRight>
        </FlexBoxContainer>
        <HrS margin="0px -101px" />
      </InnerContainer>
      <FooterPage />
    </MainContainer>
  );
}
export default BrowseProduct;
