import { List, ListItemsStyle, Paragraphe } from "../../../../Global.style";
import { ContactDetails, CustomFlex, H5, ImgProfile } from "./ContactSection.style";
import { IconContext } from 'react-icons/lib';
import { FaUserAlt } from 'react-icons/fa';
import BackBag from '../../../../images/BackBag.png';
function ContactSection(){
    return(
    <ContactDetails>
        <ImgProfile><img src={BackBag} width='80px' height='80px'/></ImgProfile>
        <CustomFlex>
            <div>
                <List>
                    <ListItemsStyle>
                        <IconContext.Provider value={{color:'#aaaaaa'}}>
                            <FaUserAlt/>
                        </IconContext.Provider>
                    </ListItemsStyle>
                    <ListItemsStyle><H5>UserName</H5></ListItemsStyle>
                    <ListItemsStyle><Paragraphe margin='-3px' fontSize='14px'>Eman Hassouna</Paragraphe></ListItemsStyle>
                </List>

                <List>
                    <ListItemsStyle>
                        <IconContext.Provider value={{color:'#aaaaaa'}}>
                            <FaUserAlt/>
                        </IconContext.Provider>
                    </ListItemsStyle>
                    <ListItemsStyle><H5>Title</H5></ListItemsStyle>
                    <ListItemsStyle><Paragraphe margin='-3px' fontSize='14px'>NetWork Engineers</Paragraphe></ListItemsStyle>
                </List>
            </div>

            <div>
                <List>
                    <ListItemsStyle>
                        <IconContext.Provider value={{color:'#aaaaaa'}}>
                            <FaUserAlt/>
                        </IconContext.Provider>
                    </ListItemsStyle>
                    <ListItemsStyle><H5>Address</H5></ListItemsStyle>
                    <ListItemsStyle><Paragraphe margin='-3px' fontSize='14px'>eman@hotmail.com</Paragraphe></ListItemsStyle>
                </List>
                <List>
                    <ListItemsStyle>
                        <IconContext.Provider value={{color:'#aaaaaa'}}>
                            <FaUserAlt/>
                        </IconContext.Provider>
                    </ListItemsStyle>
                    <ListItemsStyle><H5>Cell-Phone</H5></ListItemsStyle>
                    <ListItemsStyle><Paragraphe margin='-3px' fontSize='14px'>+1-202-555-0144</Paragraphe></ListItemsStyle>
                </List>
            </div>
        </CustomFlex>
    </ContactDetails>
    );
}

export default ContactSection;