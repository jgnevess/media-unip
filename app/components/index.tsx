import { Response } from "../home/functions";
import { Media, ModalResponse, Wrapper } from "../home/styles";

const Modal = ({ msg, status, styled }: Response) => {
    return (
        <ModalResponse>
            <Media style={styled}>{status}</Media>
            <Media>{msg}</Media>
        </ModalResponse>

    )

}

export default Modal;