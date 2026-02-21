import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AlignContainerInformationDeliveryTitle, AlignmentContainerFormEtitle, ColumnTitleSubtitle, CompleteYourOrder, ConfirmOrderButton, ContainerFinalPurchase, ContainerForm, ContainerPayment, ContainerSelectedCoffee, Icon, IconDollar, MainContainer, PaymentMethod, SubtitleForm, TitleForm, TitleSubtitleForm, UnityContainer, UnityFormasPayment } from "./styles";
import { FormAddress } from "./components/FormAddress";
import { CardSelectedCoffee } from "./components/cardSelectedCoffee";
import CoffeeTraditional from '../../assets/CoffeeTraditional.svg';
import CoffeeLatte from '../../assets/CoffeeLatte.svg';
import { ContainerTotalItemsDelivery, InformationPriceDelivery, ParagraphAlignmentPrices, ParagraphTotal, TotalsRealValues } from "./components/cardSelectedCoffee/style";

export function Buy() {

    const listOfCoffeesToBuy = [
        {
            id: '1',
            image: CoffeeTraditional,
            title: 'Café Tradicional',
            quantity: 1,
            price: 9.90
        },
        {
            id: '2',
            image: CoffeeLatte,
            title: 'Latte',
            quantity: 1,
            price: 19.80
        }
    ]

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
                </AlignmentContainerFormEtitle>
                <AlignContainerInformationDeliveryTitle>
                    <CompleteYourOrder>
                        Cafés selecionados
                    </CompleteYourOrder>
                    <ContainerFinalPurchase>
                        {listOfCoffeesToBuy.map((items) => (
                            <CardSelectedCoffee
                                image={items.image}
                                title={items.title}
                                quantity={items.quantity}
                                price={items.price}
                            />
                        ))}
                        <ContainerTotalItemsDelivery>
                            <ParagraphAlignmentPrices>
                                <TotalsRealValues>Total de itens: </TotalsRealValues>
                                <InformationPriceDelivery>R$ 29,70</InformationPriceDelivery>
                            </ParagraphAlignmentPrices>
                            <ParagraphAlignmentPrices>
                                <TotalsRealValues>Entrega: </TotalsRealValues>
                                <InformationPriceDelivery>R$ 3,50</InformationPriceDelivery>
                            </ParagraphAlignmentPrices>
                            <ParagraphAlignmentPrices>
                                <ParagraphTotal>Total: </ParagraphTotal>
                                <ParagraphTotal>R$ 33,20</ParagraphTotal>
                            </ParagraphAlignmentPrices>
                        </ContainerTotalItemsDelivery>
                        <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
                    </ContainerFinalPurchase>
                </AlignContainerInformationDeliveryTitle>
            </MainContainer>

        </>
    )
}