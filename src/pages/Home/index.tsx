import imageCoffee from '../../assets/ImageCoffee.svg'
import { ContentHome, ImageCoffee, TitleHome, TitleSubtitleHome } from './styles'
export function Home() {
    return (
        <>
            <ContentHome>
                <TitleSubtitleHome>
                    <TitleHome>Encontre o café perfeito para qualquer hora do dia</TitleHome>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleSubtitleHome>
                <ImageCoffee src={imageCoffee} alt="Imagem de um café" />

            </ContentHome>

        </>
    )
}