export interface ModalProps {
    show: boolean
    title: string
    content: string
    submitButtonTitle: string
    setShow: (show: boolean) => void
    customCallBack: () => void
}
