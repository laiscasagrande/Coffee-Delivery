import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { ColumnTitleSubtitle, CompleteYourOrder, ContainerForm, ContainerPayment, Icon, IconDollar, PaymentMethod, SubtitleForm, TitleForm, TitleSubtitleForm, UnityContainer } from "./styles";
import { FormAddress } from "./components/FormAddress";

export function Buy() {
    return (
        <>
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
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </SubtitleForm>
                        </ColumnTitleSubtitle>
                    </TitleSubtitleForm>
                    <PaymentMethod>
                        CARTÃO DE CRÉDITO
                    </PaymentMethod>
                    <PaymentMethod>
                        CARTÃO DE CRÉDITO
                    </PaymentMethod>
                    <PaymentMethod>
                        CARTÃO DE CRÉDITO
                    </PaymentMethod>
                </ContainerPayment>
            </UnityContainer>
        </>
    )
}