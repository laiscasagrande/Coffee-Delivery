import styled from "styled-components";

export const MainContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
gap: 6.8125rem;
flex-wrap: wrap;

@media only screen and (max-width: 768px) {
    padding: 50px;
}
`

export const ConfirmationTitles = styled.div`

`

export const MainTitleConfirmation = styled.h1`
font-size: 2rem;
font-family: "Baloo 2", serif;
font-weight: bold;
color: ${(props) => props.theme['yellow-200']}
`
export const SubTitleConfirmation = styled.h2`
font-size: 1.25rem;
font-weight: normal;
`

export const DeliveryAddressInformation = styled.section`
min-height: 16.875rem;
max-width: 32.875rem;
border-radius: 6px 44px;
display: flex;
padding: 2.5rem;
border: 2px solid;
border: 2px solid transparent;
flex-direction: column;
gap: 2rem;
background: 
  linear-gradient(white, white) padding-box,
  linear-gradient(
    to bottom,
    ${props => props.theme['yellow-300']},
    ${props => props.theme['purple-200']}
  ) border-box;
`

export const ContainerContainingTitlesAndDeliveryInformation = styled.article`
display: flex;
flex-direction: column;
gap: 2.5rem;
`

export const InformationWithIcon = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
font-size: 1rem
`

export const InformationInColumn = styled.div`
display: flex;
flex-direction: column;
`

export const ImageIllustration = styled.div`
img {
      width: 100%;
}
`
