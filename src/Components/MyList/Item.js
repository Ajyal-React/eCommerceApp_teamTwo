import { CustomListItemsStyle, DivImg, Item } from "./Mylist.style";
import BackBag from "../../images/BackBag.png";
import { List, ListItemsStyle } from "../../Global.style";

function Items() {
  return (
    <Item>
      <List>
        <ListItemsStyle>
          <DivImg>
            <img src={BackBag} alt="iamge" width="60px" height="60px" />
          </DivImg>
        </ListItemsStyle>
        <CustomListItemsStyle>Laptop Bag</CustomListItemsStyle>
        <CustomListItemsStyle color={'#2BB377'}>$75</CustomListItemsStyle>
      </List>
    </Item>
  );
}

export default Items;
