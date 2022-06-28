import { Image, List, ListItemsStyle } from "../../../../Global.style";
import {
  ContactDetails,
  ConteainerUl,
  CustomFlex,
  EmailIcon,
  FillBagFillIcon,
  H5,
  ImgProfile,
  TelephoneFillIcon,
  UserIcon,
  ParagraphProfile
} from "./ContactSection.style";
import BackBag from "../../../../images/BackBag.png";
function ContactSection() {
  return (
    <ContactDetails>
      <ImgProfile>
        <Image src={BackBag} alt="" borderR="50%" />
      </ImgProfile>
      <CustomFlex>
        <ConteainerUl marginRight="100px">
          <List>
            <ListItemsStyle padding="0">
              <UserIcon />
              <H5>UserName</H5>
            </ListItemsStyle>
            <ListItemsStyle width="50%" padding="0">
              <ParagraphProfile margin="-3px" fontSize="14px">
                Eman Hassouna
              </ParagraphProfile>
            </ListItemsStyle>
          </List>

          <List>
            <ListItemsStyle padding="0">
              <FillBagFillIcon />
              <H5>Title</H5>
            </ListItemsStyle>
            <ListItemsStyle padding="0" width="50%">
              <ParagraphProfile margin="-3px" fontSize="14px">
                NetWork Engineers
              </ParagraphProfile>
            </ListItemsStyle>
          </List>
        </ConteainerUl>

        <ConteainerUl>
          <List>
            <ListItemsStyle padding="0">
              <EmailIcon />
              <H5>Address</H5>
            </ListItemsStyle>
            <ListItemsStyle padding="0" width="50%">
              <ParagraphProfile margin="-3px" fontSize="14px">
                eman@hotmail.com
              </ParagraphProfile>
            </ListItemsStyle>
          </List>
          <List>
            <ListItemsStyle padding="0">
              <TelephoneFillIcon />
              <H5>Cell-Phone</H5>
            </ListItemsStyle>
            <ListItemsStyle padding="0" width="50%">
              <ParagraphProfile margin="-3px" fontSize="14px">
                +1-202-555-0144
              </ParagraphProfile>
            </ListItemsStyle>
          </List>
        </ConteainerUl>
      </CustomFlex>
    </ContactDetails>
  );
}

export default ContactSection;
