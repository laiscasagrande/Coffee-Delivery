import styled from "styled-components";

export const ContainerPayment = styled.article`
width: 100%;
max-width: 40rem;
display: flex;
flex-direction: column;
gap: 2rem;
padding: clamp(1rem, 3vw, 2.5rem);
background: ${(props) => props.theme['gray-100']};
`;

export const TitleSubtitleForm = styled.section`
display: flex;
gap: 0.5rem;
`;

export const IconDollar = styled.span`
color: ${(props) => props.theme['purple-200']};
`;

export const ColumnTitleSubtitle = styled.div`
display: flex;
flex-direction: column;
`;

export const TitleForm = styled.h2`
font-size: 1rem;
color: ${(props) => props.theme['black-200']};
`;

export const UnityFormasPayment = styled.section`
display: flex;
gap: 0.75rem;
flex-wrap: wrap;
`

export const PaymentMethod = styled.button`
background: ${props => props.theme['gray-300']};
color: ${props => props.theme['black-300']};
flex: 1; //Se tiver um container flex com três botões, o flex: 1 pegará todo o espaço disponível e dividirá igualmente entre os três
min-height: 3.19rem;
padding: 0.75rem 1rem;
border-radius: 6px;
font-size: 0.75rem;
display: flex;
justify-content: center;
align-items: center;
gap: 0.75rem;
border: none
`

export const SubtitleForm = styled.h3`
font-size: 0.88rem;
color: ${(props) => props.theme['black-200']};
`;