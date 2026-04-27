import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmationTitles, ContainerContainingTitlesAndDeliveryInformation, DeliveryAddressInformation, ImageIllustration, InformationInColumn, InformationWithIcon, MainContainer, MainTitleConfirmation, SubTitleConfirmation } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { Icon } from "../../components/Icon";
import { useContext } from "react";
import { InformationCustomerContext } from "../../contexts/informationCustomerCoontext";

export function OrderConfirmed() {
    const { inputsForm, formPayment} = useContext(InformationCustomerContext)
    return (
        <MainContainer>
            <ContainerContainingTitlesAndDeliveryInformation>
                <ConfirmationTitles>
                    <MainTitleConfirmation>Uhu! Pedido confirmado</MainTitleConfirmation>
                    <SubTitleConfirmation>Agora é só aguardar que logo o café chegará até você</SubTitleConfirmation>
                </ConfirmationTitles>
                <DeliveryAddressInformation>
                    <InformationWithIcon>
                        <Icon color="purple" icon={<MapPin weight="fill" size={16} />} />
                        <InformationInColumn>
                            <span>
                                Entrega em{" "}
                                <b>
                                    {inputsForm.road}, {inputsForm.number}
                                </b>
                            </span>
                            <span>
                                {inputsForm.neighborhood} - {inputsForm.city}, {inputsForm.state}
                            </span>
                        </InformationInColumn>
                    </InformationWithIcon>
                    <InformationWithIcon>
                        <Icon color="yellow" icon={<Timer weight="fill" size={16} />} />
                        <InformationInColumn>
                            <span>
                                Previsão de entrega{" "}
                            </span>
                            <span>
                                <b>
                                    20 min - 30 min
                                </b>
                            </span>
                        </InformationInColumn>
                    </InformationWithIcon>
                    <InformationWithIcon>
                        <Icon color="yellowDark" icon={<CurrencyDollar weight="fill" size={16} />} />
                        <InformationInColumn>
                            <span>
                                Pagamento na entrega{" "}
                            </span>
                            <span>
                                <b>
                                    {formPayment}
                                </b>
                            </span>
                        </InformationInColumn>
                    </InformationWithIcon>
                </DeliveryAddressInformation>
            </ContainerContainingTitlesAndDeliveryInformation>
            <ImageIllustration>
                <img src={Illustration} alt="Ilustração de um motoboy entregando um café" />
            </ImageIllustration>
        </MainContainer>
    )
}