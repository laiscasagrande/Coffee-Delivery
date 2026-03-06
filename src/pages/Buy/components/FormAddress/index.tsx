import { useContext } from "react";
import { Division, Form, Input, Option, Select, TextArea, TextAreaCity, TextAreaComplement } from "./style";
import { useForm, SubmitHandler } from "react-hook-form"
import { InformationCustomerContext } from "../../../../contexts/informationCustomerCoontext";

type Inputs = {
    zipCode: string
    road: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
}

export function FormAddress() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const { setInputsForm, inputsForm } = useContext(InformationCustomerContext)

    function onSubmit(data: Inputs) {
        setInputsForm(data)
    }

    const brazilianStates = [
        {
            key: "AC",
            label: "Acre"
        },
        {
            key: "AL",
            label: "Alagoas"
        },
        {
            key: "AP",
            label: "Amapá"
        },
        {
            key: "AM",
            label: "Amazonas"
        },
        {
            key: "BA",
            label: "Bahia"
        },
        {
            key: "CE",
            label: "Ceará"
        },
        {
            key: "DF",
            label: "Distrito Federal"
        },
        {
            key: "ES",
            label: "Espírito Santo"
        },
        {
            key: "GO",
            label: "Goiás"
        },
        {
            key: "MA",
            label: "Maranhão"
        },
        {
            key: "MT",
            label: "Mato Grosso"
        },
        {
            key: "MS",
            label: "Mato Grosso so Sul"
        },
        {
            key: "PA",
            label: "Pará"
        },
        {
            key: "PB",
            label: "Paraíba"
        },
        {
            key: "PR",
            label: "Paraná"
        },
        {
            key: "PE",
            label: "Pernambuco"
        },
        {
            key: "PI",
            label: "Piauí"
        },
        {
            key: "RJ",
            label: "Rio de Janeiro"
        },
        {
            key: "RN",
            label: "Rio Grande do Norte"
        },
        {
            key: "RS",
            label: "Rio Grande do Sul"
        },
        {
            key: "RO",
            label: "Rondônia"
        },
        {
            key: "RR",
            label: "Roraima"
        },
        {
            key: "SC",
            label: "Santa Cataria",
        },
        {
            key: "SP",
            label: "São Paulo",
        },
        {
            key: "SE",
            label: "Sergipe"
        },
        {
            key: "TO",
            label: "Tocantins"
        },

    ]

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="CEP" type="number" step="1" {...register("zipCode")} />
            <TextArea placeholder="Rua" {...register("road")} />
            <Division>
                <Input placeholder="Número" type="number" {...register("number")} />
                <TextAreaComplement placeholder="Complemento" {...register("complement")} />
            </Division>
            <Division>
                <Input placeholder="Bairro" type="text" {...register("neighborhood")} />
                <TextAreaCity {...register("city")} />
                <Select {...register("state")}>
                    {brazilianStates.map((item) => (
                        <Option key={item.key} label={item.label} />
                    ))}
                </Select>
            </Division>
            <input type="submit" />
        </Form>
    )
}