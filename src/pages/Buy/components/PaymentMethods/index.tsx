import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ColumnTitleSubtitle, ContainerPayment, DivisionWithValidation, IconDollar, PaymentMethod, SubtitleForm, TitleForm, TitleSubtitleForm, UnityFormasPayment } from "./style";
import { Dispatch, SetStateAction } from "react";

interface PaymentMethodsProps {
    setFormPaymentButton: Dispatch<SetStateAction<string>>
    formPaymentButton: string,
    paymentError: boolean
}

export function PaymentMethods({ setFormPaymentButton, formPaymentButton, paymentError }: PaymentMethodsProps) {
    return (
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
            <DivisionWithValidation>
                <UnityFormasPayment>
                    <PaymentMethod onClick={() => setFormPaymentButton('Cartão de Crédito')}>
                        <CreditCard size={22} color="#8047F8" />
                        CARTÃO DE CRÉDITO
                    </PaymentMethod>
                    <PaymentMethod onClick={() => setFormPaymentButton('Cartão de Débito')}>
                        <Bank size={22} color="#8047F8" />
                        CARTÃO DE DÉBITO
                    </PaymentMethod>
                    <PaymentMethod onClick={() => setFormPaymentButton('Dinheiro')}>
                        <Money size={22} color="#8047F8" />
                        DINHEIRO
                    </PaymentMethod>
                </UnityFormasPayment>
                {paymentError && !formPaymentButton && <span>Selecione uma forma de pagamento</span>}
            </DivisionWithValidation>
        </ContainerPayment>
    )
}