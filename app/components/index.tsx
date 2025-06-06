import { Response } from "../home/functions";
import { Media, ModalResponse, SubTitle, Txt } from "../home/styles";

const Modal = ({ msg, status, styled }: Response) => {
    return (
        <ModalResponse>
            <Media style={styled}>{status}</Media>
            <SubTitle>{msg}</SubTitle>
        </ModalResponse>

    )

}

export default Modal;