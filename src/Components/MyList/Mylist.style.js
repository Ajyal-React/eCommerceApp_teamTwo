import styled from "styled-components";
import { FlexBox, ListItemsStyle } from "../../Global.style";

export const ListContents = styled.div`
  /* margin-top: 245px; */
  width: 70%;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  border: 1px solid #ddd;
  margin: 110px 22px 30px 22px;
  border-radius: 10px;
  @media (max-width: 767.98px) {
    margin-top: 0;
  }
`;

export const CustomFlexBox = styled(FlexBox)`
  padding: 25px 55px;
  gap: 30px;
  @media (max-width: 1199.98px) {
    flex-direction: column;
    gap: 0px;
  }

  @media (max-width: 767.98px) {
    /* margin-top: 60px; */
  }

  @media (max-width: 575.98px) {
    /* margin-top: 30px; */
    padding: 10px;
  }
`;
export const LeftItem = styled.div`
  width: 48%;
  @media (max-width: 1199.98px) {
    width: 100%;
  }
`;
export const RightItem = styled.div`
  width: 48%;
  @media (max-width: 1199.98px) {
    width: 100%;
  }
`;
export const Item = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
`;
export const CustomListItemsStyle = styled(ListItemsStyle)`
  /* padding: 19px 35px; */
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${(props) => props.color};
`;
export const DivImg = styled.div`
  background: #ddd;
  padding: 5px 17px;
`;
