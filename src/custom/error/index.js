import React, {useCallback} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-awesome-modal';
import Wrapper from "./style";

const ModalContainer = ({setState, state}) => {
    const closeModal = useCallback(() => {setState(false)},[state])
    // const openModal = useCallback(() => {setState(true)},[state])
    return (
        <Wrapper>
            <section className="section">
                <Modal
                    visible={true}
                    width="500"
                    height="200"
                    effect="fadeInUp"
                    className="modal_container"
                    onClickAway={closeModal}>
                    <div className="modaldiv">
                        <div className="closebtn">  <CloseIcon className="pointx" onClick={closeModal} /></div>
                        <h1 className="modaltitle">Savolingiz Muvaffaqiyatli qabul qilindi</h1>
                        <p>Qisqa vaqt ichida o‘rganib chiqib, tez orada javob berishga harakat qilamiz.</p>

                    </div>
                </Modal>
            </section>

        </Wrapper>
    )
}

export default ModalContainer
