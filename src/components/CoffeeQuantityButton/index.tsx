import { Minus, Plus } from "phosphor-react";
import { QuantityCoffee } from "./styles";

interface Props {
  quantityCoffee: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function CoffeeQuantityButton({ quantityCoffee, onIncrease, onDecrease}: Props) {

     return (
          <QuantityCoffee>
                <Plus onClick={onIncrease} />
                {quantityCoffee}
                <Minus onClick={onDecrease} />
          </QuantityCoffee>
     )
}