import {ImageDiv, ImgStyle,SideLeft,FlexGap} from "./BrowseProduct.Style";
import image from "../../images/maxim-hopman-Hin-rzhOdWs-unsplash-removebg-preview.png";

function DivImages(){
    return(
        <SideLeft>
        <ImageDiv>
            <ImgStyle src={image} marginLeft='70px' height='350px' width='558px'/>
        </ImageDiv>
        <FlexGap>
        <ImageDiv BackGColor='#fafafa' Border='#FA7400'>
            <ImgStyle src={image}/>
        </ImageDiv>
        <ImageDiv>
            <ImgStyle src={image}/>
        </ImageDiv>
        <ImageDiv>
            <ImgStyle src={image}/>
        </ImageDiv>
        <ImageDiv>
            <ImgStyle src={image}/>
        </ImageDiv> 
        <ImageDiv>
            <ImgStyle src={image}width='118px' height= '100%'/>
        </ImageDiv>                      
        </FlexGap>
    </SideLeft>
    );
}

export default DivImages;