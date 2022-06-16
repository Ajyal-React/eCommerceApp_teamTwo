import React from 'react'
import { MainContainer, MainHeader, Button, Link,SubHeader, InnerContainer} from '../../Global.style'
import TrendingCards from '../../Components/TrendingCards/TrendingCards'
import { CardsContainer, TrendingContainer,TrendingMainHeader } from './TrendingPage.style';

function TrendingPage (){
    return(
<MainContainer>
<TrendingContainer>
 <InnerContainer>
<SubHeader fontSize="10px">top products</SubHeader>
<TrendingMainHeader fontSize="20px">trending this week</TrendingMainHeader>
<CardsContainer>
    
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    <TrendingCards></TrendingCards>
    
</CardsContainer>
</InnerContainer>
</TrendingContainer>
</MainContainer>
    )
}

export default TrendingPage;