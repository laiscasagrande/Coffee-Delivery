import { Minus, Plus } from "phosphor-react";
import { AlignmentElements, Card, CoffeeShopDividerLine, ImageCoffee, InformationCoffee, PriceCoffee, QuantityCoffee, TitleCaféSelected} from "./style";

interface CardPropsI {
    image: string
    title: string
    quantity: number
    price: number
}

export function CardSelectedCoffee({ image, title, quantity, price }: CardPropsI) {
    return (
        <>
            <Card>
                <InformationCoffee>
                    <ImageCoffee src={image} alt="Imagem do café selecionado" />
                    <AlignmentElements>
                        <TitleCaféSelected>
                            {title}
                        </TitleCaféSelected>
                        <QuantityCoffee>
                            <Plus />
                            {quantity}
                            <Minus />
                        </QuantityCoffee>

                    </AlignmentElements>
                </InformationCoffee>

                <PriceCoffee>
                    R$ {price}
                </PriceCoffee>
            </Card>
            <CoffeeShopDividerLine />
        </>
    )
}