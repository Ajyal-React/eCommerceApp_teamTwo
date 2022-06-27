import { SideBarDiv, List, SelectedDiv, ParagraphStyle } from "./SideBar.style";


function SideBar(){
    return(
        <SideBarDiv>
            <List>
                <SelectedDiv>
                    <ParagraphStyle>My Orders</ParagraphStyle>
                </SelectedDiv>
                <ParagraphStyle>Wishlist</ParagraphStyle>
                <ParagraphStyle>Notification</ParagraphStyle>
                <ParagraphStyle>Settings</ParagraphStyle>
            </List>
            <ParagraphStyle color='red' fontWieght='bold'>Logout</ParagraphStyle>
    </SideBarDiv>        
    );
}

export default SideBar;