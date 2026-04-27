import { createContext, useState } from "react"
import zod from "zod"

const formAddressSchema = zod.object({
    zipCode: zod.string().min(1, 'informe o CEP'),
    road: zod.string().min(1, 'informe a rua'),
    number: zod.string().min(1, 'informe o número'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'informe o bairro'),
    city: zod.string().min(1, 'informe a cidade'),
    state: zod.string().min(1, 'informe o estado')
})

type NewformAddress = zod.infer<typeof formAddressSchema>

interface informationCustomerContextType {
inputsForm: NewformAddress
setInputsForm: (inputs: NewformAddress) => void
formPayment: string
setFormPayment: (payment: string) => void

}

export const InformationCustomerContext = createContext({} as informationCustomerContextType)

interface informationCustomerContextProviderProps {
    children: React.ReactNode
}

export function InformationCustomerContextProvider({children}: informationCustomerContextProviderProps){

    const [inputsForm, setInputsForm] = useState({} as NewformAddress)
    const [formPayment, setFormPayment] = useState('')

    return(
        <InformationCustomerContext.Provider value={{setInputsForm, inputsForm, formPayment, setFormPayment}}>
            {children}
        </InformationCustomerContext.Provider>
    )
}