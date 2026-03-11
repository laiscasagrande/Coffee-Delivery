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
formPayment: string
setFormPayment: (payment: string) => void

}

export const InformationCustomerContext = createContext({} as informationCustomerContextType)

interface informationCustomerContextProviderProps {
    children: React.ReactNode
}

export function InformationCustomerContextProvider({children}: informationCustomerContextProviderProps){

    const [inputsForm, setInputsForm] = useState({} as Inputs)
    const [formPayment, setFormPayment] = useState('')

    return(
        <InformationCustomerContext.Provider value={{setInputsForm, inputsForm, formPayment, setFormPayment}}>
            {children}
        </InformationCustomerContext.Provider>
    )
}