import { MapPinLine } from "phosphor-react";
import { AlignContainerInformationDeliveryTitle, AlignmentContainerFormEtitle, ColumnTitleSubtitle, CompleteYourOrder, ConfirmOrderButton, ContainerFinalPurchase, ContainerForm, Icon, MainContainer, SubtitleForm, TitleForm, TitleSubtitleForm, UnityContainer } from "./styles";
import { FormAddress } from "./components/FormAddress";
import { CardSelectedCoffee } from "./components/cardSelectedCoffee";
import { ContainerTotalItemsDelivery, InformationPriceDelivery, ParagraphAlignmentPrices, ParagraphTotal, TotalsRealValues } from "./components/cardSelectedCoffee/style";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";
import { PaymentMethods } from "./components/PaymentMethods";
import { useForm } from "react-hook-form";
import { InformationCustomerContext } from "../../contexts/informationCustomerCoontext";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


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

export function Buy() {
    const methods = useForm<NewformAddress>({
        resolver: zodResolver(formAddressSchema)
    })
    const [formPaymentButton, setFormPaymentButton] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const { setInputsForm, setFormPayment } = useContext(InformationCustomerContext)
    const navigate = useNavigate()

    function onSubmit(data: NewformAddress) {
        if (!formPaymentButton) {
            return
        }
        setInputsForm(data)
        setFormPayment(formPaymentButton)
        navigate('/orderConfirmed')
    }

    const paymentError = hasSubmitted && !formPaymentButton
    const { coffees } = useContext(CoffeesContext)
    const totalCoffeeValue = coffees.reduce((total, item) => total + (item.quantity * item.price), 0)
    const valueDelivery = 3.50
    const totalAmountToBePaid = (totalCoffeeValue + valueDelivery).toFixed(2)


    return (
        <>
            <MainContainer>
                <AlignmentContainerFormEtitle>
                    <CompleteYourOrder>
                        Complete seu pedido
                    </CompleteYourOrder>
                    <UnityContainer>
                        <ContainerForm>
                            <TitleSubtitleForm>
                                <Icon>
                                    <MapPinLine size={24} />
                                </Icon>
                                <ColumnTitleSubtitle>
                                    <TitleForm>
                                        Endereço de Entrega
                                    </TitleForm>
                                    <SubtitleForm>
                                        Informe o endereço onde deseja receber seu pedido
                                    </SubtitleForm>
                                </ColumnTitleSubtitle>
                            </TitleSubtitleForm>
                            <FormAddress methods={methods} />
                        </ContainerForm>
                        <PaymentMethods setFormPaymentButton={setFormPaymentButton} formPaymentButton={formPaymentButton} paymentError={paymentError} />
                    </UnityContainer>
                </AlignmentContainerFormEtitle>
                <AlignContainerInformationDeliveryTitle>
                    <CompleteYourOrder>
                        Cafés selecionados
                    </CompleteYourOrder>
                    <ContainerFinalPurchase>
                        {coffees.map((items) => (
                            <CardSelectedCoffee
                                id={items.id}
                                image={items.image}
                                title={items.title}
                                quantity={items.quantity}
                                price={items.price}
                            />
                        ))}
                        <ContainerTotalItemsDelivery>
                            <ParagraphAlignmentPrices>
                                <TotalsRealValues>Total de itens: </TotalsRealValues>
                                <InformationPriceDelivery>R$ {totalCoffeeValue.toFixed(2)}</InformationPriceDelivery>
                            </ParagraphAlignmentPrices>
                            <ParagraphAlignmentPrices>
                                <TotalsRealValues>Entrega: </TotalsRealValues>
                                <InformationPriceDelivery>R$ {valueDelivery.toFixed(2)}</InformationPriceDelivery>
                            </ParagraphAlignmentPrices>
                            <ParagraphAlignmentPrices>
                                <ParagraphTotal>Total: </ParagraphTotal>
                                <ParagraphTotal>R$ {totalAmountToBePaid}</ParagraphTotal>
                            </ParagraphAlignmentPrices>
                        </ContainerTotalItemsDelivery>
                        <form onSubmit={methods.handleSubmit(onSubmit, () => {setHasSubmitted(true)})}>
                            <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>    
                        </form>
                    </ContainerFinalPurchase>
                </AlignContainerInformationDeliveryTitle>
            </MainContainer>

        </>
    )
}