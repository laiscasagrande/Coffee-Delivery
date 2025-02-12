import { MapPinLine } from "phosphor-react";
import { ColumnTitleSubtitle, CompleteYourOrder, ContainerForm, Icon, SubtitleForm, TitleForm, TitleSubtitleForm } from "./styles";
import { FormAddress } from "./components/FormAddress";

export function Buy() {
    return (
        <>
            <CompleteYourOrder>
                Complete seu pedido
            </CompleteYourOrder>
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
                <FormAddress/>
            </ContainerForm>
            
        </>
    )
}