import { createContext } from "react";

interface CoffeeContextType {
    image: string
    title: string
    price: string
    quantity: number
}

export const CoffeesContext = createContext([] as CoffeeContextType[]);

interface CoffeeContextProviderProps {
    children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    return (
        <CoffeesContext.Provider value={[]}>
            {children}
        </CoffeesContext.Provider>
    )
}