import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { CircleIcon, ConfirmationTitles, ContainerContainingTitlesAndDeliveryInformation, ContainerInformation, DeliveryAddressInformation, ImageIllustration, InformationInColumn, InformationWithIcon, InformativeParagraph, MainContainer, MainTitleConfirmation, SubTitleConfirmation } from "./styles";
import Illustration from '../../assets/Illustration.svg'

export function OrderConfirmed() {
    return (
        <MainContainer>
            <ContainerContainingTitlesAndDeliveryInformation>
                <ConfirmationTitles>
                    <MainTitleConfirmation>Uhu! Pedido confirmado</MainTitleConfirmation>
                    <SubTitleConfirmation>Agora é só aguardar que logo o café chegará até você</SubTitleConfirmation>
                </ConfirmationTitles>
                <DeliveryAddressInformation>
                    <ContainerInformation>
                        <InformationWithIcon>
                            <CircleIcon>
                                <MapPin size={16} weight="fill" color="#FAFAFA" />
                            </CircleIcon>
                            <InformationInColumn>
                                <InformativeParagraph>Entrega em <span style={{ fontWeight: 'bold' }}>Rua João Daniel Martinelli, 102</span></InformativeParagraph>
                                <InformativeParagraph>Farrapos - Porto Alegre, RS</InformativeParagraph>
                            </InformationInColumn>
                        </InformationWithIcon>
                        <InformationWithIcon>
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
                        </InformationWithIcon>
                    </ContainerInformation>
                </DeliveryAddressInformation>
            </ContainerContainingTitlesAndDeliveryInformation>
            <ImageIllustration src={Illustration}/>
        </MainContainer>
    )
}