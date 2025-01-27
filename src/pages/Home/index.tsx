import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffee from '../../assets/ImageCoffee.svg'
import { CirculoCarrinhoPurchase, ContainerSubtitles, ContentHome, ImageCoffee, MenuCoffee, SubtitleHome, SubtitleHomeMenuCoffee, SubtitleIcon, TitleHome, TitleImage, TitleSubtitle, TitleSubtitleHome } from './styles'
import { CardCoffee } from './components/card'
export function Home() {
    return (
        <>
            <ContentHome>
                <TitleImage>
                    <TitleSubtitle>
                        <TitleSubtitleHome>
                            <TitleHome>Encontre o café perfeito para qualquer hora do dia</TitleHome>
                            <SubtitleHome>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubtitleHome>
                        </TitleSubtitleHome>
                        <ContainerSubtitles>
                            <SubtitleIcon>
                                <CirculoCarrinhoPurchase>
                                    <ShoppingCart size={16} weight="fill" color="#FAFAFA" />
                                </CirculoCarrinhoPurchase>
                                <p>Compra simples e segura</p>
                            </SubtitleIcon>
                            <SubtitleIcon>
                                <CirculoCarrinhoPurchase>
                                    <Package size={16} weight="fill" color="#FAFAFA" />
                                </CirculoCarrinhoPurchase>
                                <p>Compra simples e segura</p>
                            </SubtitleIcon>
                            <SubtitleIcon>
                                <CirculoCarrinhoPurchase>
                                    <Timer size={16} weight="fill" color="#FAFAFA" />
                                </CirculoCarrinhoPurchase>
                                <p>Compra simples e segura</p>
                            </SubtitleIcon>
                            <SubtitleIcon>
                                <CirculoCarrinhoPurchase>
                                    <Coffee size={16} weight="fill" color="#FAFAFA" />
                                </CirculoCarrinhoPurchase>
                                <p>Compra simples e segura</p>
                            </SubtitleIcon>
                        </ContainerSubtitles>
                    </TitleSubtitle>
                    <ImageCoffee src={imageCoffee} alt="Imagem de um café" />
                </TitleImage>
                <MenuCoffee>
                <SubtitleHomeMenuCoffee>
                    Nossos Cafés
                </SubtitleHomeMenuCoffee>
                <CardCoffee/>
                </MenuCoffee>
            </ContentHome>

        </>
    )
}