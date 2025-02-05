import styled from "styled-components";


export const ContentHome = styled.main`
width: 100vw;
height: 34rem;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
gap: 7rem
`

export const TitleImage = styled.section`
width: 100vw;
display: flex;
justify-content: center;
gap: 3.5rem
`

export const TitleSubtitleHome = styled.section`
display: flex;
flex-direction: column;
height: 12rem;
width: 36.75rem;
gap: 1rem
`

export const ImageCoffee = styled.img`
width: 29.75rem;
height: 22.5rem
`

export const TitleHome = styled.h1`
font-family: "Baloo 2", serif;
font-size: 3rem
`
export const SubtitleHome = styled.p`
font-size: 1.25rem;
`

export const ContainerSubtitles = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 36.75rem;
gap: 1.25rem
`

export const SubtitleIcon = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
font-size: 1rem
`

export const CirculoCarrinhoPurchase = styled.div`
border-radius: 100%;
overflow: hidden;
height: 2rem;
width: 2rem;
background: ${props => props.theme['yellow-200']};
display: flex;
align-items: center;
justify-content: center;
`

export const TitleSubtitle = styled.section`
display: flex;
flex-direction: column;
gap: 4rem
`

export const SubtitleHomeMenuCoffee = styled.h1`
font-family: "Baloo 2", serif;
font-size: 2rem;
margin-bottom: 3rem
`

export const MenuCoffee = styled.section`
width: 70rem;
`

export const ListingCafes = styled.section`
width: 100%;
display: flex;
gap: 2rem;
flex-wrap: wrap;
`