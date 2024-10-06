import React, { FC } from "react";
import { Typography, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { reviewers } from "../../utilities/contants";
import { GenericModal } from "./GenericModal";

const { Text } = Typography;

interface IndicativeRatingApprovalModalProps {
  isOpen: boolean;
  selectedReviewer: string;
  onSelectReviewer: (key: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const ReviewersList = reviewers.map((reviewer) => ({
  label: reviewer.label,
  key: reviewer.key,
}));

const menuProps = (onClick: (key: string) => void) => ({
  items: ReviewersList,
  onClick: (e: any) => onClick(e.key),
});

const IndicativeRatingApprovalModal: FC<IndicativeRatingApprovalModalProps> = ({
  isOpen,
  selectedReviewer,
  onSelectReviewer,
  onConfirm,
  onCancel,
}) => (
  <GenericModal
    title="Seek approval for indicative rating"
    open={isOpen}
    onConfirm={onConfirm}
    onCancel={onCancel}
  >
    <Space direction="vertical" size="middle">
      <Text>
        Please ensure all financial statements are compiled and spread before
        submitting for approval.
      </Text>
      <Dropdown menu={menuProps(onSelectReviewer)}>
        <Button
          block
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>{selectedReviewer}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  </GenericModal>
);

export default IndicativeRatingApprovalModal;
