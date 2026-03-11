import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ColumnTitleSubtitle, ContainerPayment, IconDollar, PaymentMethod, SubtitleForm, TitleForm, TitleSubtitleForm, UnityFormasPayment } from "./style";
import { Dispatch, SetStateAction } from "react";

interface PaymentMethodsProps {
  setFormPaymentButton: Dispatch<SetStateAction<string>>
}

export function PaymentMethods({setFormPaymentButton}: PaymentMethodsProps) {
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
            <UnityFormasPayment>
                <PaymentMethod onClick={() => setFormPaymentButton('credit')}>
                    <CreditCard size={22} color="#8047F8" />
                    CARTÃO DE CRÉDITO
                </PaymentMethod>
                <PaymentMethod onClick={() => setFormPaymentButton('debit')}>
                    <Bank size={22} color="#8047F8" />
                    CARTÃO DE DÉBITO
                </PaymentMethod>
                <PaymentMethod onClick={() => setFormPaymentButton('money')}>
                    <Money size={22} color="#8047F8" />
                    DINHEIRO
                </PaymentMethod>
            </UnityFormasPayment>
        </ContainerPayment>
    )
}