import React, { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "./CustomNode.css";

interface CustomNodeData {
  label: string;
  remarks?: string;
  subheading?: string;
  remarksBgColor?: string;
}

type CustomNodeProps = NodeProps<CustomNodeData>;

const noHandleNodes = new Set(["h1", "h2", "h3", "h4"]);

const CustomNode: React.FC<CustomNodeProps> = memo(({ data, id }) => {
  const isNoHandleNode = noHandleNodes.has(id);
  const nodeClass = isNoHandleNode
    ? "node node-no-handles"
    : "node node-with-handles";

  return (
    <div className={nodeClass}>
      <div className="node-content">
        <div className="node-label">{data.label}</div>
        {data.subheading && <div className="subheading">{data.subheading}</div>}
        {data.remarks && (
          <div
            className="node-remarks"
            style={{ backgroundColor: data.remarksBgColor }}
          >
            {data.remarks}
          </div>
        )}
      </div>

      {!isNoHandleNode && (
        <>
          <Handle
            type="source"
            position={Position.Right}
            id="f"
            className="handle"
          />
          <Handle
            type="target"
            position={Position.Left}
            id="g"
            className="handle"
          />
        </>
      )}
    </div>
  );
});

export default CustomNode;
