import styled from "styled-components";

export const LayoutContainer = styled.div`
background: ${(props) => props.theme['white-100']};
width: 100vw;
height: 100vh;
color: ${props => props.theme['black-100']}
`