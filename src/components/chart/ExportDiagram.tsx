import React, { useRef, useState } from "react";
import { Button } from "antd";
import ReactFlow, {
  Background,
  Node,
  Edge,
  ReactFlowInstance,
} from "reactflow";
import CustomNode from "./CustomNode";
import {
  exportDiagram,
  generateDiagramData,
} from "../../utilities/generateChart";
import "reactflow/dist/style.css";

interface ExportDiagramProps {
  data: any;
}

export const ExportDiagram: React.FC<ExportDiagramProps> = ({ data }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    const { nodes: diagramNodes, edges: diagramEdges } =
      generateDiagramData(data);
    setNodes(diagramNodes);
    setEdges(diagramEdges);

    setTimeout(() => {
      if (reactFlowWrapper.current) {
        exportDiagram(reactFlowWrapper);
      } else {
        console.error("React Flow wrapper not found.");
      }
    }, 500);
  };

  const handleInit = (reactFlowInstance: ReactFlowInstance) => {
    setTimeout(() => reactFlowInstance.fitView(), 0);
  };

  return (
    <>
      <Button type="text" onClick={handleExport}>
        Export as Image
      </Button>
      <div
        ref={reactFlowWrapper}
        style={{
          width: "900px",
          height: "600px",
          position: "absolute",
          top: "-9999px", // Position off-screen
          backgroundColor: "white",
          // visibility: 'hidden',
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onInit={handleInit}
          nodeTypes={{ custom: CustomNode }}
          fitView
        >
          <Background color="#ffffff" gap={0} />
          <svg>
            <defs>
              <marker
                id="arrowBlack"
                viewBox="0 0 12 12"
                refX="9"
                refY="6"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path
                  d="M2,2 L2,10 L10,6 L2,2"
                  style={{ fill: "black", stroke: "black" }}
                />
              </marker>
            </defs>
          </svg>
        </ReactFlow>
      </div>
      <style>
        {`
        .react-flow__attribution {
          display: none !important;
        }
      `}
      </style>
    </>
  );
};
