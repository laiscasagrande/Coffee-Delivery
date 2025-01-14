import { LayoutHeader, LocationCoffee } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'

export function Header() {
    return (
        <LayoutHeader>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
            <LocationCoffee>
                <p>oiii</p>
            </LocationCoffee>
        </LayoutHeader>

    )
}