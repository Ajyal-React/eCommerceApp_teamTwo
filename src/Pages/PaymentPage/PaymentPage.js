import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  Button,
  CustomLink,
  FlexBox,
  InnerContainer,
  MainContainer,
  Paragraph,
  Paragraphe,
} from "../../Global.style";
import {
  ChooseMethod,
  FormStyle,
  Image,
  InputRadioDiv,
  MainDiv,
  Methods,
  MethodOne,
  MethodTwo,
  PaymentMethod,
  PaymentSection,
  PaymentSummary,
  CustomFlex,
  SummaryContent,
  TotalDiv,
  Fileds,
  Label,
  Heading,
  CheckOutDiv,
  Images,
} from "./PaymentPage.style";
import visa from "../../images/visa.png";
import debitCard from "../../images/debitCard.png";
import creditCard from "../../images/creditCard.png";
import { LongArrowAltLeftIcon } from "./PaymentPage.style";
import InputFiled from "./Component/InputFiled";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/order/orderActions";
import Footer from "../../Components/Footer/Footer";

function PaymentPage() {
  const dispatch = useDispatch();

  const orderDetails = {
    address: "string",
    city: "string",
    postalCode: 1234,
    country: "string",
  };
  const handleOrder = () => {
    dispatch(createOrder(orderDetails));
  };


  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <MainDiv>
          <CustomLink to="">
            <Paragraph>
              <LongArrowAltLeftIcon /> Return to my card
            </Paragraph>
          </CustomLink>
          
          <PaymentSection>
            <PaymentMethod>
              <Label color="hsl(0deg 0% 14%)">Choose your payment method</Label>
              <FormStyle>
                <ChooseMethod>
                  <Methods>
                    <MethodOne>
                      <InputRadioDiv>
                        <input
                          type="radio"
                          name="CreditCard"
                          checked="checked"
                        />
                        <Label>Credit Card</Label>
                      </InputRadioDiv>
                      <Images>
                        <Image src={visa} alt="" />
                        <Image src={debitCard} alt="" />
                        <Image src={creditCard} alt="" />
                      </Images>
                    </MethodOne>

                    <MethodTwo>
                      <InputRadioDiv>
                        <input type="radio" name="PayPAl" />
                        <Label>PayPal</Label>
                      </InputRadioDiv>
                      <Images>
                        <Image src={visa} alt="" />
                      </Images>
                    </MethodTwo>
                  </Methods>
                </ChooseMethod>

                <Fileds>
                  <InputFiled name="Credit card number" />

                  <CustomFlex>
                    <InputFiled name="CVV code" />
                    <InputFiled name="Expiry date" placeholder="MM/YY" />
                  </CustomFlex>

                  <InputFiled name="Name on card" />
                </Fileds>
              </FormStyle>
            </PaymentMethod>

            <PaymentSummary>
              <SummaryContent>
                <InnerContainer>
                  <Paragraphe>
                    <Heading color="hsl(0deg 0% 18%)">Summary</Heading>
                  </Paragraphe>
                  <FlexBox>
                    <Heading>Order total</Heading>
                    <Heading color="hsl(0deg 0% 53%)">$2,378.00</Heading>
                  </FlexBox>
                  <FlexBox>
                    <Heading>Promo code</Heading>
                    <Heading color="hsl(0deg 0% 53%)">SALE22</Heading>
                  </FlexBox>
                  <FlexBox>
                    <Heading>Shipping</Heading>
                    <Heading color="hsl(0deg 0% 53%)">$219.00</Heading>
                  </FlexBox>
                </InnerContainer>
              </SummaryContent>

              <TotalDiv>
                <InnerContainer>
                  <FlexBox>
                    <Heading color="hsl(0deg 0% 39%)">SubTotal</Heading>
                    <Heading color="hsl(154deg 85% 36%)">Total: $1234</Heading>
                  </FlexBox>
                </InnerContainer>
              </TotalDiv>
            </PaymentSummary>
          </PaymentSection>
          <CheckOutDiv>
            <Button
              borderR="5px"
              padding="10px 40px"
              backgroundColor="hsl(0deg 0% 69%)"
            >
              Go Back
            </Button>
            <Button
              onClick={handleOrder}
              borderR="5px"
              padding="10px 40px"
              backgroundColor="#f7981d"
            >
              Checkout
            </Button>
          </CheckOutDiv>
        </MainDiv>
      </InnerContainer>
      <Footer />
    </MainContainer>
  );
}

export default PaymentPage;
