import { Card, ImageCafé } from "./styles";
import CoffeeTraditional from '../../../assets/CoffeeTraditional.svg';

export function CardCoffee() {
    return (
        <Card>
            <ImageCafé src={CoffeeTraditional} alt="Café tradicional"/>
        </Card>
    )
}