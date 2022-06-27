import styled from "styled-components";


export const SideBarDiv = styled.div`
 background: #dddddd4a;
 border: 1px solid #00000024;
 margin-top: 245px;
 width: 22%;
 height: 482px;
 text-align: center;
`

export const List = styled.div`
margin-top: 60px;
margin-bottom: 160px;

`

export const SelectedDiv = styled.div`
background: #fff;
padding-top: 2px;
text-align: center;
border: 1px solid #dddddd87;
border-left: 8px solid orange;
`
export const ParagraphStyle = styled.p`
   padding-bottom: 15px;
   font-size: 14px;
   color: ${(props) => props.color};
   font-weight: ${(props) => props.fontWieght};

`