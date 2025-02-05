import styled from "styled-components";

export const LayoutHeader = styled.main`
display: flex;
justify-content: space-around;
height: 6.5rem;
align-items: center;
width: 100vw
`

export const LocationCoffee = styled.div`
width: 8.94rem;
height: 2.38rem;
background: ${(props) => props.theme['purple-100']};
border-radius: 0.38rem;
color: ${(props) => props.theme['purple-300']};
font-size: 0.87rem;
display: flex;
align-items: center;
padding: 0.5rem;
gap: 0.25rem
`

export const ButtonCartPurchase = styled.button`
width: 2.38rem;
height: 2.38rem;
background: ${(props) => props.theme['yellow-100']};
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

export const LocationCoffeeAndButtonCartPurchase = styled.section`
display: flex;
gap: 0.75rem
`