import { Division, Form, Input, Option, Select, TextArea, TextAreaCity, TextAreaComplement } from "./style";

export function FormAddress() {

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
        <Form>
            <Input placeholder="CEP" type="number" step="1" required />
            <TextArea placeholder="Rua" required />
            <Division>
                <Input placeholder="Número" type="number" required />
                <TextAreaComplement placeholder="Complemento" />
            </Division>
            <Division>
                <Input placeholder="Bairro" type="text" required />
                <TextAreaCity />
                <Select>
                    {brazilianStates.map((item) => (
                        <Option key={item.key} label={item.label}/>
                    ))}
                </Select>
            </Division>
        </Form>
    )
}