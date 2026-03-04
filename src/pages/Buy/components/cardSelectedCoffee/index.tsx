import { AlignmentElements, Card, CoffeeShopDividerLine, ImageCoffee, InformationCoffee, PriceCoffee, TitleCaféSelected } from "./style";
import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";
import { useContext} from "react";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";

interface CardPropsI {
    id: number
    image: string
    title: string
    quantity: number
    price: number
}

export function CardSelectedCoffee({ id, image, title, quantity, price }: CardPropsI) {
    const {increaseCoffee, decreaseCoffee} = useContext(CoffeesContext)

    return (
        <>
            <Card>
                <InformationCoffee>
                    <ImageCoffee src={image} alt="Imagem do café selecionado" />
                    <AlignmentElements>
                        <TitleCaféSelected>
                            {title}
                        </TitleCaféSelected>
                        <CoffeeQuantityButton
                            quantityCoffee={quantity}
                            onIncrease={() => increaseCoffee(id)}
                            onDecrease={() => decreaseCoffee(id)}
                        />

                    </AlignmentElements>
                </InformationCoffee>

                <PriceCoffee>
                    R$ {(price * quantity).toFixed(2)}
                </PriceCoffee>
            </Card>
            <CoffeeShopDividerLine />
        </>
    )
}