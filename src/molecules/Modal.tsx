import React, { useState } from 'react';
import { Modal, ModalProps} from 'antd';
import {CButton} from "../atoms/Button";


type CModalProps = ModalProps & {
    buttonProps?: React.ComponentProps<typeof CButton>
}



export const CModal: React.FC<CModalProps> = ({ buttonProps, ...modalProps }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CButton type="primary" onClick={showModal}></CButton>
            <Modal {...modalProps } open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </Modal>
        </>
    );
};

