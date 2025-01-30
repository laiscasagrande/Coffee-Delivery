import { ButtonCartPurchase, BuyCoffee, Card, DivPurchaseCoffee, ImageCafé, PriceCoffee, QuantityCoffee, SubtitleCard, TitleCard, TypeCoffee } from "./styles";
import CoffeeTraditional from '../../../assets/CoffeeTraditional.svg';
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CardCoffee() {
    return (
        <Card>
            <ImageCafé src={CoffeeTraditional} alt="Café tradicional" />
            <TypeCoffee>
                TRADICIONAL
            </TypeCoffee>
            <TitleCard>
                Expresso Tradicional
            </TitleCard>
            <SubtitleCard>
                Expresso diluído, menos intenso que o tradicional
            </SubtitleCard>
            <BuyCoffee>
                <PriceCoffee>
                    <span>
                        R$
                    </span>
                    <span>
                        9,90
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