import styled from "styled-components";
import { Button, FlexBox } from "../../Global.style";

export const Flex = styled(FlexBox)`
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 16rem;
  @media (max-width: 1199.98px) {
    margin-top: 20rem;
  }
  @media (max-width: 767.98px) {
    margin-top: 28rem;
  }
`;

export const DivArround = styled.div`
  border-top: 1px solid #ddd;
`;
export const Logout = styled(Button)`
  color: #d21010;
  font-weight: bold;
  display: none;
  background: none;
  padding: 0 2rem 2rem;
  cursor: pointer;
  @media (max-width: 767.98px) {
    display: flex;
  }
`;
