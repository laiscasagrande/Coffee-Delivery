import styled from "styled-components";

export const ContentHome = styled.main`
width: 100%;
min-height: 34rem;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
gap: 7rem;

@media (max-width: 1280px) {
  gap: 4rem;
}
`

export const TitleSubtitleHome = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`

export const TitleImage = styled.section`
  width: 100%;
  padding: 0 6rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3.5rem);

  @media (max-width: 768px) {
  flex-direction: column;
  text-align: center;
}

  @media (max-width: 1280px) {
  padding: 0 3rem 0 3rem;
}
`

export const ImageCoffee = styled.div`
  img {
    width: 100%;
  }
`

export const TitleHome = styled.h1`
font-family: "Baloo 2", serif;
font-size: clamp(1.8rem, 4vw, 3rem);
`
export const SubtitleHome = styled.p`
font-size: clamp(0.8rem, 2vw, 1.25rem);
`

export const ContainerSubtitles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr); //significa que terá 2 colunas, e cada uma ocupará o mesmo espaço
  grid-gap: 20px;
`

export const SubtitleIcon = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
font-size: clamp(0.8rem, 2vw, 1rem);
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
max-width: 38rem;
display: flex;
flex-direction: column;
gap: 4rem;
`

export const SubtitleHomeMenuCoffee = styled.h1`
font-family: "Baloo 2", serif;
font-size: clamp(1.8rem, 4vw, 2rem);
margin-bottom: 3rem
`

export const MenuCoffee = styled.section`
max-width: 70rem;

@media (max-width: 768px) {
  text-align: center;
}

@media (max-width: 1280px) {
    padding: 3rem;
}
`

export const ListingCafes = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2rem;

@media (max-width: 1280px) {
  justify-content: center;
}
`