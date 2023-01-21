import {ButtonRowStyled, ModalContentStyled, ModalInfoStyled, ModalStyled,} from './modal.styles'
import {ModalProps} from './modal.types'

export default function Modal({
                                  show,
                                  setShow,
                                  title,
                                  content,
                                  submitButtonTitle,
                                  customCallBack,
                              }: ModalProps) {
    if (!show) return null

    return (
        <ModalStyled>
            <ModalContentStyled>
                <h3>{title}</h3>
                <ModalInfoStyled>{content}</ModalInfoStyled>
                <ButtonRowStyled>
                    <button
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            customCallBack()
                            setShow(false)
                        }}
                    >
                        {submitButtonTitle}
                    </button>
                </ButtonRowStyled>
            </ModalContentStyled>
        </ModalStyled>
    )
}
