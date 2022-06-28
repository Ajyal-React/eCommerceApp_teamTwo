import MainNavbar from "../../Components/Navbar/MainNavbar";
import { MainContainer } from "../../Global.style";
import FooterPage from "../FooterPage/FooterPage";
import ContactSection from "./Component/ContactSection/ContactSection";
import Mylist from "./Component/MyList/Mylist";
import SideBar from "./Component/sideBarSetting/SideBar";
import { ParagraphStyle } from "./Component/sideBarSetting/SideBar.style";
import { DivArround, Flex, Logout } from "./ProfilePage.style";

function ProfilePage() {
  return (
    <MainContainer>
      <MainNavbar />
      <ContactSection />
      <Flex>
        <SideBar />
        <Mylist />
        <Logout>
          Logout
        </Logout>
      </Flex>
      <DivArround>
        <FooterPage />
      </DivArround>
    </MainContainer>
  );
}

export default ProfilePage;
