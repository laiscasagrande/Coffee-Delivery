import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ColumnTitleSubtitle, CompleteYourOrder, ContainerFinalPurchase, ContainerForm, ContainerPayment, ContainerSelectedCoffee, Icon, IconDollar, MainContainer, PaymentMethod, SubtitleForm, TitleForm, TitleSubtitleForm, UnityContainer, UnityFormasPayment } from "./styles";
import { FormAddress } from "./components/FormAddress";
import { CardSelectedCoffee } from "./components/cardSelectedCoffee";

export function Buy() {
    return (
        <>
            <CompleteYourOrder>
                Complete seu pedido
            </CompleteYourOrder>
            <MainContainer>
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
                        <FormAddress />
                    </ContainerForm>
                    <ContainerPayment>
                        <TitleSubtitleForm>
                            <IconDollar>
                                <CurrencyDollar size={24} />
                            </IconDollar>
                            <ColumnTitleSubtitle>
                                <TitleForm>
                                    Pagamento
                                </TitleForm>
                                <SubtitleForm>
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                                </SubtitleForm>
                            </ColumnTitleSubtitle>
                        </TitleSubtitleForm>
                        <UnityFormasPayment>
                            <PaymentMethod>
                                <CreditCard size={22} color="#8047F8" />
                                CARTÃO DE CRÉDITO
                            </PaymentMethod>
                            <PaymentMethod>
                                <Bank size={22} color="#8047F8" />
                                CARTÃO DE DÉBITO
                            </PaymentMethod>
                            <PaymentMethod>
                                <Money size={22} color="#8047F8" />
                                DINHEIRO
                            </PaymentMethod>
                        </UnityFormasPayment>
                    </ContainerPayment>
                </UnityContainer>
                <ContainerFinalPurchase>
                    <CardSelectedCoffee/>
                </ContainerFinalPurchase>
            </MainContainer>

        </>
    )
}