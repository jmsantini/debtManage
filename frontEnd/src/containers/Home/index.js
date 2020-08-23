import React, { useState } from "react";
import DebtForm from "../DebtForm/index";
import ClientDebtList from "../ListOfClientsDebt/index"
import Modal from "react-modal"
import './styled.css'
Modal.setAppElement('#root')



function Home() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className="contentDiv">
            <button onClick={() => setModalIsOpen(true)} className='ModalOpen'>New Debt</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal" overlayClassName="Overlay">
                <DebtForm />
                <button onClick={() => setModalIsOpen(false)} className="ModalClose">Close</button>
            </Modal>

            <div className="debt_list">
                <ClientDebtList />
            </div>

        </div>
    )

}




export default Home;
