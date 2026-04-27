import { UseFormReturn } from "react-hook-form";
import { Division, DivisionColumn, ErrorMessage, Form, Input, Option, Select, TextArea, TextAreaComplement } from "./style";
import zod from "zod";

interface FormAddressProps {
    methods: UseFormReturn<NewformAddress>
}

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

export function FormAddress({ methods }: FormAddressProps) {
    const { register, formState: { errors } } = methods

    const brazilianStates = [
        {
            key: "UF",
            label: ""
        },
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
        <Form id="form-address">
            <DivisionColumn>
                <Input placeholder="CEP" type="number" step="1" {...register("zipCode")} />
                {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}
            </DivisionColumn>
            <DivisionColumn>
                <TextArea placeholder="Rua" {...register("road")} />
                {errors.road && <ErrorMessage>{errors.road.message}</ErrorMessage>}
            </DivisionColumn>
            <Division>
                <DivisionColumn>
                    <Input placeholder="Número" type="text" {...register("number")} />
                    {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
                </DivisionColumn>
                <TextAreaComplement placeholder="Complemento" {...register("complement")} />
            </Division>
            <Division>
                <DivisionColumn>
                    <Input placeholder="Bairro" type="text" {...register("neighborhood")} />
                    {errors.neighborhood && <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>}
                </DivisionColumn>
                <DivisionColumn>
                    <Input placeholder="Cidade" {...register("city")} />
                    {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
                </DivisionColumn>
                <DivisionColumn>
                    <Select {...register("state")}>
                        {brazilianStates.map((item) => (
                            <Option key={item.key} label={item.key} value={item.key !== 'UF' ? item.key : ''} />
                        ))}
                    </Select>
                    {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
                </DivisionColumn>
            </Division>
        </Form>
    )
}