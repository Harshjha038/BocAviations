import { Modal, Button, Space } from 'antd';
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface CustomInfoModalProps {
  title: string;
  content: React.ReactNode;
  onOk?: () => void;
  buttonStyles?: React.CSSProperties;
}

export const showCustomInfoModal = ({
  title,
  content,
  onOk,
  buttonStyles,
}: CustomInfoModalProps) => {
  Modal.info({
    title,
    content,
    onOk,
    centered: true, 
    icon: <ExclamationCircleOutlined style={{ color: "#FAAD14" }} />, 
    footer: (
      <div style={{ textAlign: 'right' }}>
        <Space>
          <Button key="cancel" onClick={() => Modal.destroyAll()} >
            No
          </Button>
          <Button key="ok" type="primary" onClick={() => {
                if (onOk) {
                  onOk();
                }
                Modal.destroyAll()
              }} style={buttonStyles}>
            Yes
          </Button>
        </Space>
      </div>
    ),
  });
};
