import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffee from '../../assets/ImageCoffee.svg'
import { CirculoCarrinhoPurchase, ContainerSubtitles, ContentHome, ImageCoffee, ListingCafes, MenuCoffee, SubtitleHome, SubtitleHomeMenuCoffee, SubtitleIcon, TitleHome, TitleImage, TitleSubtitle, TitleSubtitleHome } from './styles'
import { CardCoffee } from './components/card'
import CoffeeTraditional from '../../assets/CoffeeTraditional.svg';
import CoffeeAmerican from '../../assets/CoffeeAmerican.svg';
import CoffeeCreamy from '../../assets/CoffeeCreamy.svg';
import CoffeeIceCream from '../../assets/CoffeeIceCream.svg';
import CoffeeMilk from '../../assets/CoffeeMilk.svg';
import CoffeeLatte from '../../assets/CoffeeLatte.svg';
import Capuccino from '../../assets/Capuccino.svg';
import Macchiato from '../../assets/Macchiato.svg';
import Mocaccino from '../../assets/Mocaccino.svg';
import HotChocolate from '../../assets/HotChocolate.svg';
import Cuban from '../../assets/Cuban.svg';
import Hawaiian from '../../assets/Hawaiian.svg';
import Arabic from '../../assets/Arabic.svg';
import Irish from '../../assets/Irish.svg';
export function Home() {
    const listCards = [
        {
            id: '1',
            image: CoffeeTraditional,
            title: 'Expresso Tradicional',
            caption: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
            type: ['TRADICIONAL']
        },
        {
            id: '2',
            image: CoffeeAmerican,
            title: 'Expresso Americano',
            caption: 'Expresso diluído, menos intenso que o tradicional',
            price: '9,90',
            type: ['TRADICIONAL']
        },
        {
            id: '3',
            image: CoffeeCreamy,
            title: 'Expresso Cremoso',
            caption: 'Café expresso tradicional com espuma cremosa',
            price: '9,90',
            type: ['TRADICIONAL']
        },
        {
            id: '4',
            image: CoffeeIceCream,
            title: 'Expresso Gelado',
            caption: 'Bebida preparada com café expresso e cubos de gelo',
            price: '9,90',
            type: ['TRADICIONAL', 'GELADO']
        },
        {
            id: '5',
            image: CoffeeMilk,
            title: 'Café com Leite',
            caption: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: '9,90',
            type: ['TRADICIONAL', 'COM LEITE']
        },
        {
            id: '6',
            image: CoffeeLatte,
            title: 'Latte',
            caption: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: '9,90',
            type: ['TRADICIONAL', 'COM LEITE']
        },
        {
            id: '7',
            image: Capuccino,
            title: 'Capuccino',
            caption: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: '9,90',
            type: ['TRADICIONAL', 'COM LEITE']
        },
        {
            id: '8',
            image: Macchiato,
            title: 'Macchiato',
            caption: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: '9,90',
            type: ['TRADICIONAL', 'COM LEITE']
        },
        {
            id: '9',
            image: Mocaccino,
            title: 'Mocaccino',
            caption: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: '9,90',
            type: ['TRADICIONAL', 'COM LEITE']
        },
        {
            id: '10',
            image: HotChocolate,
            title: 'Chocolate Quente',
            caption: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: '9,90',
            type: ['ESPECIAL', 'COM LEITE']
        },
        {
            id: '11',
            image: Cuban,
            title: 'Cubano',
            caption: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: '9,90',
            type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO']
        },
        {
            id: '12',
            image: Hawaiian,
            title: 'Havaiano',
            caption: 'Bebida adocicada preparada com café e leite de coco',
            price: '9,90',
            type: ['ESPECIAL']
        },
        {
            id: '13',
            image: Arabic,
            title: 'Árabe',
            caption: 'Bebida preparada com grãos de café árabe e especiarias',
            price: '9,90',
            type: ['ESPECIAL']
        },
        {
            id: '14',
            image: Irish,
            title: 'Irlandês',
            caption: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: '9,90',
            type: ['ESPECIAL', 'ALCOÓLICO']
        },
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
                <ListingCafes>
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
                </ListingCafes>
                </MenuCoffee>
            </ContentHome>

        </>
    )
}