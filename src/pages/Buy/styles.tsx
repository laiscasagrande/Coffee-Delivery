import styled from "styled-components";

export const AlignmentContainerFormEtitle = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const AlignContainerInformationDeliveryTitle = styled.section`
display: flex;
flex: 1;
flex-direction: column;
gap: 1rem;
max-width: 28rem;
`

export const MainContainer = styled.main`
display: flex;
gap: clamp(1rem, 3vw, 2rem);
justify-content: center;
flex-wrap: wrap;
max-width: 70rem;
width: 100%;
margin: 0 auto;
padding: 0 1rem;
flex: 1;
`;

export const UnityContainer = styled.article`
display: flex;
flex-direction: column;
gap: 0.75rem;
`;

export const CompleteYourOrder = styled.h1`
font-family: "Baloo 2", serif;
font-size: 1.13rem;
font-weight: bold 
`;

export const ContainerForm = styled.article`
width: 100%;
max-width: 40rem;
display: flex;
flex-direction: column;
gap: 2rem;
background: ${(props) => props.theme['gray-100']};
border-radius: 6px;
padding: 2.5rem
`;

export const TitleSubtitleForm = styled.section`
display: flex;
gap: 0.5rem;
`;

export const ColumnTitleSubtitle = styled.div`
display: flex;
flex-direction: column;
`;

export const Icon = styled.div`
color: ${(props) => props.theme['yellow-200']}
height: 2rem;
width: 2rem;
padding: 8px;
border-radius: 50%;
`;

export const TitleForm = styled.h2`
font-size: 1rem;
color: ${(props) => props.theme['black-200']};
`;

export const SubtitleForm = styled.h3`
font-size: 0.88rem;
color: ${(props) => props.theme['black-200']};
`;

export const ContainerFinalPurchase = styled.article`
width: 100%;
min-width: 21rem;
max-width: 28rem;
background: ${(props) => props.theme['gray-100']};
border-top-left-radius: 6px;
border-top-right-radius: 44px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 44px;
padding: 2.5rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
`

export const ContainerSelectedCoffee = styled.section`

`

export const ConfirmOrderButton = styled.button`
width: 100%;
height: 2.875rem;
background: ${(props) => props.theme['yellow-300']};
color: ${(props) => props.theme['white-100']};
border-radius: 6px;
border-color: transparent;
cursor: pointer;
`