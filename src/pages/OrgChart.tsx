import { useState, useEffect, useRef } from "react";
// import './style.css';
import { OrgChartComponent } from "../components/OrgChart";
import * as d3 from "d3";

export const OrgChart = (props: any) => {
  const [data, setData] = useState(null);
  let addNodeChildFunc: any = null;

  function addNode() {
    const node = {
      nodeId: "new Node",
      parentNodeId: "O-6066",
    };

    addNodeChildFunc(node);
  }

  function onNodeClick(nodeId: any) {
    // console.log('d3', d3.event);
    alert("clicked " + nodeId);
  }

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
    ).then((data: any) => {
      setData(data);
    });
  }, [true]);

  return (
    <div>
      Click node to trigger action in parent or &nbsp;
      <button onClick={() => addNode()}>add node as root's child</button>
      <OrgChartComponent
        setClick={(click: any) => (addNodeChildFunc = click)}
        onNodeClick={onNodeClick}
        data={data}
      />
    </div>
  );
};
