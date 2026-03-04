import { createContext, useState } from "react";

interface Coffee {
    id: number
    image: string
    title: string
    price: number
    quantity: number
}

interface CoffeesContextType {
    coffees: Coffee[]
    increaseCoffee: (id: number) => void
    decreaseCoffee: (id: number) => void
    handleCoffeeChosen: (id: number, image: string, title: string, price: number, quantity: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeeContextProviderProps {
    children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    const [coffees, setCoffees] = useState<Coffee[]>([])

    function increaseCoffee(id: number) {
        setCoffees(prev =>
            prev.map(coffee =>
                coffee.id === id
                    ? { ...coffee, quantity: coffee.quantity + 1 }
                    : coffee
            )
        )
    }

    function decreaseCoffee(id: number) {
        setCoffees(prev =>
            prev.map(coffee =>
                coffee.id === id && coffee.quantity > 1
                    ? { ...coffee, quantity: coffee.quantity - 1 }
                    : coffee
            )
        )
    }

    function handleCoffeeChosen(id: number, image: string, title: string, price: number, quantity: number) {

        const newCoffee = {
            id,
            image,
            title,
            price,
            quantity
        }

        setCoffees(prev => {

            const coffeeExists = prev.find(coffee => coffee.id === id)

            if (coffeeExists) {
                return prev.map(coffee =>
                    coffee.id === id
                        ? { ...coffee, quantity: coffee.quantity + quantity }
                        : coffee
                )
            }

            return [...prev, newCoffee]
        })

    }

    return (
        <CoffeesContext.Provider value={{ coffees, increaseCoffee, decreaseCoffee, handleCoffeeChosen }}>
            {children}
        </CoffeesContext.Provider>
    )
}