import styled from "styled-components";

export const Card = styled.article`
padding: 0 20px 20px;
background: ${props => props.theme['gray-100']};
height: 19.38rem;
width: 16rem;
border-top-left-radius: 6px;
border-top-right-radius: 36px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 36px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ImageCafé = styled.img`
// position: relative;
//  top: -100px; 
// left: 68px;
margin-top: -1.5rem;
position: relative;
display: flex;
justify-content: center;
`

export const TypeCoffee = styled.div`
margin-top: 0.75rem;
height: 1.32rem;
width: 5.07rem;
border-radius: 6.25rem;
background-color: ${props => props.theme['yellow-100']};
padding: 4px 8px;
font-size: 10px;
display: flex;
justify-content: center;
color: ${props => props.theme['yellow-200']};
font-weight: bold 
`

export const TitleCard = styled.h1`
margin-top: 0.75rem;
font-size: 1.25rem;
color: ${props => props.theme['black-200']};
font-family: "Baloo 2", serif;
`

export const SubtitleCard = styled.h2`
margin-top: 0.75rem;
color: ${props => props.theme['gray-200']};
font-size: 0.88rem;
text-align: center;
font-weight: normal;
`

export const BuyCoffee = styled.div`
display: flex;
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 2rem;
`
export const PriceCoffee = styled.p`
display: flex;
align-items: baseline;
gap: 2px;

span:first-child{
font-size: 0.88rem;
font-weight: normal;
color: ${props => props.theme['black-300']};
}

span:last-child{
font-size: 1.5rem;
font-family: "Baloo 2", serif;
font-weight: 800;
color: ${props => props.theme['black-300']};
}
`

export const QuantityCoffee = styled.div`
background-color: ${props => props.theme['gray-300']};
border-radius: 6px;
height: 2.37rem;
width: 4.5rem;
padding: 8px;
display: flex;
justify-content: space-between;
align-items: center
`

export const ButtonCartPurchase = styled.button`
width: 2.38rem;
height: 2.38rem;
background: ${(props) => props.theme['purple-400']};
color: ${(props) => props.theme['yellow-200']};
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 0.38rem;
padding: 0;

&:focus{
outline: thin dotted;
outline: 0px auto -webkit-focus-ring-color;
outline-offset: 0px;
}
`

export const DivPurchaseCoffee = styled.div`
display: flex;
gap: 0.5rem
`