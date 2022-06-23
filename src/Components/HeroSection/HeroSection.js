import React,{useEffect,useState} from "react";
import {
  MainHeader,
  Paragraphe,
} from "../../Global.style";
import {
  ButtonHero,
  ContainerIcon,
  InnerContainerHero,
  MainHero,
  MdDoubleArrowIcon,
  RiArrowDownSLineIcon,
} from "./HeroSection.Style";
import axios from 'axios';

function HeroSection() {
  const [data, getData] = useState([]);
  
  useEffect(() => {
    const OffersGet=async()=>{
      const res=await axios.get('https://omar-tech-store.herokuapp.com/api/products/offers')
      getData(res.data[0])
    
    
    
    }
   
    OffersGet()
  }, []);
  return (
    <MainHero image={data.imageBanner}>
      <InnerContainerHero>
        <MainHeader letterSpacing='.5px'>{data.name}</MainHeader>
        <Paragraphe fontSize="20px" color="#fff">
          {data.description}
        </Paragraphe>
        <ButtonHero>
          Start Shopping <MdDoubleArrowIcon />
        </ButtonHero>
        <ContainerIcon>
          <RiArrowDownSLineIcon />
        </ContainerIcon>
      </InnerContainerHero>
    </MainHero>
  );
}

export default HeroSection;
