import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffee from '../../assets/ImageCoffee.svg'
import { CirculoCarrinhoPurchase, ContainerSubtitles, ContentHome, ImageCoffee, MenuCoffee, SubtitleHome, SubtitleHomeMenuCoffee, SubtitleIcon, TitleHome, TitleImage, TitleSubtitle, TitleSubtitleHome } from './styles'
import { CardCoffee } from './components/card'
import CoffeeTraditional from '../../assets/CoffeeTraditional.svg';
import CoffeeAmerican from '../../assets/CoffeeAmerican.svg';
import CoffeeCreamy from '../../assets/CoffeeCreamy.svg';
import ImageCoffeee from '../../assets/ImageCoffee.svg';
export function Home() {
    const listCards = [
        {
            id: '1',
            image: CoffeeTraditional,
            title: 'Expresso Tradicional',
            caption: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            type: 'Tradicional'
        },
        {
            id: '2',
            image: CoffeeAmerican,
            title: 'Expresso Americano',
            caption: 'Expresso diluído, menos intenso que o tradicional',
            price: '9,90',
            type: 'Tradicional'
        },
        {
            id: '3',
            image: CoffeeCreamy,
            title: 'Expresso Cremoso',
            caption: 'Café expresso tradicional com espuma cremosa',
            price: '9,90',
            type: 'Tradicional'
        },
        // {
        //     id: '4',
        //     image: ImageCoffeee,
        //     title: 'Expresso Gelado',
        //     caption: 'Bebida preparada com café expresso e cubos de gelo',
        //     price: '9,90',
        //     type: 'Tradicional'
        // },
    ]
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
                {listCards.map((item) => (
                    <CardCoffee
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    caption={item.caption}
                    price={item.price}
                    type={item.type}
                    />
                ))}
                </MenuCoffee>
            </ContentHome>

        </>
    )
}