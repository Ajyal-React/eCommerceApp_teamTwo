import React from "react";
import { FlexBoxCenter, FlexBoxRow, Paragraphe,FlexBoxAround} from './../../Global.style';
import {TrendingCard,TrendingImg } from './TrendingCards.style';
import image from '../../images/Base.png'

function TrendingCards() {

    return(
<TrendingCard>
 
<TrendingImg src={image}>
</TrendingImg>


<FlexBoxAround>
       
<Paragraphe fontSize='14px' color="111111">Nike Court Air</Paragraphe>
<Paragraphe fontSize='12px' color="#FF4F04">$58</Paragraphe>

</FlexBoxAround>


</TrendingCard>
    )

}

export default TrendingCards;