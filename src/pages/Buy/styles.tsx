import styled from "styled-components";

export const UnityContainer = styled.main`
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
width: 40rem;
height: 23.25rem;
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

export const Icon = styled.span`
color: ${(props) => props.theme['yellow-200']}
`;

export const TitleForm = styled.h2`
font-size: 1rem;
color: ${(props) => props.theme['black-200']};
`;

export const SubtitleForm = styled.h3`
font-size: 0.88rem;
color: ${(props) => props.theme['black-200']};
`;

export const ContainerPayment = styled.article`
height: 13rem;
width: 40rem;
padding: 2.5rem;
background: ${(props) => props.theme['gray-100']};
`;

export const IconDollar = styled.span`
color: ${(props) => props.theme['purple-200']};
`;

export const PaymentMethod = styled.div`
background: ${props => props.theme['gray-300']};
height: 3.19rem;
width: 11.17rem;
border-radius: 6px
`