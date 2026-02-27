import { useContext, useState } from "react";
import { ButtonCartPurchase, BuyCoffee, Card, DivPurchaseCoffee, ImageCafé, OrganizationCategoriesCoffees, PriceCoffee, QuantityCoffee, SubtitleCard, TitleCard, TypeCoffee } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeesContext } from "../../../contexts/CoffeeContext";

interface CardPropsI {
    id: string
    image: string
    title: string
    caption: string
    price: string
    type: string[]
}

export function CardCoffee({ image, title, caption, price, type }: CardPropsI) {

    const [counterCafes, setCounterCafes] = useState(1);
    const [coffeeChosen, setCoffeeChosen] = useState({
        image: image,
        title: title,
        price: price,
        quantity: counterCafes
    })
    const coffees = useContext(CoffeesContext)

    function coffeeEnhancer() {
        setCounterCafes((updater) => updater + 1)
    }

    function decrementerCoffees() {
        if (counterCafes < 1) {
            return
        }
        setCounterCafes((updater) => updater - 1)
    }

    function handleCoffeeChosen(image: string, title: string, price: string) {
        setCoffeeChosen({
            ...coffeeChosen,
            image: image,
            title: title,
            price: price,
            quantity: counterCafes * parseFloat(price)
        })
        coffees.push(coffeeChosen)
        console.log(coffees)
    }

    return (
        <Card>
            <ImageCafé src={image} alt="Café tradicional" />
            <OrganizationCategoriesCoffees>
                {type.map((element, index) => (
                    <TypeCoffee key={index}>
                        {element}
                    </TypeCoffee>
                ))}
            </OrganizationCategoriesCoffees>
            <TitleCard>
                {title}
            </TitleCard>
            <SubtitleCard>
                {caption}
            </SubtitleCard>
            <BuyCoffee>
                <PriceCoffee>
                    <span>
                        R$
                    </span>
                    <span>
                        {price}
                    </span>
                </PriceCoffee>
                <DivPurchaseCoffee>
                    <QuantityCoffee>
                        <Plus onClick={coffeeEnhancer} />
                        {counterCafes}
                        <Minus onClick={decrementerCoffees} />
                    </QuantityCoffee>
                    <ButtonCartPurchase onClick={() => handleCoffeeChosen(image, title, price)}>
                        <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
                    </ButtonCartPurchase>
                </DivPurchaseCoffee>

            </BuyCoffee>
        </Card>
    )
}