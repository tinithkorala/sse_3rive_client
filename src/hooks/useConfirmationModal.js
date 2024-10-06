import { useState } from "react";

const useConfirmationModal = () => {
  const [modalConfig, setModalConfig] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hideModal = () => {
    setModalConfig(null);
    setIsModalOpen(false);
  }

  return {
    modalConfig,
    isModalOpen,
    setModalConfig,
    hideModal,
    setIsModalOpen
  };
};

export default useConfirmationModal;
