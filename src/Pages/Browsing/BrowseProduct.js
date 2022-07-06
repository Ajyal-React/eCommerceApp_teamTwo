import React, { useEffect } from "react";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import { FlexBox, InnerContainer, MainContainer } from "../../Global.style";
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
import { useParams } from "react-router-dom";
import { addToCartAction } from "../../redux/Cart/cartActions";

function BrowseProduct() {
  const dispatch = useDispatch();
  const { size, memory, storage, colors, name, price, countInStock } =
    useSelector((store) => store?.ProductReducer?.product);
  const dataStore = useSelector((store) => store);
  console.log(dataStore);

  const param = useParams();

  useEffect(() => {
    dispatch(FetchProduct(param?.id));
  }, [dispatch, param?.id]);

  const handleAddToCart = (e, values) => {
    e.preventDefault();
    dispatch(
      addToCartAction({
        productId: "62b761d3bf201c2428b307f6",
        qty: 2,
      })
    );
  };
  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <FlexBoxContainer PaddingTop="115px" MarginBottom="75px">
          <DivImages />

          <SideRight>
            <FlexBox>
              <CustomTitle marginBottom="0" textTransform="capitalize">
                {name}
              </CustomTitle>
              <CustomTitle
                color="#FA7400"
                marginBottom="0"
                textTransform="capitalize"
              >
                {`${price}$`}
              </CustomTitle>
            </FlexBox>

            <CustomParaghraph
              margin="0 0 .5rem 0"
              color="#9B9A9A"
              fontSize="12px"
            >
              The best for your professional life
            </CustomParaghraph>
            <CustomParaghraph margin="0 0 .5rem 0" color="#707070">
              Availability in stock:{" "}
              {countInStock > 0 ? (
                <SpanStyle>Available</SpanStyle>
              ) : (
                <NotAvailable>Not Available</NotAvailable>
              )}
            </CustomParaghraph>
            <HrS />
            <CustomParaghraph color="#646363">
              Choose your combination
            </CustomParaghraph>

            <FlexBoxStyle MarginBottom="16px">
              {colors?.map((ele) => (
                <DivContent>
                  <ColorCompination>
                    <ColorOne BackGColor={`${ele.one}`}>
                      <p></p>
                    </ColorOne>

                    <ColorTwo BackGColor={`${ele.two}`}></ColorTwo>
                  </ColorCompination>
                  <input type="radio" name="compination" value="val1" />
                </DivContent>
              ))}
            </FlexBoxStyle>
            <FormProduct>
              {size?.length > 0 ? (
                <>
                  <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                    Size and Weight
                  </CustomParaghraph>
                  <OptionFileds optionProduct={size} />
                </>
              ) : null}

              <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                Chip
              </CustomParaghraph>
              <OptionFileds />
              {storage?.length > 0 ? (
                <>
                  <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                    Storage
                  </CustomParaghraph>
                  <OptionFileds optionProduct={storage} />
                </>
              ) : null}

              {memory?.length > 0 ? (
                <>
                  <CustomParaghraph margin="0 0 .5rem 0" color="#646363">
                    Memory
                  </CustomParaghraph>
                  <OptionFileds optionProduct={memory} />
                </>
              ) : null}
              <CustomButton onClick={handleAddToCart}>Add To Card</CustomButton>
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
