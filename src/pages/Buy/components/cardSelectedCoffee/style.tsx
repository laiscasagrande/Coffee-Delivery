import styled from "styled-components";

export const Card = styled.section`
display: flex;
height: 5rem;
width: 23rem;
padding: 0.25rem;
justify-content: space-between;
align-items: center;
`

export const ImageCoffee = styled.img`
max-width: 4rem;
max-height: 4rem;
width: auto;
height: auto;
`

export const TitleCaféSelected = styled.h1`
font-size: 1rem
`;

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
export const AlignmentElements = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`
export const PriceCoffee = styled.span`
font-weight: bold;
`
export const InformationCoffee = styled.div`
display: flex;
gap: 1.25rem
`

export const CoffeeShopDividerLine = styled.div`
height: 1px;
width: 100%;
background-color: ${props => props.theme['gray-300']};
`

export const ContainerTotalItemsDelivery = styled.article`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
justify-content: center;
`

export const InformationPriceDelivery = styled.p`
height: 100%;
width: 100%;
display: flex;
justify-content: end
`

export const TotalsRealValues = styled.p`
height: 100%;
width: 100%;
display: flex;
justify-content: start
`

export const ParagraphAlignmentPrices = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const ParagraphTotal = styled.div`
font-weight: 900;
font-size: 20px;
`