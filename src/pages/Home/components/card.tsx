import { BuyCoffee, Card, ImageCafé, PriceCoffee, SubtitleCard, TitleCard, TypeCoffee } from "./styles";
import CoffeeTraditional from '../../../assets/CoffeeTraditional.svg';

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
            </BuyCoffee>
        </Card>
    )
}