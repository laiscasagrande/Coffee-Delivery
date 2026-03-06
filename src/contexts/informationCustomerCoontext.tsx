import { createContext, useState } from "react"

interface Inputs {
    zipCode: string
    road: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
}

interface informationCustomerContextType {
inputsForm: {}
setInputsForm: (inputs: Inputs) => void
}

export const InformationCustomerContext = createContext({} as informationCustomerContextType)

interface informationCustomerContextProviderProps {
    children: React.ReactNode
}

export function InformationCustomerContextProvider({children}: informationCustomerContextProviderProps){

    const [inputsForm, setInputsForm] = useState({} as Inputs)

    return(
        <InformationCustomerContext.Provider value={{setInputsForm, inputsForm}}>
            {children}
        </InformationCustomerContext.Provider>
    )
}