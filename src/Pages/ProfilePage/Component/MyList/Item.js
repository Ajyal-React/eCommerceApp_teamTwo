import { ListItemsStyle } from "../../../../Global.style";
import { List } from "../../../../Global.style";
import { CustomListItemsStyle, DivImg, Item } from "./Mylist.style";
import BackBag from '../../../../images/BackBag.png'

function Items(){
    return(
        <Item>
        <List>
            <ListItemsStyle>
              <DivImg><img src={BackBag} alt='iamge' width='60px' height='60px'/></DivImg>
            </ListItemsStyle>
            <CustomListItemsStyle>Laptop Bag</CustomListItemsStyle>
            <CustomListItemsStyle>$75</CustomListItemsStyle>
        </List>
    </Item>
    );
}

export default Items;