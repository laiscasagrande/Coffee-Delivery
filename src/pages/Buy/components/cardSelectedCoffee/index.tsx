import { Minus, Plus } from "phosphor-react";
import { AlignmentElements, Card, ImageCoffee, InformationCoffee, PriceCoffee, QuantityCoffee, TitleCaféSelected } from "./style";
import CoffeeTraditional from '../../../../assets/CoffeeTraditional.svg';

interface CardPropsI {
    image: string
    title: string
}

export function CardSelectedCoffee() {
    return (
        <Card>
            <InformationCoffee>
            <ImageCoffee src={CoffeeTraditional} alt="Imagem do café selecionado" />
            <AlignmentElements>
                <TitleCaféSelected>
                    Café Tradicional
                </TitleCaféSelected>
                <QuantityCoffee>
                    <Plus />
                    1
                    <Minus />
                </QuantityCoffee>
                
            </AlignmentElements>
            </InformationCoffee>
           
            <PriceCoffee>
                    R$ 9,90
                </PriceCoffee>  
        </Card>
    )
}