import { MapPinLine} from "phosphor-react";
import { AlignContainerInformationDeliveryTitle, AlignmentContainerFormEtitle, ColumnTitleSubtitle, CompleteYourOrder, ConfirmOrderButton, ContainerFinalPurchase, ContainerForm, Icon, MainContainer, SubtitleForm, TitleForm, TitleSubtitleForm, UnityContainer} from "./styles";
import { FormAddress } from "./components/FormAddress";
import { CardSelectedCoffee } from "./components/cardSelectedCoffee";
import { ContainerTotalItemsDelivery, InformationPriceDelivery, ParagraphAlignmentPrices, ParagraphTotal, TotalsRealValues } from "./components/cardSelectedCoffee/style";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";
import { PaymentMethods } from "./components/PaymentMethods";
import { useForm } from "react-hook-form";
import { InformationCustomerContext } from "../../contexts/informationCustomerCoontext";

export type Inputs = {
    zipCode: string
    road: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
}

export function Buy() {
    const methods = useForm<Inputs>()
    const [formPaymentButton, setFormPaymentButton] = useState('')
    const { setInputsForm, inputsForm, setFormPayment, formPayment} = useContext(InformationCustomerContext)

    function onSubmit(data: Inputs) {
        setInputsForm(data)
        setFormPayment(formPaymentButton)
        console.log("inputsForm", inputsForm)
        console.log("formPayment", formPayment)
    }

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
                            <FormAddress methods={methods}/>
                        </ContainerForm>
                        <PaymentMethods setFormPaymentButton={setFormPaymentButton}/>
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
                        <NavLink to="/orderCconfirmed" title="Confirmar Pedido"><ConfirmOrderButton onClick={methods.handleSubmit(onSubmit)}>Confirmar Pedido</ConfirmOrderButton></NavLink> 
                    </ContainerFinalPurchase>
                </AlignContainerInformationDeliveryTitle>
            </MainContainer>

        </>
    )
}