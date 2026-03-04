import { useContext, useState } from "react";
import { ButtonCartPurchase, BuyCoffee, Card, DivPurchaseCoffee, ImageCafé, OrganizationCategoriesCoffees, PriceCoffee, SubtitleCard, TitleCard, TypeCoffee } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { CoffeesContext } from "../../../contexts/CoffeeContext";
import { CoffeeQuantityButton } from "../../../components/CoffeeQuantityButton";

interface CardPropsI {
    id: number
    image: string
    title: string
    caption: string
    price: number
    type: string[]
}

export function CardCoffee({ id, image, title, caption, price, type }: CardPropsI) {
    const { handleCoffeeChosen } = useContext(CoffeesContext)
    const [quantityCoffee, setQuantityCoffe] = useState(1)

    return (
        <Card key={id}>
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
                    <CoffeeQuantityButton
                        quantityCoffee={quantityCoffee}
                        onIncrease={() => setQuantityCoffe(prev => prev + 1)}
                        onDecrease={() => setQuantityCoffe(prev => prev > 1 ? prev - 1 : 1)}
                    />
                    <ButtonCartPurchase onClick={() => handleCoffeeChosen(id, image, title, price, quantityCoffee)}>
                        <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
                    </ButtonCartPurchase>
                </DivPurchaseCoffee>

            </BuyCoffee>
        </Card>
    )
}