import styled from "styled-components";

export const SideBarDiv = styled.div`
  background: #dddddd4a;
  border: 1px solid #00000024;
  /* margin-top: 245px; */
  width: 22%;
  /* height: 500px; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 490px;

  @media (max-width: 1199.98px) {
    width: 30%;
  }
  @media (max-width: 767.98px) {
    display: none;
  }
  @media (max-width: 575.98px) {
    /* width: 30px; */
  }
`;

export const List = styled.div`
  margin-top: 60px;
  /* margin-bottom: 140px; */
`;

export const SelectedDiv = styled.div`
  background: #fff;
  padding-top: 2px;
  text-align: center;
  border: 1px solid #dddddd87;
  border-left: 8px solid orange;
`;
export const ParagraphStyle = styled.p`
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWieght};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerList = styled.div`
  display: none;
  width: 100%;
  margin: 22px;
  @media (max-width: 767.98px) {
    display: flex;
  }
`;
export const ListItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ListItem = styled.div`
  background-color: #fa7400;
  width: 25%;
  border-radius: 30px;
  /* padding: 0 1rem;*/
`;
export const Paragraphe = styled.p`
  font-size: 20px;
  @media (max-width: 1199.98px) {
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
`;
