import { toJpeg } from 'html-to-image';
import { Node, Edge, MarkerType } from "reactflow";

export const exportDiagram = async (reactFlowWrapper: React.RefObject<HTMLDivElement>) => {
  if (!reactFlowWrapper.current) return;

  const reactFlowElement = reactFlowWrapper.current.querySelector('.react-flow') as HTMLElement;

  if (!reactFlowElement) return;

  try {
    const originalBackgroundColor = reactFlowElement.style.backgroundColor;
    reactFlowElement.style.backgroundColor = '#ffffff';

    const pngContent = await toJpeg(reactFlowElement, { quality: 1.0 });
    reactFlowElement.style.backgroundColor = originalBackgroundColor;
    const link = document.createElement('a');
    link.href = pngContent;
    link.download = 'diagram.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error exporting diagram:', error);
  }
};

const extractUltimateShareholders = (shareholders: any) => {
  const UltimateShareholders = shareholders.filter((sh:any) => sh.isUltimate);
  const Shareholders = shareholders.filter((sh:any) => !sh.isUltimate);
  return { UltimateShareholders, Shareholders };
};

export const generateDiagramData = (data: any) => {
  const { UltimateShareholders, Shareholders } = extractUltimateShareholders(data.shareholders);
  const Entity = [data.entity];
  const Subsidiaries = data.subsidiaries;

 
  const HeadingNodes: Node[] = [
    { id: "h1", type: "custom", data: { label: "Ultimate Shareholders" }, position: { x: 50, y: -30 } },
    { id: "h2", type: "custom", data: { label: "Shareholders" }, position: { x: 250, y: -30 } },
    { id: "h3", type: "custom", data: { label: "Entity" }, position: { x: 450, y: -30 } },
    { id: "h4", type: "custom", data: { label: "Subsidiaries" }, position: { x: 650, y: -30 } },
  ];

  const arrays = [UltimateShareholders, Shareholders, Entity, Subsidiaries];
  const maxNodes = Math.max(...arrays.map((arr: any[]) => arr.length));

  const getVerticalCenter = (totalNodes: number, baseY: number = 100, yIncrement: number = 100) => {
    const centerY = baseY + ((totalNodes - 1) * yIncrement) / 2;
    return centerY;
  };

  const getNodePosition = (type: string, index: number, maxNodes: number, baseY: number = 70, yIncrement: number = 100) => {
    const centerY = getVerticalCenter(maxNodes, baseY, yIncrement);

    switch (type) {
      case "ultimateShareholder":
        return { x: 50, y: centerY + (index - UltimateShareholders.length / 2) * yIncrement };
      case "shareholder":
        return { x: 250, y: centerY + (index - Shareholders.length / 2) * yIncrement };
      case "entity":
        return { x: 450, y: centerY };
      case "subsidiary":
        return { x: 650, y: Subsidiaries.length === 1 ? centerY : centerY + (index - Subsidiaries.length / 2) * yIncrement };
      default:
        return { x: 0, y: 0 };
    }
  };

  const mappedNodes: Node[] = [
    ...HeadingNodes,
    ...UltimateShareholders.map((item: any, index: number) => ({
      id: `ush-${index}`,
      type: "custom",
      data: { label: item.name, remarks: item.remarks, subheading: item.isUltimate ? "" : item.isDirect ? "" : "" },
      position: getNodePosition("ultimateShareholder", index, maxNodes),
    })),
    ...Shareholders.map((item: any, index: number) => ({
      id: `sh-${index}`,
      type: "custom",
      data: { label: item.name, remarks: item.remarks },
      position: getNodePosition("shareholder", index, maxNodes),
    })),
    ...Entity.map((item: any, index: number) => ({
      id: `ent-${index}`,
      type: "custom",
      data: { label: item.name, remarks: item.remarks },
      position: getNodePosition("entity", index, maxNodes),
    })),
    ...Subsidiaries.map((item: any, index: number) => ({
      id: `sub-${index}`,
      type: "custom",
      data: { label: item.name, remarks: item.remarks },
      position: getNodePosition("subsidiary", index, maxNodes),
    })),
  ];

  const mappedEdges: Edge[] = [
    ...(Shareholders.length > 0
      ? Shareholders.map((_:any, index: number) => ({
          id: `e-sh${index}-ent0`,
          source: `sh-${index}`,
          target: `ent-0`,
          label: Shareholders[index].owned,
          markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15, color: "#000000" },
          style: { strokeWidth: 2, stroke: "#000000" },
          sourceHandle: "a",
          targetHandle: "b",
        }))
      : []),
    ...(Subsidiaries.length > 0
      ? Subsidiaries.map((_:any, index: number) => ({
          id: `e-ent0-sub${index}`,
          source: `ent-0`,
          target: `sub-${index}`,
          label: Subsidiaries[index].owned,
          markerEnd: { type: MarkerType.ArrowClosed, width: 15, height: 15, color: "#000000" },
          style: { strokeWidth: 2, stroke: "#000000" },
          sourceHandle: "c",
          targetHandle: "d",
        }))
      : []),
  ];

  return { nodes: mappedNodes, edges: mappedEdges };
};
