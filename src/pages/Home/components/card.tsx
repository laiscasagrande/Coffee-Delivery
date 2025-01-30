import { ButtonCartPurchase, BuyCoffee, Card, DivPurchaseCoffee, ImageCafé, PriceCoffee, QuantityCoffee, SubtitleCard, TitleCard, TypeCoffee } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ReactNode } from "react";

interface CardPropsI {
    id: string
    image: string
    title: string
    caption: string
    price: string
    type: string
}

export function CardCoffee({ id, image, title, caption, price, type }: CardPropsI) {
    return (
        <Card>
            <ImageCafé src={image} alt="Café tradicional" />
            <TypeCoffee>
                {type}
            </TypeCoffee>
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
                        <Plus />
                        1
                        <Minus />
                    </QuantityCoffee>
                    <ButtonCartPurchase>
                        <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
                    </ButtonCartPurchase>
                </DivPurchaseCoffee>

            </BuyCoffee>
        </Card>
    )
}