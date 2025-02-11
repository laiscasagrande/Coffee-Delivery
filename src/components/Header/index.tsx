import { ButtonCartPurchase, LayoutHeader, LocationCoffee, LocationCoffeeAndButtonCartPurchase } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <LayoutHeader>
            <section>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </section>
            <LocationCoffeeAndButtonCartPurchase>
                <LocationCoffee>
                    <MapPin size={22} />
                    <p>Porto Alegre, RS</p>
                </LocationCoffee>
                <ButtonCartPurchase>
                    <NavLink to="/buy" title="Compra">
                    <ShoppingCart size={22} />
                    </NavLink>
                </ButtonCartPurchase>
            </LocationCoffeeAndButtonCartPurchase>

        </LayoutHeader>

    )
}