import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmationTitles, ContainerContainingTitlesAndDeliveryInformation, DeliveryAddressInformation, ImageIllustration, InformationInColumn, InformationWithIcon, MainContainer, MainTitleConfirmation, SubTitleConfirmation } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { Icon } from "../../components/Icon";

export function OrderConfirmed() {
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
                                    Rua João Daniel Martinelli, 102
                                </b>
                            </span>
                            <span>
                                Farrapos - Porto Alegre, RS
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
                                    Cartão de Crédito
                                </b>
                            </span>
                        </InformationInColumn>
                    </InformationWithIcon>
                    {/* <InformationWithIcon>
                        <CircleIcon>
                            <Timer size={16} weight="fill" color="#FAFAFA" />
                        </CircleIcon>
                        <InformationInColumn>
                            <InformativeParagraph>Previsão de entrega</InformativeParagraph>
                            <InformativeParagraph style={{ fontWeight: 'bold' }}>20 min - 30 min</InformativeParagraph>
                        </InformationInColumn>
                    </InformationWithIcon>
                    <InformationWithIcon>
                        <CircleIcon>
                            <CurrencyDollar size={16} weight="fill" color="#FAFAFA" />
                        </CircleIcon>
                        <InformationInColumn>
                            <InformativeParagraph>Pagamento na entrega</InformativeParagraph>
                            <InformativeParagraph style={{ fontWeight: 'bold' }}>Cartão de Crédito</InformativeParagraph>
                        </InformationInColumn>
                    </InformationWithIcon> */}
                </DeliveryAddressInformation>
            </ContainerContainingTitlesAndDeliveryInformation>
            <ImageIllustration>
                <img src={Illustration} alt="Ilustração de um motoboy entregando um café" />
            </ImageIllustration>
        </MainContainer>
    )
}