import styled from "styled-components";

export const LayoutContainer = styled.div`
background: ${(props) => props.theme['white-100']};
max-width: 100%;
height: 100vh;
color: ${props => props.theme['black-100']}
`