import Footer from "../../Components/Footer/Footer";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import { MainContainer } from "../../Global.style";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Mylist from "../../Components/MyList/Mylist";
import SideBar from "../../Components/sideBarSetting/SideBar";
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
        <Footer />
      </DivArround>
    </MainContainer>
  );
}

export default ProfilePage;
