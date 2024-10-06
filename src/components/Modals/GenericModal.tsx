import React from "react";
import { Modal, Button } from "antd";

interface GenericModalProps {
  title: string;
  open: boolean;
  onConfirm: () => void;
  children: React.ReactNode;
  onCancel: () => void;
}

export const GenericModal: React.FC<GenericModalProps> = ({
  title,
  open,
  onConfirm,
  children,
  onCancel,
}) => {
  return (
    <Modal
      title={title}
      centered
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="confirm" type="primary" onClick={onConfirm}>
          Confirm
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};
