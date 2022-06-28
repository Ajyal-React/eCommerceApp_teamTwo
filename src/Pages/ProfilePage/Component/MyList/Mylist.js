import {
  Content,
  LeftItem,
  ListContents,
  RightItem,
  CustomFlexBox,
} from "./Mylist.style";
import Items from "./Item";

function Mylist() {
  return (
    <ListContents>
      <Content>
        <CustomFlexBox>
          <LeftItem>
            <Items />
            <Items />
            <Items />
          </LeftItem>

          <RightItem>
            <Items />
            <Items />
            <Items />
          </RightItem>
        </CustomFlexBox>
      </Content>
    </ListContents>
  );
}

export default Mylist;
