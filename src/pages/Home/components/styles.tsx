import styled from "styled-components";

export const Card = styled.article`
padding: 0 1.25rem 1.25rem;
//padding: clamp(1rem, 1vw, 1.25rem);
background: ${props => props.theme['gray-100']};
width: 100%;
max-width: 16rem;
border-radius: 6px 36px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ImageCafé = styled.img`
margin-top: -1.5rem;
position: relative;
`

export const TypeCoffee = styled.span`
margin-top: 0.75rem;
padding: 0.25rem 0.5rem;
border-radius: 6.25rem;
background-color: ${props => props.theme['yellow-100']};
padding: 4px 8px;
font-size: clamp(0.6rem, 1vw, 0.625rem);
display: flex;
justify-content: center;
color: ${props => props.theme['yellow-200']};
font-weight: bold 
`

export const OrganizationCategoriesCoffees = styled.div`
display: flex;
gap: 4px
`

export const TitleCard = styled.h1`
margin-top: 0.75rem;
font-size: clamp(1rem, 2vw, 1.25rem);
color: ${props => props.theme['black-200']};
font-family: "Baloo 2", serif;
`

export const SubtitleCard = styled.h2`
margin-top: 0.75rem;
color: ${props => props.theme['gray-200']};
font-size: clamp(0.75rem, 2vw, 0.88rem);
text-align: center;
font-weight: normal;
`

export const BuyCoffee = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-top: 2rem;
`
export const PriceCoffee = styled.p`
display: flex;
align-items: baseline;
gap: 2px;

span:first-child{
font-size: clamp(0.75rem, 2vw, 0.88rem);
font-weight: normal;
color: ${props => props.theme['black-300']};
}

span:last-child{
font-size: clamp(1rem, calc(1rem + 0.714vw), 1.5rem);
font-family: "Baloo 2", serif;
font-weight: 800;
color: ${props => props.theme['black-300']};
}
`

export const QuantityCoffee = styled.div`
background-color: ${props => props.theme['gray-300']};
border-radius: 6px;
padding: 0.5rem 0.8rem;
gap: 0.25rem;
display: flex;
justify-content: space-between;
align-items: center
`

export const ButtonCartPurchase = styled.button`
min-width: 2.38rem;
min-height: 2.38rem;
background: ${(props) => props.theme['purple-400']};
color: ${(props) => props.theme['yellow-200']};
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 0.38rem;
padding: 0;
`

export const DivPurchaseCoffee = styled.div`
display: flex;
gap: 0.5rem
`