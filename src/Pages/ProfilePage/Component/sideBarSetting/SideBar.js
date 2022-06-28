import { Paragraphe } from "../../../../Global.style";
import {
  SideBarDiv,
  List,
  SelectedDiv,
  ParagraphStyle,
  ContainerList,
  ListItems,
  ListItem,
} from "./SideBar.style";

function SideBar() {
  return (
    <>
      <SideBarDiv>
        <List>
          <SelectedDiv>
            <ParagraphStyle>My Orders</ParagraphStyle>
          </SelectedDiv>
          <ParagraphStyle>Wishlist</ParagraphStyle>
          <ParagraphStyle>Notification</ParagraphStyle>
          <ParagraphStyle>Settings</ParagraphStyle>
        </List>
        <ParagraphStyle color="red" fontWieght="bold">
          Logout
        </ParagraphStyle>
      </SideBarDiv>
      <ContainerList>
        <ListItems>
          <ListItem>
            <Paragraphe>My Orders</Paragraphe>
          </ListItem>
          <Paragraphe width="25%">Wishlist</Paragraphe>
          <Paragraphe width="25%">Notification</Paragraphe>
          <Paragraphe width="25%">Settings</Paragraphe>
        </ListItems>
      </ContainerList>
    </>
  );
}

export default SideBar;
