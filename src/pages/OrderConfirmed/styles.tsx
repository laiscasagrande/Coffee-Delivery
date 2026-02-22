import styled from "styled-components";

export const MainContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
gap: 6.8125rem;
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
height: 16.875rem;
width: 32.875rem;
border-top-left-radius: 6px;
border-top-right-radius: 44px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 44px;
display: flex;
padding: 2.5rem;
border: 2px solid;
border: 2px solid transparent;
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

export const ContainerInformation = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const InformationWithIcon = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
font-size: 1rem
`

export const CircleIcon = styled.div`
border-radius: 100%;
overflow: hidden;
height: 2rem;
width: 2rem;
background: ${props => props.theme['yellow-300']};
display: flex;
align-items: center;
justify-content: center;
`

export const InformationInColumn = styled.div`
display: flex;
flex-direction: column;
`

export const InformativeParagraph = styled.p`
`

export const ImageIllustration = styled.img`
height: 17.75rem;
weight: 49.25rem;
`
